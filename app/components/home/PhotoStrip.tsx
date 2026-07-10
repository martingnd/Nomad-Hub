import PhotoMarquee from "../decor/PhotoMarquee";

const TILES = [
  {
    key: "workspace",
    src: "/images/workspace-mountain.webp",
    alt: "Bureau vitré avec vue sur les montagnes, télétravailleurs en séance de travail",
  },
  {
    key: "coliving",
    src: "/images/photostrip-coliving.png",
    alt: "Salon coliving lumineux avec cuisine ouverte, télétravailleurs installés à table",
  },
  {
    key: "pool",
    src: "/images/photostrip-pool.png",
    alt: "Groupe de télétravailleurs autour d'une table avec ordinateurs portables, au bord d'une piscine",
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
