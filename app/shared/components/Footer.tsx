import { GroweIcon } from "../utils/growe.icon";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    style={{
      fontSize: "0.875rem",
      color: "var(--color-pebble)",
      textDecoration: "none",
      transition: "color 0.2s ease",
      display: "block",
      lineHeight: "1.8",
    }}
    onMouseEnter={(e) =>
      ((e.currentTarget as HTMLAnchorElement).style.color =
        "var(--color-soft)")
    }
    onMouseLeave={(e) =>
      ((e.currentTarget as HTMLAnchorElement).style.color =
        "var(--color-pebble)")
    }
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "var(--color-pebble)",
      textDecoration: "none",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.borderColor = "var(--color-soft)";
      el.style.color = "var(--color-soft)";
      el.style.background = "rgba(255,255,255,0.05)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.borderColor = "rgba(255,255,255,0.15)";
      el.style.color = "var(--color-pebble)";
      el.style.background = "transparent";
    }}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-ink)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3.5rem 2rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "2.5rem",
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <GroweIcon size={28} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--color-soft)",
                letterSpacing: "-0.02em",
              }}
            >
              Growe
            </span>
          </div>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--color-pebble)",
              lineHeight: "1.65",
              maxWidth: "240px",
            }}
          >
            Ferramentas inteligentes para quem quer crescer de verdade. Simples,
            rápido e feito para você.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.25rem" }}>
            {/* Instagram */}
            <SocialIcon href="#" label="Instagram">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            {/* LinkedIn */}
            <SocialIcon href="#" label="LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
            {/* Twitter/X */}
            <SocialIcon href="#" label="Twitter">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Produto */}
        <div>
          <h4
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "var(--color-soft)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Produto
          </h4>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <FooterLink href="#">Funcionalidades</FooterLink>
            <FooterLink href="#">Preços</FooterLink>
            <FooterLink href="#">Novidades</FooterLink>
            <FooterLink href="#">Roadmap</FooterLink>
          </nav>
        </div>

        {/* Empresa */}
        <div>
          <h4
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "var(--color-soft)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Empresa
          </h4>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <FooterLink href="#">Sobre nós</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Carreiras</FooterLink>
            <FooterLink href="#">Contato</FooterLink>
          </nav>
        </div>

        {/* Suporte */}
        <div>
          <h4
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "var(--color-soft)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Suporte
          </h4>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <FooterLink href="#">Central de Ajuda</FooterLink>
            <FooterLink href="#">Documentação</FooterLink>
            <FooterLink href="#">Status</FooterLink>
            <FooterLink href="#">Comunidade</FooterLink>
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      />

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <p style={{ fontSize: "0.78rem", color: "var(--color-pebble)" }}>
          © {new Date().getFullYear()} Growe. Todos os direitos reservados.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <FooterLink href="#">Privacidade</FooterLink>
          <FooterLink href="#">Termos de Uso</FooterLink>
          <FooterLink href="#">Cookies</FooterLink>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}