import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  products,
  resolveLooksGreatWith,
} from "@/lib/products";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";
import { RelatedProducts } from "@/components/product/RelatedProducts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | Maison Retro" };
  return {
    title: `${product.name} | Maison Retro`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images[0] ? [product.images[0]] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const looksGreat = resolveLooksGreatWith(product);
  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.category === product.category &&
        p.inStock,
    )
    .slice(0, 3);
  const relatedFallback = products
    .filter((p) => p.slug !== product.slug && p.inStock)
    .slice(0, 3);
  const showRelated = related.length > 0 ? related : relatedFallback;

  return (
    <article className="pb-24">
      <ProductDetailClient product={product} looksGreat={looksGreat} />
      <RelatedProducts title="You may also love" products={showRelated} />
    </article>
  );
}
