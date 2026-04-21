import AdUnit from "@/components/ads/AdUnit";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import React from 'react';

export const metadata = {
  title: "Wool Rugs: Durable & Insulating",
  description: "Discover why wool rugs are a long-term investment for your home.",
};

export default function WoolRugsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">100% Wool Rugs</h1>
      <p className="text-xl text-foreground/80 mb-12 max-w-3xl">
        A true investment. Wool rugs offer unmatched durability, natural insulation, and long-term beauty for high-traffic areas.
      </p>

      <AdUnit type="inline" />

      <h2 className="font-serif text-2xl font-semibold mt-12 mb-8">Top Picks for Wool Rugs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <ProductCard
          title="Safavieh Heritage Collection Hand-Tufted Wool"
          image="/placeholder"
          priceEstimate="$200 - $600"
          pros={["Thick, plush pile", "Hand-tufted quality", "Vibrant colors"]}
          cons={["Sheds initially", "Heavy to move"]}
          amazonLink="#"
        />
        <ProductCard
          title="NuLOOM Hand Tufted Wool Rug"
          image="/placeholder"
          priceEstimate="$150 - $400"
          pros={["100% Wool construction", "Great value", "Natural insulation"]}
          cons={["Requires vacuuming without beater bar", "Color variations occur"]}
          amazonLink="#"
        />
      </div>

      <div className="bg-sand/10 p-8 rounded-xl border border-sand/30">
        <h2 className="font-serif text-2xl font-semibold mb-4">Featured Guides</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li>
            <Link href="/wool-rugs/best-wool-living-room" className="text-mocha hover:underline font-medium">
              5 Best Wool Rugs for the Living Room in 2026
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
