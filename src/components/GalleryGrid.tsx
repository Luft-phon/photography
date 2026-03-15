"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const imagesData = [
  ...Array.from({ length: 18 }).map((_, i) => ({
    src: `/prewedding/${i + 1}${i + 1 === 15 || i + 1 === 16 ? '.JPG' : '.jpg'}`,
    category: "prewedding"
  })),
  ...Array.from({ length: 9 }).map((_, i) => ({
    src: `/muse/${i + 1}.jpg`,
    category: "muse"
  })),
  ...Array.from({ length: 11 }).map((_, i) => ({
    src: `/aodai/${i + 1}.jpg`,
    category: "aodai"
  })),
  ...Array.from({ length: 24 }).map((_, i) => ({
    src: `/xmas/${i + 1}.jpg`,
    category: "xmas"
  })),
  ...Array.from({ length: 10 }).map((_, i) => ({
    src: `/couple/${i + 1}.jpg`,
    category: "couple"
  }))
];

export default function GalleryGrid({ categoryFilter }: { categoryFilter: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCategory = categoryFilter.toLowerCase();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? imagesData
    : imagesData.filter(img => img.category.toLowerCase() === activeCategory);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, filteredImages.length]);

  return (
    <>
      <div ref={containerRef}>
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={`${img.src}-${activeCategory}`}
                className="gallery-photo relative w-full border border-neutral-100/50 mix-blend-multiply shadow-[0_8px_30px_rgb(0,0,0,0.04)] break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => setSelectedIndex(idx)}
              >
                <Image
                  src={img.src}
                  alt={`Gallery Image ${idx + 1}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="absolute top-10 right-4 xl:top-15 xl:right-8 z-[1100]">
              <button
                onClick={closeModal}
                className="text-white p-3 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white p-3 md:p-5 hover:bg-white/10 rounded-full transition-colors z-[110]"
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white p-3 md:p-5 hover:bg-white/10 rounded-full transition-colors z-[110]"
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt={`Full screen image ${selectedIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="select-none"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
