import AdUnit from "@/components/ads/AdUnit";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import React from 'react';

export const metadata = {
  title: "Vintage & Persian Rugs",
  description: "Explore the historic charm of authentic vintage and Persian rugs.",
};

export default function VintageRugsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Vintage & Persian Rugs</h1>
      <p className="text-xl text-foreground/80 mb-12 max-w-3xl">
        Embrace "Quiet Luxury" with our curated selection of vintage and historically rich Persian rugs. Perfect for adding character and warmth to any space.
      </p>

      <AdUnit type="inline" />

      <h2 className="font-serif text-2xl font-semibold mt-12 mb-8">Top Picks for Vintage Rugs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <ProductCard
          title="Loloi II Layla Collection"
          image="/placeholder"
          priceEstimate="$150 - $300"
          pros={["Aged, vintage appearance", "Printed, won't shed", "Affordable alternative"]}
          cons={["Not a true hand-knotted rug", "Thin pile (needs a pad)"]}
          amazonLink="#"
        />
        <ProductCard
          title="Safavieh Adirondack Collection"
          image="/placeholder"
          priceEstimate="$80 - $200"
          pros={["Distressed look", "Stain-resistant", "Great for high traffic"]}
          cons={["Machine-made feel", "Lighter colors can show dirt"]}
          amazonLink="#"
        />
      </div>

      <div className="bg-sand/10 p-8 rounded-xl border border-sand/30">
        <h2 className="font-serif text-2xl font-semibold mb-4">Featured Guides</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li>
            <Link href="/vintage-rugs/persian-authenticity-guide" className="text-mocha hover:underline font-medium">
              The Persian Authenticity Guide: How to Spot a Fake
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden mt-8">
        <AdUnit type="sticky-bottom" />
      </div>
    </div>
  );
}
