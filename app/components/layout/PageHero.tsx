import PlaceholderPhoto from "../home/PlaceholderPhoto";

export default function PageHero({
  kicker,
  title,
  subtitle,
  cta,
  illustration,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  cta?: React.ReactNode;
  illustration?: React.ReactNode;
}) {
  return (
    <div className="relative h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {illustration ?? <PlaceholderPhoto caption="Photo à venir" />}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[rgba(31,20,15,0.18)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,20,15,0.05)_0%,rgba(31,20,15,0.45)_75%,rgba(31,20,15,0.7)_100%)]" />
      <div className="absolute inset-x-0 top-[190px] mx-auto max-w-site px-6 md:px-12">
        <div className="mb-6 w-fit rounded-full border border-cream/30 bg-cream/[0.16] px-4 py-2 text-[12.5px] font-bold tracking-[0.06em] text-cream">
          {kicker}
        </div>
        <h1 className="mb-[22px] max-w-[720px] font-serif text-[40px] font-bold leading-[1.08] text-cream [text-wrap:balance] md:text-[58px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-[500px] text-lg leading-relaxed text-cream/90 [text-wrap:pretty]">
            {subtitle}
          </p>
        ) : null}
        {cta ? <div className="mt-8 flex flex-wrap items-center gap-6">{cta}</div> : null}
      </div>
    </div>
  );
}
