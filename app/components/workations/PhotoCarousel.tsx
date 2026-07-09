"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PlaceholderPhoto from "../home/PlaceholderPhoto";

export default function PhotoCarousel({
  photos,
  fallbackCaption,
  alt,
  arrows = false,
  autoplay = false,
  autoplayInterval = 4000,
  sizes = "(max-width: 768px) 100vw, 800px",
}: {
  photos?: string[];
  fallbackCaption: string;
  alt?: string;
  arrows?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const hasPhotos = !!photos && photos.length > 0;
  const count = hasPhotos ? photos!.length : 0;

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [autoplay, count, autoplayInterval]);

  if (!hasPhotos) {
    return <PlaceholderPhoto caption={fallbackCaption} />;
  }

  function goPrev() {
    setIndex((i) => (i - 1 + count) % count);
  }
  function goNext() {
    setIndex((i) => (i + 1) % count);
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      {photos!.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt ?? fallbackCaption}
          fill
          sizes={sizes}
          priority={i === 0}
          className={`object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {arrows && count > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Photo précédente"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brown/55 text-cream backdrop-blur-sm transition-colors hover:bg-brown"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goNext();
            }}
            aria-label="Photo suivante"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brown/55 text-cream backdrop-blur-sm transition-colors hover:bg-brown"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {photos!.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-cream" : "bg-cream/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
