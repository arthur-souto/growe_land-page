export function GroweIcon({ size = 40 }: { size?: number }) {
  const s = size / 120
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Growe ícone"
    >
      <rect width="120" height="120" rx="28" fill="var(--color-soft)" />
      <line x1="60" y1="98" x2="60" y2="46" stroke="var(--color-forest)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="60" y1="46" x2="36" y2="24" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="60" y1="46" x2="84" y2="24" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="60" y1="62" x2="38" y2="46" stroke="var(--color-mid)" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="62" x2="82" y2="46" stroke="var(--color-mid)" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="78" x2="42" y2="64" stroke="var(--color-leaf)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="78" x2="78" y2="64" stroke="var(--color-leaf)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="24" r="8"   fill="var(--color-primary)" />
      <circle cx="84" cy="24" r="8"   fill="var(--color-primary)" />
      <circle cx="38" cy="46" r="6.5" fill="var(--color-mid)" />
      <circle cx="82" cy="46" r="6.5" fill="var(--color-mid)" />
      <circle cx="42" cy="64" r="5.5" fill="var(--color-leaf)" />
      <circle cx="78" cy="64" r="5.5" fill="var(--color-leaf)" />
      <ellipse cx="60" cy="98" rx="14" ry="5" fill="var(--color-mist)" />
    </svg>
  )
}