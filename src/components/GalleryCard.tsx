"use client";

import Image from "next/image";
import Link from "next/link";

type GalleryCardProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

export default function GalleryCard({
  href,
  src,
  alt,
  title,
}: GalleryCardProps) {
  return (
    <Link
      href={href}
      className="gallery-item group relative block aspect-[9/16] w-full max-w-[190px] overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(17,17,17,0.08)] md:max-w-[320px] md:rounded-[30px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 45vw, 320px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
        <h3 className="font-playfair text-2xl text-white md:text-3xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}