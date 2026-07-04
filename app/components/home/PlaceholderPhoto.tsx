export default function PlaceholderPhoto({ caption }: { caption: string }) {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-brown/25 bg-brown/[0.05] px-6 text-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(115deg, rgba(74,47,36,0.035), rgba(74,47,36,0.035) 3px, transparent 3px, transparent 34px)",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(74,47,36,0.45)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="max-w-[85%] text-[13px] font-medium leading-snug text-brown/55">
        {caption}
      </span>
    </div>
  );
}
