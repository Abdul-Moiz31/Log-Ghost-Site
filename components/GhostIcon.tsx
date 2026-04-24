export function GhostIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#7F77DD"
        d="M16 3C10 3 6 7 6 12v3c-1.5 0-2.5.8-2.5 2s1 2 2.5 2h1.5V26c0 2.2 1.8 4 4 4h2c.6 0 1-.4 1-1s-.4-1-1-1h-1c-1.1 0-2-.9-2-2V19h6v-4c4 0 7-2.2 7-5 0-5-4-7-8-7z"
      />
    </svg>
  );
}
