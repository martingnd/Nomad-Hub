import { SLACK_CHANNELS } from "@/lib/slackChannels";
import AccessBadge from "./AccessBadge";

export default function SlackMatrix() {
  let lastCategory = "";

  return (
    <div className="overflow-x-auto rounded-2xl bg-white/60">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-brown/15">
            <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-wide text-brown/50">
              Canal
            </th>
            <th className="px-5 py-4 text-center text-[12px] font-bold uppercase tracking-wide text-brown/50">
              Explorer
            </th>
            <th className="px-5 py-4 text-center text-[12px] font-bold uppercase tracking-wide text-terracotta">
              Pro
            </th>
            <th className="px-5 py-4 text-center text-[12px] font-bold uppercase tracking-wide text-sage">
              Business+
            </th>
          </tr>
        </thead>
        <tbody>
          {SLACK_CHANNELS.map((row) => {
            const showCategory = row.category !== lastCategory;
            lastCategory = row.category;
            return (
              <tr key={row.channel} className="border-b border-brown/10 align-top last:border-0">
                <td className="px-5 py-4">
                  {showCategory && (
                    <p className="mb-1 text-[10.5px] font-bold uppercase tracking-wide text-brown/40">
                      {row.category}
                    </p>
                  )}
                  <p className="text-[13.5px] font-medium text-brown">
                    {row.channel}
                    {row.isNew && (
                      <span className="ml-2 rounded-full bg-terracotta/15 px-2 py-0.5 text-[10px] font-bold text-terracotta">
                        NOUVEAU
                      </span>
                    )}
                  </p>
                </td>
                <td className="px-5 py-4 text-center">
                  <div className="flex justify-center">
                    <AccessBadge access={row.explorer.access} note={row.explorer.note} />
                  </div>
                </td>
                <td className="px-5 py-4 text-center">
                  <div className="flex justify-center">
                    <AccessBadge access={row.pro.access} note={row.pro.note} />
                  </div>
                </td>
                <td className="px-5 py-4 text-center">
                  <div className="flex justify-center">
                    <AccessBadge access={row.business.access} note={row.business.note} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
