import AdUnit from "@/components/ads/AdUnit";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import React from 'react';

export const metadata = {
  title: "Washable Rugs for Busy Lives",
  description: "Pet-friendly and kid-safe washable rugs that don't sacrifice style.",
};

export default function WashableRugsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Washable Rugs</h1>
      <p className="text-xl text-foreground/80 mb-12 max-w-3xl">
        Designed for "Busy Lives", our washable rugs offer Pet-Friendly and Kid-Safe solutions. Just toss them in the machine and they look as good as new.
      </p>

      <AdUnit type="inline" />

      <h2 className="font-serif text-2xl font-semibold mt-12 mb-8">Top Picks for Washable Rugs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <ProductCard
          title="Ruggable Kamran Washable Rug"
          image="/placeholder"
          priceEstimate="$100 - $300"
          pros={["Machine washable", "Includes non-slip pad", "Spill and stain resistant"]}
          cons={["Thin profile", "Pad can be tricky to align"]}
          amazonLink="#"
        />
        <ProductCard
          title="NuLOOM Machine Washable Vintage Rug"
          image="/placeholder"
          priceEstimate="$80 - $250"
          pros={["One-piece design", "Very affordable", "Soft underfoot"]}
          cons={["May curl at edges after washing", "No built-in pad"]}
          amazonLink="#"
        />
      </div>

      <div className="bg-sand/10 p-8 rounded-xl border border-sand/30">
        <h2 className="font-serif text-2xl font-semibold mb-4">Featured Guides</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li>
            <Link href="/washable-rugs/pet-friendly-picks" className="text-mocha hover:underline font-medium">
              The Ultimate Pet-Friendly Picks: Washable Rugs Review
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
