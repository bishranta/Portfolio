export function CircuitBackground() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 h-full w-full opacity-[0.16]"
    >
      <defs>
        <pattern
          id="circuit"
          width="220"
          height="220"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 40 H70 V100 H160 V170 H220"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <path
            d="M40 0 V70 H110 V150 H180 V220"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <path
            d="M0 180 H30 V220"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <rect
            x="92"
            y="82"
            width="36"
            height="36"
            rx="5"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <circle cx="70" cy="40" r="3" fill="var(--line)" />
          <circle cx="160" cy="100" r="3" fill="var(--line)" />
          <circle cx="40" cy="70" r="3" fill="var(--line)" />
          <circle cx="110" cy="150" r="3" fill="var(--line)" />
          <circle cx="180" cy="150" r="3" fill="var(--line)" />
          <circle cx="30" cy="180" r="3" fill="var(--line)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
