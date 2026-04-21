import AdUnit from "@/components/ads/AdUnit";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import React from 'react';

export const metadata = {
  title: "Jute & Natural Rugs",
  description: "Eco-friendly, boho-chic vibes with our natural jute and sisal rugs.",
};

export default function JuteNaturalRugsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Jute & Natural Rugs</h1>
      <p className="text-xl text-foreground/80 mb-12 max-w-3xl">
        Bring nature indoors. Our Jute and Natural rugs offer Eco-Friendly, Boho-Chic aesthetics with highly durable, sustainable textures.
      </p>

      <AdUnit type="inline" />

      <h2 className="font-serif text-2xl font-semibold mt-12 mb-8">Top Picks for Natural Rugs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <ProductCard
          title="Safavieh Natural Fiber Collection Jute Rug"
          image="/placeholder"
          priceEstimate="$50 - $200"
          pros={["100% natural jute", "Adds organic texture", "Reversible"]}
          cons={["Can feel scratchy bare-foot", "Sheds natural fibers initially"]}
          amazonLink="#"
        />
        <ProductCard
          title="NuLOOM Handwoven Chunky Natural Jute"
          image="/placeholder"
          priceEstimate="$70 - $250"
          pros={["Thick, chunky weave", "Bohemian aesthetic", "Durable for living rooms"]}
          cons={["Not suitable for wet areas", "Spot clean only"]}
          amazonLink="#"
        />
      </div>

      <div className="bg-sand/10 p-8 rounded-xl border border-sand/30">
        <h2 className="font-serif text-2xl font-semibold mb-4">Featured Guides</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li>
            <Link href="/jute-natural-rugs/cleaning-jute-rugs" className="text-mocha hover:underline font-medium">
              How to Clean and Maintain Your Jute Rug
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
