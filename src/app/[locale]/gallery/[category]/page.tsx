import GalleryGrid from "@/components/GalleryGrid";

export function generateStaticParams() {
  const categories = ["muse", "prewedding", "aodai", "xmas"];
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  return <GalleryGrid categoryFilter={resolvedParams.category} />;
}
