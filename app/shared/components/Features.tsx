import { FEATURES } from "../utils/features";

export default function Features() {
    return (
      <section id="funcionalidades" style={{ padding: "5rem 1.5rem", background: "var(--background)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>Funcionalidades</span>
            <h2 className="display-md" style={{ marginBottom: "1rem" }}>
              Tudo que sua equipe precisa para crescer
            </h2>
            <p style={{ color: "var(--color-stone)", maxWidth: "520px", margin: "0 auto" }}>
              Ferramentas que grandes empresas usam, agora acessíveis para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} className="card">
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--color-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-forest)", marginBottom: "0.5rem" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-stone)", lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}