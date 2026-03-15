"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

export default function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations("Contact");
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={container} className="min-h-screen bg-white flex flex-col items-center justify-center p-8 pt-32 text-center md:text-left text-neutral-900">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 reveal text-neutral-900">
            {/* {t('title')}<br /> <span className="text-neutral-400">{t('subtitle')}</span> */}
            <img src="/logo/logo.png" alt="Logo" width={320} height={120} className="mx-auto" />
          </h3>
          <p className="text-neutral-600 text-xl font-light leading-relaxed reveal">
            {t('description1')}<br />
            {t('description2')}
          </p>
        </div>

        <form className="flex flex-col gap-8 w-full md:mt-16">
          <div className="reveal relative w-full group">
            <input
              type="text"
              placeholder={t('namePlaceholder')}
              className="w-full bg-transparent border-b border-neutral-300 pb-4 text-xl outline-none focus:border-neutral-900 transition-colors uppercase tracking-widest placeholder-neutral-400 text-neutral-900"
            />
          </div>
          <div className="reveal relative w-full group">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full bg-transparent border-b border-neutral-300 pb-4 text-xl outline-none focus:border-neutral-900 transition-colors uppercase tracking-widest placeholder-neutral-400 text-neutral-900"
            />
          </div>
          <div className="reveal relative w-full group">
            <textarea
              placeholder={t('messagePlaceholder')}
              rows={4}
              className="w-full bg-transparent border-b border-neutral-300 pb-4 text-xl outline-none focus:border-neutral-900 transition-colors uppercase tracking-widest placeholder-neutral-400 text-neutral-900 resize-none"
            ></textarea>
          </div>
          <button
            type="button"
            className="reveal self-start px-12 py-4 bg-neutral-900 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
          >
            {t('sendMessage')}
          </button>
        </form>
      </div>
    </main>
  );
}
