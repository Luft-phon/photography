"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations("About");
  const comp = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".about-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={comp} className="min-h-screen bg-white flex items-center justify-center p-8 pt-32 text-neutral-900">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl about-image bg-neutral-100 border border-neutral-200">
          <Image
            src="/logo/tui.jpg"
            alt="About the photographer"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter about-text leading-tight text-neutral-900">
            {t('title')}<br />
            <span className="text-neutral-400">{t('subtitle')}</span>
          </h1>
          <p className="about-text text-xl text-neutral-600 font-light leading-relaxed">
            {t('description1')}
          </p>
          <p className="about-text text-lg text-neutral-500 font-light leading-relaxed">
            {t('description2')}
          </p>
          <div className="about-text mt-8">
            <h3 className="text-neutral-900 text-2xl mb-4 font-medium uppercase tracking-widest text-sm">{t('description')}</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex justify-between border-b border-neutral-200 pb-2">
                <span>{t('description3')}</span>
                <span className="text-neutral-400">Present</span>
              </li>
              <li className="flex justify-between border-b border-neutral-200 pb-2">
                <span>{t('description4')}</span>
                <span className="text-neutral-400">2023</span>
              </li>
              <li className="flex justify-between border-b border-neutral-200 pb-2">
                <span>{t('description5')}</span>
                <span className="text-neutral-400">2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
