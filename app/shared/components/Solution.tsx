export default function Solution() {
  return (
    <section
      style={{ padding: "5rem 1.5rem", background: "var(--color-soft)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span
            className="badge badge-primary"
            style={{ marginBottom: "1.5rem" }}
          >
            O problema
          </span>
          <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
            Gerenciar pessoas não deveria ser tão difícil
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {[
              "Avaliações feitas em planilhas que ninguém atualiza",
              "Sem histórico — você não sabe quem evoluiu ou piorou",
              "Feedback informal, sem critério, sem evidência",
              "Decisões de promoção baseadas em feeling, não em dados",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    borderRadius: "50%",
                    background: "var(--color-danger-bg, #FCEBEB)",
                    border: "1px solid var(--color-danger-border, #F09595)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 2l6 6M8 2L2 8"
                      stroke="var(--color-danger)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span
                  style={{ fontSize: "0.9rem", color: "var(--color-stone)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span
            className="badge badge-mid"
            style={{ marginBottom: "1.5rem", color: "white" }}
          >
            A solução
          </span>
          <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
            Com Growe, você tem clareza total do seu time
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {[
              "Avaliações estruturadas e automáticas em ciclos regulares",
              "Histórico completo de evolução de cada colaborador",
              "Feedback documentado com critérios e evidências claras",
              "Decisões baseadas em dados reais e métricas objetivas",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    borderRadius: "50%",
                    background: "var(--color-soft)",
                    border: "1px solid var(--color-mist)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5L8 2"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{ fontSize: "0.9rem", color: "var(--color-stone)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
