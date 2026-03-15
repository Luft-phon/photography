import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <GalleryGrid categoryFilter="All" />;
}
