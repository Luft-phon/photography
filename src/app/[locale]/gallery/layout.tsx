import GallerySubNav from "@/components/GallerySubNav";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-12 relative z-10 bg-white">
      <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 px-4 text-neutral-900">
        The <span className="text-neutral-400">Gallery</span>
      </h1>
      <GallerySubNav />
      {children}
    </main>
  );
}
