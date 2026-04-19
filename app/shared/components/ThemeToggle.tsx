'use client'

import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center gap-2 cursor-pointer select-none group"
    >
      <span className="text-xs font-medium text-(--color-pebble) group-hover:text-(--color-primary) transition-colors">
        {isDark ? 'Light' : 'Dark'}
      </span>

      {/* track */}
      <div
        className={`
          relative w-10 h-5.5 rounded-full border transition-colors duration-250
          ${isDark
            ? 'bg-[#3B6D11] border-[#2A3D1F]'
            : 'bg-(--color-mist) border-(--color-mist)'
          }
        `}
      >
        {/* thumb */}
        <div
          className={`
            absolute top-[3px] w-4 h-4 rounded-full transition-all duration-250
            ${isDark
              ? 'left-5.25 bg-[#97C459]'
              : 'left-0.75  bg-white'
            }
          `}
        />
      </div>
    </button>
  )
}