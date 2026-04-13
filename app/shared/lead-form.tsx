import { useState } from "react"

export function LeadForm({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nome || !email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, empresa }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setMessage("Ótimo! Você entrou na lista. Avisaremos assim que abrirmos o acesso.")
      setNome(""); setEmail(""); setEmpresa("")
    } catch {
      setStatus("error")
      setMessage("Algo deu errado. Tente novamente.")
    }
  }

  if (status === "success") {
    return (
      <div style={{
        padding: "1.5rem",
        background: "var(--color-soft)",
        border: "1px solid var(--color-mist)",
        borderRadius: "16px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌱</div>
        <p style={{ fontWeight: 600, color: "var(--color-forest)", marginBottom: "0.25rem" }}>
          Você está na lista!
        </p>
        <p style={{ fontSize: "0.875rem", color: "var(--color-stone)" }}>{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <input
        className="input"
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
        aria-label="Nome"
      />
      <input
        className="input"
        type="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        aria-label="E-mail"
      />
      <input
        className="input"
        type="text"
        placeholder="Nome da empresa (opcional)"
        value={empresa}
        onChange={e => setEmpresa(e.target.value)}
        aria-label="Empresa"
      />
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={status === "loading"}
        style={{ width: "100%", marginTop: "0.25rem" }}
      >
        {status === "loading" ? "Enviando..." : "Quero acesso antecipado"}
      </button>
      {status === "error" && (
        <p style={{ fontSize: "0.8rem", color: "var(--color-danger)", textAlign: "center" }}>{message}</p>
      )}
      <p style={{ fontSize: "0.75rem", color: "var(--color-pebble)", textAlign: "center" }}>
        Sem spam. Sem cartão de crédito. Cancele quando quiser.
      </p>
    </form>
  )
}
