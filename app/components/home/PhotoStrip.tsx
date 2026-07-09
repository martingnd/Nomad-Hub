import PhotoMarquee from "../decor/PhotoMarquee";

const TILES = [
  {
    key: "workspace",
    src: "/images/workspace-mountain.webp",
    alt: "Bureau vitré avec vue sur les montagnes, télétravailleurs en séance de travail",
  },
  {
    key: "coliving",
    caption: "Déposer une photo - salon coliving lumineux",
  },
  {
    key: "pool",
    caption: "Déposer une photo - piscine, télétravailleurs",
  },
];

export default function PhotoStrip() {
  return (
    <div className="bg-beige py-14 md:py-[72px]">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <PhotoMarquee tiles={TILES} />
      </div>
    </div>
  );
}
