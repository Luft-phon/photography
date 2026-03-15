"use client";

import { Link, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function GallerySubNav() {
  const pathname = usePathname();
  const t = useTranslations("Homepage");

  const categories = [
    // { id: "all", label: "All" },
    { id: "prewedding", label: t("prewedding") },
    { id: "muse", label: t("muse") },
    { id: "aodai", label: t("aodai") },
    { id: "xmas", label: t("xmas") },
    { id: "couple", label: t("couple") }
  ];

  return (
    <div className="px-4 mb-16 overflow-x-auto pb-4 hide-scrollbar">
      <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-12 min-w-max">
        {categories.map((cat) => {
          const href = cat.id === "all" ? `/gallery` : `/gallery/${cat.id}`;
          const isActive = pathname === href || pathname === `${href}/`;

          return (
            <li key={cat.id} className="relative">
              <Link
                href={href}
                className={`text-sm md:text-base tracking-widest uppercase transition-colors pb-2 ${isActive ? "text-neutral-900 font-medium" : "text-neutral-500 hover:text-neutral-900"
                  }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="subnav-indicator-gallery"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-900"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
