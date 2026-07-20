"use client";

import { useId, type ComponentPropsWithoutRef } from "react";

/*
 * Champs de formulaire : fond transparent, bordure inférieure seule,
 * label flottant qui monte en `label` au focus / quand le champ est rempli.
 * Erreur en `clay`, reliée via aria-describedby.
 */

const inputBase =
  "peer w-full rounded-none border-0 border-b bg-transparent pb-2 pt-6 font-sans text-body text-ink placeholder-transparent transition-colors duration-300 focus:outline-none focus-visible:outline-none";

const labelBase =
  "pointer-events-none absolute left-0 top-6 font-sans text-body text-ink-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-label peer-focus:font-medium peer-focus:uppercase peer-focus:text-brass peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-label peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase";

function borderColor(error?: string): string {
  return error ? "border-clay focus:border-clay" : "border-line focus:border-clay";
}

type CommonProps = {
  label: string;
  error?: string;
};

export function Field({
  label,
  error,
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<"input">, "className" | "id">) {
  const id = useId();
  return (
    <div className="relative">
      <input
        id={id}
        placeholder={label}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${borderColor(error)}`}
        {...rest}
      />
      <label htmlFor={id} className={labelBase}>
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-body-sm text-clay">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({
  label,
  error,
  ...rest
}: CommonProps &
  Omit<ComponentPropsWithoutRef<"textarea">, "className" | "id">) {
  const id = useId();
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder={label}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} resize-none ${borderColor(error)}`}
        {...rest}
      />
      <label htmlFor={id} className={labelBase}>
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-body-sm text-clay">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  error,
  options,
  ...rest
}: CommonProps & { options: { value: string; label: string }[] } & Omit<
    ComponentPropsWithoutRef<"select">,
    "className" | "id"
  >) {
  const id = useId();
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block font-sans text-label font-medium uppercase text-ink-muted"
      >
        {label}
      </label>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        defaultValue=""
        className={`w-full cursor-pointer appearance-none rounded-none border-0 border-b bg-transparent pb-2 pt-2 font-sans text-body text-ink transition-colors duration-300 focus:outline-none ${borderColor(error)}`}
        {...rest}
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-body-sm text-clay">
          {error}
        </p>
      )}
    </div>
  );
}

export function RangeField({
  label,
  min,
  max,
  step,
  value,
  onChange,
  format,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={id}
          className="font-sans text-label font-medium uppercase text-ink-muted"
        >
          {label}
        </label>
        <output
          htmlFor={id}
          className="font-sans text-body tabular-nums text-ink"
        >
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-brass mt-4 w-full"
      />
    </div>
  );
}
