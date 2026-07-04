import type { Access } from "@/lib/slackChannels";

export default function AccessBadge({ access, note }: { access: Access; note?: string }) {
  if (access === "full") {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage text-[12px] font-bold text-cream">
          ✓
        </span>
        {note && <span className="max-w-[110px] text-center text-[10.5px] leading-tight text-brown/55">{note}</span>}
      </div>
    );
  }
  if (access === "partial") {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-terracotta/70 text-[11px] font-bold text-cream">
          ◐
        </span>
        {note && <span className="max-w-[110px] text-center text-[10.5px] leading-tight text-brown/55">{note}</span>}
      </div>
    );
  }
  return <span className="text-brown/25">—</span>;
}
