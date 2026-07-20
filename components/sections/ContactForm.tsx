"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import {
  Field,
  RangeField,
  SelectField,
  TextareaField,
} from "@/components/ui/Field";
import { services } from "@/data/services";
import { sendContact } from "@/app/actions/contact";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const formatBudget = (v: number) =>
  v >= 500000 ? "500 000 € et plus" : `${v.toLocaleString("fr-FR")} €`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [budget, setBudget] = useState(150000);

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Merci d'indiquer votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Adresse email invalide.";
    if (phone && !/^[+\d][\d\s.()-]{6,}$/.test(phone))
      next.phone = "Numéro de téléphone invalide.";
    if (message.length < 10)
      next.message = "Décrivez votre projet en quelques mots (10 caractères minimum).";
    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    setServerError(null);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    const result = await sendContact({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      budget,
      message: String(data.get("message") ?? ""),
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
      setBudget(150000);
    } else {
      setStatus("error");
      setServerError(result.error ?? "Une erreur est survenue. Réessayez.");
    }
  };

  if (status === "success") {
    return (
      <div aria-live="polite" className="border-t border-brass pt-8">
        <p className="font-display text-display-md text-ink">
          Merci pour votre demande.
        </p>
        <p className="mt-4 max-w-prose font-sans text-body text-ink-muted">
          Nous revenons vers vous sous 48 heures ouvrées pour convenir d&apos;un
          premier échange.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <Field label="Nom" name="name" autoComplete="name" error={errors.name} />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
      </div>
      <div className="grid gap-10 sm:grid-cols-2">
        <Field
          label="Téléphone"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
        <SelectField
          label="Type de projet"
          name="projectType"
          options={services.map((s) => ({ value: s.slug, label: s.title }))}
        />
      </div>
      <RangeField
        label="Budget estimé"
        min={20000}
        max={500000}
        step={10000}
        value={budget}
        onChange={setBudget}
        format={formatBudget}
      />
      <TextareaField
        label="Votre projet"
        name="message"
        error={errors.message}
      />

      {serverError && (
        <p aria-live="polite" className="font-sans text-body-sm text-clay">
          {serverError}
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
      </Button>
    </form>
  );
}
