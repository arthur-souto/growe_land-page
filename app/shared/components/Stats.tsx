import { STATS } from "../utils/stats";

export default function Stats() {
    return (
        <section style={{ background: "var(--color-forest)", padding: "3.5rem 1.5rem" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="stat-value" style={{ color: "var(--color-leaf)" }}>{stat.value}</div>
                        <div style={{ color: "var(--color-soft)" }}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}