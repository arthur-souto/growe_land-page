import { Button } from "@/components/ui/button";
import { LeadForm } from "./Lead-form";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const WHATSAPP_NUMBER = "+555193953661";
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Oi! Quero participar do desenvolvimento da Growe 🌱",
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return (
    <section className="relative overflow-hidden  px-6 py-20 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="hidden md:block absolute -top-24 -right-24 w-64 h-64 rounded-full bg-(--color-soft) opacity-40 blur-3xl z-0" />
      <div className="hidden md:block absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-(--color-soft) opacity-30 blur-2xl z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-soft) border border-(--color-mist) text-sm font-semibold text-(--color-primary) mb-6">              <svg
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
              Acesso antecipado — apenas 47 vagas gratuitas restantes
            </div>

            <h1 className="mt-6 mb-6 animate-fade-up font-serif text-5xl font-semibold leading-[1.02] text-primary md:text-6xl lg:text-7xl" style={{ animationDelay: "80ms" }}>              Sua equipe cresce.{" "}
              <span className="relative inline-block">
                <em className="text-gradient font-serif italic font-normal">Você enxerga.</em>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                  <path d="M2 6 Q 100 -2 198 6" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-4 max-w-xl text-(--color-stone)">
              Growe é a plataforma de avaliação e gestão de desempenho feita
              para pequenas e médias empresas brasileiras. Simples de usar,
              poderosa nos resultados.
            </p>

            {/* Outcome-driven sub-line */}
            <p className="text-base leading-relaxed mb-10 max-w-xl text-(--color-stone) font-medium">
              Chega de planilha e feeling. Saiba exatamente quem merece crescer
              — e por quê.
            </p>


            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <Button asChild size="lg" className="group hover-lift">
                <a href="#cadastro">
                  Garantir 3 meses grátis
                  <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-lift">
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </div>

            {/* Reassurance line + Social links */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="text-sm text-(--color-pebble)">
                Sem cartão de crédito &nbsp;·&nbsp; Sem compromisso
                &nbsp;·&nbsp; Cancele quando quiser
              </p>

              <div className="w-px h-4 bg-(--color-soft) hidden sm:block" />


              <div className="flex items-center gap-3 mt-6">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {['A', 'L', 'M', 'J', 'R'].map(l => (
                    <div key={l} className="w-8 h-8 rounded-full bg-(--color-sky) border-2 border-white flex items-center justify-center text-xs font-bold text-(--color-navy)">{l}</div>
                  ))}
                </div>
                <div>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                  <p className="text-sm text-(--color-stone)"><strong>+</strong> Entre na lista de espera</p>
                </div>
              </div>
              {/* Social icons */}
              <div className="flex items-center gap-1">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/growesoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-(--color-pebble) hover:text-(--color-primary) hover:bg-(--color-soft) transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.5"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/usegrowe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-(--color-pebble) hover:text-(--color-primary) hover:bg-(--color-soft) transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-(--color-pebble) hover:text-(--color-primary) hover:bg-(--color-soft) transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Form Card */}
          <div className="lg:col-span-5">
            <div
              id="cadastro"
              className="relative bg-(--background) border border-(--color-soft) rounded-md p-8 md:p-10 shadow-sm"
            >
              {/* Scarcity indicator at top of card */}
              <div className="flex items-center gap-2 mb-6 bg-(--color-soft) rounded-lg px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-(--color-primary) animate-pulse shrink-0" />
                <p className="text-sm font-medium text-(--color-forest)">
                  <span className="font-bold">47 vagas</span> gratuitas
                  restantes — acesso fecha em 8 dias
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-(--color-forest)">
                  Garanta seu acesso gratuito
                </h2>
                <p className="text-(--color-stone)">
                  Entre agora e ganhe{" "}
                  <span className="font-semibold text-(--color-primary)">
                    3 meses grátis
                  </span>{" "}
                  quando lançarmos.
                </p>
              </div>

              <LeadForm variant="hero" />

              {/* Trust signals below form */}
              <div className="mt-6 pt-6 border-t border-(--color-soft) flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-(--color-stone)">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13 4L6.5 11 3 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Sem cartão de crédito
                </div>
                <div className="flex items-center gap-2 text-sm text-(--color-stone)">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13 4L6.5 11 3 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Acesso imediato ao beta assim que lançar
                </div>
                <div className="flex items-center gap-2 text-sm text-(--color-stone)">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13 4L6.5 11 3 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Você molda o produto — seu feedback importa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
