"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

gsap.registerPlugin(ScrollTrigger);
export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations("Hero");
  const tGallery = useTranslations("Gallery");
  const tCollab = useTranslations("Collaborate");
  const tHomepage = useTranslations("Homepage");
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Hero Text Animation
  //     gsap.fromTo(
  //       heroTextRef.current,
  //       { y: 100, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
  //     );

  //     // Scrollytelling image scale
  //     gsap.to(".hero-image", {
  //       scale: 1.5,
  //       opacity: 0.5,
  //       scrollTrigger: {
  //         trigger: ".hero-section",
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //     });

  //     // Gallery Reveal
  //     gsap.fromTo(
  //       ".gallery-item",
  //       { y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: galleryRef.current,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           scrub: 1,
  //         },
  //       }
  //     );
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <main ref={containerRef} className="relative w-full">
      {/* Hero Section */}
      <section className="hero-section relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prewedding/1.jpg"
            alt="Photography Hero"
            fill
            className="object-cover hero-image"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <div className="relative h-screen flex flex-col pb-24 z-10 w-full px-8 md:px-16 text-left items-start justify-end">
          <h1
            ref={heroTextRef}
            className="font-gloock text-6xl md:text-8xl uppercase font-bold tracking-tighter mix-blend-difference text-black md:text-white"
          >
            {t('title')} <br />
            {/* <span className="text-white-900">Photo</span> */}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-lg md:text-2xl font-medium mix-blend-difference text-black md:text-white"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Featured Works Scrollytelling Section */}
      <section
        ref={galleryRef}
        className="relative w-full min-h-screen bg-white py-32 px-8 flex flex-col items-center"
      >
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-7xl font-bold mb-20 uppercase tracking-tighter text-neutral-900">
            {tGallery('title')} <span className="text-neutral-400">{tGallery('subtitle')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="gallery-item relative aspect-[3/4] w-full group overflow-hidden bg-neutral-100 rounded-sm">

              <Image
                src="/muse/2.jpg"
                alt="Portrait"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-1000 group-hover:scale-110"
              />
              <Link href="/gallery/muse">
                <div className="absolute inset-0 flex items-start p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-transparent md:bg-white/0 md:group-hover:bg-white/60 transition-all duration-500">
                  <h3 className="text-3xl font-medium text-neutral-900">{tHomepage('muse')}</h3>
                </div></Link>

            </div>
            <div className="gallery-item relative aspect-[3/4] md:mt-32 w-full group overflow-hidden bg-neutral-100 rounded-sm">
              <Image
                src="/prewedding/8.jpg"
                alt="Landscape"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-1000 group-hover:scale-110"
              />
              <Link href="/gallery/prewedding">
                <div className="absolute inset-0 flex items-start p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-transparent md:bg-white/0 md:group-hover:bg-white/60 transition-all duration-500">
                  <h3 className="text-3xl font-medium text-neutral-900">{tHomepage('prewedding')}</h3>
                </div></Link>
            </div>
            <div className="gallery-item relative aspect-[3/4] w-full group overflow-hidden bg-neutral-100 rounded-sm">
              <Image
                src="/aodai/1.jpg"
                alt="Nature"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-1000 group-hover:scale-110"
              />
              <Link href="/gallery/aodai">
                <div className="absolute inset-0 flex items-start p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-transparent md:bg-white/0 md:group-hover:bg-white/60 transition-all duration-500">
                  <h3 className="text-3xl font-medium text-neutral-900">{tHomepage('aodai')}</h3>
                </div></Link>
            </div>
            <div className="gallery-item relative aspect-[3/4] md:mt-32 w-full group overflow-hidden bg-neutral-100 rounded-sm">
              <Image
                src="/xmas/8.jpg"
                alt="Abstract"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-1000 group-hover:scale-110"
              />
              <Link href="/gallery/xmas">
                <div className="absolute inset-0 flex items-start p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 bg-transparent md:bg-white/0 md:group-hover:bg-white/60 transition-all duration-500">
                  <h3 className="text-3xl font-medium text-neutral-900">{tHomepage('xmas')}</h3>
                </div></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section className="h-[80vh] w-full bg-neutral-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl md:text-8xl font-bold uppercase mb-8 text-neutral-900">
          {tCollab('title')} <br /> <span className="text-neutral-400">{tCollab('subtitle')}</span>
        </h2>
        <Link
          href="/contact"
          className="relative px-8 py-4 bg-neutral-900 text-white text-xl font-medium rounded-full overflow-hidden group hover:shadow-lg transition-shadow"
        >
          <span className="relative z-10 transition-colors group-hover:text-black">{tCollab('button')}</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
        </Link>
      </section>
    </main>
  );
}
