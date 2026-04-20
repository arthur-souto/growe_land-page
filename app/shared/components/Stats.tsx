import { STATS } from "../utils/stats";

const statMeta = [
  {
    bar: 73,
    barColor: "var(--color-danger)",
    hint: "problema",
    hintColor: "rgba(143,35,35,0.12)",
    hintText: "var(--color-danger)",
  },
  {
    bar: 66,
    barColor: "var(--color-mist)",
    hint: "impacto",
    hintColor: "rgba(153,186,230,0.15)",
    hintText: "var(--color-mist)",
  },
  {
    bar: 40,
    barColor: "var(--color-mist)",
    hint: "eficiência",
    hintColor: "rgba(153,186,230,0.15)",
    hintText: "var(--color-mist)",
  },
  {
    bar: 100,
    barColor: "var(--color-highlight-border)",
    hint: "grátis",
    hintColor: "rgba(240,192,64,0.15)",
    hintText: "var(--color-highlight-border)",
  },
];

export default function Stats() {
  return (
    <section style={{ background: "var(--color-navy)", padding: "5rem 1.5rem" }}>

      {/* Eyebrow */}
      <div className="max-w-7xl mx-auto mb-10">
        <span className="live-counter">
          <span className="live-dot" />
          Dados do mercado brasileiro
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => {
          const meta = statMeta[i];
          const isLastCol = i === STATS.length - 1;
          return (
            <div
              key={i}
              className="flex flex-col gap-4 px-8 py-8"
              style={{
                borderBottom: "1px solid rgba(214,232,247,0.08)",
                borderRight: isLastCol ? "none" : "1px solid rgba(214,232,247,0.08)",
              }}
            >
              {/* Badge */}
              <span
                className="badge self-start"
                style={{
                  background: meta.hintColor,
                  color: meta.hintText,
                  border: `1px solid ${meta.hintText}`,
                }}
              >
                {meta.hint}
              </span>

              {/* Value */}
              <div className="stat-value" style={{ color: "var(--color-mist)" }}>
                {stat.value}
              </div>

              {/* Label */}
              <p className="stat-label" style={{ color: "var(--color-soft)", lineHeight: 1.55 }}>
                {stat.label}
              </p>

              {/* Progress bar + percentage */}
              <div className="mt-auto flex flex-col gap-1.5">
                <div
                  className="h-px w-full rounded-full overflow-hidden"
                  style={{ background: "rgba(214,232,247,0.10)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${meta.bar}%`, background: meta.barColor, opacity: 0.85 }}
                  />
                </div>
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase tabular-nums"
                  style={{ color: "rgba(153,186,230,0.4)" }}
                >
                  {meta.bar}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust strip */}
      <div
        className="max-w-7xl mx-auto mt-10 pt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
        style={{ borderTop: "1px solid rgba(214,232,247,0.08)" }}
      >
        <div className="trust-strip" style={{ color: "var(--color-pebble)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z"
              stroke="var(--color-warning)" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
          </svg>
          Dados baseados em pesquisas com PMEs brasileiras
        </div>
        <div className="trust-strip-divider" style={{ background: "rgba(214,232,247,0.15)" }} />
        <div className="trust-strip" style={{ color: "var(--color-pebble)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="var(--color-mist)" strokeWidth="1.2" />
            <path d="M7 4.5v3l1.5 1.5" stroke="var(--color-mist)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Atualizado em 2025
        </div>
        <div className="trust-strip-divider" style={{ background: "rgba(214,232,247,0.15)" }} />
        <div className="trust-strip" style={{ color: "var(--color-pebble)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7l3.5 3.5 6.5-7" stroke="var(--color-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Fonte: SHRM, Gallup, GPTW Brasil
        </div>
      </div>

    </section>
  );
}