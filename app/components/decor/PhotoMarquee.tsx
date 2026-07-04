import Image from "next/image";
import PlaceholderPhoto from "../home/PlaceholderPhoto";

export type MarqueeTile = {
  key: string;
  src?: string;
  alt?: string;
  caption?: string;
};

function Tile({ tile }: { tile: MarqueeTile }) {
  return (
    <div className="relative h-[300px] w-[420px] flex-shrink-0 overflow-hidden rounded-[22px]">
      {tile.src ? (
        <Image
          src={tile.src}
          alt={tile.alt ?? ""}
          fill
          sizes="420px"
          className="object-cover"
        />
      ) : (
        <PlaceholderPhoto caption={tile.caption ?? "Déposer une photo"} />
      )}
    </div>
  );
}

export default function PhotoMarquee({ tiles }: { tiles: MarqueeTile[] }) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-6 motion-safe:animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]"
      >
        {[...tiles, ...tiles].map((tile, i) => (
          <Tile key={`${tile.key}-${i}`} tile={tile} />
        ))}
      </div>
    </div>
  );
}
