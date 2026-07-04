"use client";

import { useState } from "react";
import type { FaqCategory } from "@/lib/faq";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brown/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[14.5px] font-semibold text-brown">{question}</span>
        <span className={`flex-shrink-0 text-lg text-terracotta transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && <p className="pb-4 text-[14px] leading-[1.65] text-brown/70">{answer}</p>}
    </div>
  );
}

export default function FaqAccordion({ faq }: { faq: FaqCategory[] }) {
  return (
    <div className="flex flex-col gap-10">
      {faq.map((cat) => (
        <div key={cat.category}>
          <h2 className="font-serif text-xl font-bold text-brown">{cat.category}</h2>
          <div className="mt-3 rounded-2xl bg-white/60 px-6">
            {cat.items.map((item) => (
              <AccordionItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
