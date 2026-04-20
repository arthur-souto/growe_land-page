export function GroweIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Growe ícone"
    >
      {/* fundo azul claro */}
      <rect width="120" height="120" rx="28" fill="#ECEEF9" />

      {/* tronco – azul escuro */}
      <line x1="60" y1="98" x2="60" y2="46" stroke="#1e2069" strokeWidth="4.5" strokeLinecap="round" />

      {/* galhos superiores – azul escuro */}
      <line x1="60" y1="46" x2="36" y2="24" stroke="#1e2069" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="60" y1="46" x2="84" y2="24" stroke="#1e2069" strokeWidth="3.5" strokeLinecap="round" />

      {/* galhos médios – azul médio */}
      <line x1="60" y1="62" x2="38" y2="46" stroke="#3D4FC4" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="46" stroke="#3D4FC4" strokeWidth="3" strokeLinecap="round" />

      {/* galhos inferiores – azul claro */}
      <line x1="60" y1="78" x2="42" y2="64" stroke="#8494DF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="78" x2="78" y2="64" stroke="#8494DF" strokeWidth="2.5" strokeLinecap="round" />

      {/* bolinhas superiores */}
      <circle cx="36" cy="24" r="8"   fill="#1e2069" />
      <circle cx="84" cy="24" r="8"   fill="#1e2069" />

      {/* bolinhas médias */}
      <circle cx="38" cy="46" r="6.5" fill="#3D4FC4" />
      <circle cx="82" cy="46" r="6.5" fill="#3D4FC4" />

      {/* bolinhas inferiores */}
      <circle cx="42" cy="64" r="5.5" fill="#8494DF" />
      <circle cx="78" cy="64" r="5.5" fill="#8494DF" />

      {/* base / sombra */}
      <ellipse cx="60" cy="98" rx="14" ry="5" fill="#C5CBF0" />
    </svg>
  )
}