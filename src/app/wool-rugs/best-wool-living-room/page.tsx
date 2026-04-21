import AdUnit from "@/components/ads/AdUnit";
import ExpertBadge from "@/components/article/ExpertBadge";
import AuthorBio from "@/components/article/AuthorBio";
import FactChecked from "@/components/article/FactChecked";
import ProductCard from "@/components/ui/ProductCard";

export default function BestWoolLivingRoom() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ExpertBadge />
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
        5 Best Wool Rugs for the Living Room in 2026
      </h1>
      
      <FactChecked />
      
      <div className="prose prose-lg prose-headings:font-serif max-w-none text-foreground/80 mb-10">
        <p>
          The living room is the heart of the home, requiring a rug that can withstand high traffic while maintaining a luxurious feel. Wool is naturally insulating, flame-resistant, and incredibly durable. Here are our top picks for wool rugs that combine aesthetic appeal with everyday practicality.
        </p>

        <AdUnit type="inline" />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">1. Best Overall: Safavieh Heritage Hand-Tufted</h2>
          <ProductCard
            title="Safavieh Heritage Collection Hand-Tufted Wool"
            image="/placeholder"
            priceEstimate="$200 - $600"
            pros={["Thick, plush pile (0.5 inch)", "Hand-tufted artisanal quality", "Vibrant, traditional colors"]}
            cons={["Will shed for the first few months", "Heavy to move"]}
            amazonLink="#"
          />
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">2. Best Budget: NuLOOM Hand Tufted Wool</h2>
          <ProductCard
            title="NuLOOM Hand Tufted Wool Rug"
            image="/placeholder"
            priceEstimate="$150 - $400"
            pros={["100% Wool construction", "Great value for the size", "Excellent natural insulation"]}
            cons={["Requires vacuuming without a beater bar", "Slight color variations exist"]}
            amazonLink="#"
          />
        </section>
      </div>

      <div className="mt-12 mb-8">
         <AdUnit type="inline" />
      </div>

      <AuthorBio 
        name="Marcus Chen"
        role="Home Decor Specialist"
        bio="Marcus is an interior designer focused on sustainable living. He loves finding high-quality, natural products that are accessible to everyday consumers."
      />

      <div className="sm:hidden mt-8">
        <AdUnit type="sticky-bottom" />
      </div>
    </div>
  );
}
