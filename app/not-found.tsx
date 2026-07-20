import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-start justify-center bg-ink px-gutter">
      <div className="mx-auto w-full max-w-container">
        <p className="font-display text-display-xl text-chalk">404</p>
        <p className="mt-6 max-w-prose font-sans text-body-lg text-chalk/70">
          Cette page n&apos;existe pas — ou a été rénovée de fond en comble.
        </p>
        <div className="mt-12 text-chalk">
          <Button variant="secondary" href="/">
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </section>
  );
}
