import { GroweIcon } from "../utils/growe.icon";

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--color-ink)", padding: "1.5rem 1.5rem" }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
    >
      <div className="flex items-center gap-3">
        <GroweIcon size={28} />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            color: "var(--color-soft)",
          }}
        >
          Growe
        </span>
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--color-pebble)" }}>
        © {new Date().getFullYear()} Growe. Todos os direitos reservados.
      </p>
      <div className="flex gap-6">
        <a
          href="#"
          style={{
            fontSize: "0.8rem",
            color: "var(--color-pebble)",
            textDecoration: "none",
          }}
        >
          Privacidade
        </a>
        <a
          href="#"
          style={{
            fontSize: "0.8rem",
            color: "var(--color-pebble)",
            textDecoration: "none",
          }}
        >
          Termos
        </a>
      </div>
    </footer>
  );
}
