"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { homeAssets } from "@/constants/homeAssets";
import GalleryCard from "@/components/GalleryCard";

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
  const tVideo = useTranslations("VideoSpotlight");
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="relative w-full">
      {/* Hero Section */}
      <section className="hero-section relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={homeAssets.hero}
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

      <section className="relative w-full bg-[linear-gradient(180deg,#fbf7f2_0%,#f7f2ec_100%)] px-8 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-neutral-500 md:text-xs">
              {tVideo('eyebrow')}
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl text-neutral-900">
              {tVideo('title')}
            </h2>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              {tVideo('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-8 md:grid-cols-2">
            <article className="group relative mx-auto aspect-[9/16] w-full max-w-[190px] overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(17,17,17,0.08)] md:max-w-[320px] md:rounded-[30px]">
              <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/35 to-transparent" />

              <video
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                src={homeAssets.video.one}
                poster={homeAssets.poster.one}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/80">
                      {tVideo("video1")}
                    </p>

                    <h3 className="mt-2 font-playfair text-2xl text-white">
                      {tVideo("video1Title")}
                    </h3>
                  </div>

                  <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/90">
                    {tVideo("film")}
                  </span>
                </div>
              </div>
            </article>

            <article className="group relative mx-auto aspect-[9/16] w-full max-w-[190px] overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(17,17,17,0.08)] md:max-w-[320px] md:rounded-[30px]">
              <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/35 to-transparent" />

              <video
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                src={homeAssets.video.two}
                poster={homeAssets.poster.two}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/80">
                      {tVideo("video2")}
                    </p>

                    <h3 className="mt-2 font-playfair text-2xl text-white">
                      {tVideo("video2Title")}
                    </h3>
                  </div>

                  <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/90">
                    {tVideo("film")}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Works Scrollytelling Section */}
      <section
  ref={galleryRef}
  className="relative flex min-h-screen w-full flex-col items-center bg-white px-4 py-24 md:px-8 md:py-32"
>
  <div className="w-full max-w-7xl">
    <h2 className="mb-5 text-4xl font-bold uppercase tracking-tighter text-neutral-900 md:text-7xl">
      {tGallery("title")}{" "}
      <span className="text-neutral-400">
        {tGallery("subtitle")}
      </span>
    </h2>

    <h4 className="mb-16 text-xl font-medium tracking-tighter text-neutral-900 md:mb-20">
      <span className="text-neutral-400">
        {tGallery("subtitle-2")}
      </span>
    </h4>

    <div className="grid grid-cols-2 justify-items-center gap-4 md:gap-16">
      <GalleryCard
        href="/gallery/muse"
        src="/muse/2.jpg"
        alt="Muse"
        title={tHomepage("muse")}
      />

      <GalleryCard
        href="/gallery/prewedding"
        src="/prewedding/8.jpg"
        alt="Prewedding"
        title={tHomepage("prewedding")}
      />

      <GalleryCard
        href="/gallery/aodai"
        src="/aodai/1.jpg"
        alt="Áo dài"
        title={tHomepage("aodai")}
      />

      <GalleryCard
        href="/gallery/xmas"
        src="/xmas/8.jpg"
        alt="Xmas"
        title={tHomepage("xmas")}
      />

      <GalleryCard
        href="/gallery/student"
        src="/student/1.jpg"
        alt="Student"
        title={tHomepage("student")}
      />
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
