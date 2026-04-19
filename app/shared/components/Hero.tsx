import { LeadForm } from "./Lead-form";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-20 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="hidden md:block absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--color-soft)] opacity-40 blur-3xl z-0" />
      <div className="hidden md:block absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[var(--color-soft)] opacity-30 blur-2xl z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide uppercase mb-6 text-[var(--color-primary)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                className="animate-pulse"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 4v3l2 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Acesso antecipado aberto
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 text-[var(--color-forest)]">
              Sua equipe cresce.{" "}
              <span className="italic font-serif text-[var(--color-mid)]">
                Você enxerga.
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl text-[var(--color-stone)]">
              Growe é a plataforma de avaliação e gestão de desempenho feita
              para pequenas e médias empresas brasileiras. Simples de usar,
              poderosa nos resultados.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#cadastro"
                className="btn btn-primary px-8 py-4 rounded-xl shadow-lg hover:translate-y-[-2px] transition-transform"
              >
                Quero acesso antecipado
              </a>
              <a
                href="#como-funciona"
                className="btn btn-outline px-8 py-4 rounded-xl hover:bg-[var(--color-soft)] transition-colors"
              >
                Ver como funciona
              </a>
            </div>

            {/* Trust Badges / Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-[var(--color-soft)]">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-[var(--color-primary)]">
                  500+
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-pebble)]">
                  Lista de espera
                </span>
              </div>
              <div className="w-px bg-[var(--color-soft)] self-stretch" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-[var(--color-primary)]">
                  4.9★
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-pebble)]">
                  Beta testers
                </span>
              </div>
              <div className="w-px bg-[var(--color-soft)] self-stretch" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-[var(--color-primary)]">
                  100%
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-pebble)]">
                  Grátis para começar
                </span>
              </div>
            </div>
          </div>

          {/* Hero Form Card */}
          <div className="lg:col-span-5">
            <div
              id="cadastro"
              className="relative bg-[var(--background)] border border-[var(--color-mist)] rounded-[32px] p-8 md:p-10 shadow-[var(--shadow-green-lg)] ring-1 ring-black/5"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[var(--color-forest)]">
                  Entre na lista de espera
                </h2>
                <p className="text-[var(--color-stone)]">
                  Seja um dos primeiros a usar a Growe gratuitamente.
                </p>
              </div>

              <LeadForm variant="hero" />

              {/* Subtle Footer Note for Form */}
              <p className="mt-6 text-center text-xs text-[var(--color-pebble)]">
                Não enviamos spam. Cancele a inscrição a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
