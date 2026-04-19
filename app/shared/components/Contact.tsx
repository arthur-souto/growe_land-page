import { FaWhatsapp } from "react-icons/fa";
import { benefits } from "../utils/benefits";

export default function Contact() {
  const WHATSAPP_NUMBER = "+555193953661";
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Oi! Quero participar do desenvolvimento da Growe 🌱",
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return (
    <section
      style={{ background: "var(--color-cloud)", padding: "5rem 1.5rem" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div id="contato" className="hero-eyebrow justify-center">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Acesso antecipado
        </div>

        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--color-forest)",
            marginBottom: "1rem",
          }}
        >
          Participe do{" "}
          <em className="italic" style={{ color: "var(--color-primary)" }}>
            desenvolvimento
          </em>
          <br />
          da ideia!
        </h2>

        <p
          style={{
            color: "var(--color-stone)",
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Estamos construindo algo novo e queremos você nessa jornada desde o
          início. Compartilhe suas ideias, dê feedback real e ajude a moldar uma
          ferramenta feita para quem realmente importa — você.
        </p>

        {/* Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "var(--color-soft)",
                border: "1px solid var(--color-mist)",
                borderRadius: "16px",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--color-leaf)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {b.icon}
              </div>
              <div className="flex flex-col">
                <strong
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-forest)",
                    lineHeight: 1.3,
                  }}
                >
                  {b.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-mid)",
                    lineHeight: 1.4,
                  }}
                >
                  {b.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--color-mist)",
            marginBottom: "2rem",
          }}
        />

        {/* Card WhatsApp */}
        <div
          style={{
            background: "var(--color-forest)",
            borderRadius: "20px",
            padding: "1.75rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <div>
            <strong
              style={{
                display: "block",
                color: "var(--color-soft)",
                fontSize: "1.125rem",
                fontWeight: 600,
                marginBottom: "0.25rem",
              }}
            >
              Fale direto com a gente
            </strong>
            <span style={{ color: "var(--color-leaf)", fontSize: "0.875rem" }}>
              Resposta em até 24 horas
            </span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
            style={{ background: "#25D366" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5d")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
          >
            <FaWhatsapp />
            Entrar no WhatsApp
          </a>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--color-pebble)",
            marginTop: "1.5rem",
          }}
        >
          Sem spam. Somente conversas importantes sobre o projeto.
        </p>
      </div>
    </section>
  );
}
