import AdUnit from "@/components/ads/AdUnit";
import ExpertBadge from "@/components/article/ExpertBadge";
import AuthorBio from "@/components/article/AuthorBio";
import FactChecked from "@/components/article/FactChecked";
import ProductCard from "@/components/ui/ProductCard";

export default function PetFriendlyPicks() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ExpertBadge />
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
        The Ultimate Pet-Friendly Picks: Washable Rugs Review
      </h1>
      
      <FactChecked />
      
      <div className="prose prose-lg prose-headings:font-serif max-w-none text-foreground/80 mb-10">
        <p>
          We love our pets, but we don't love the messes they leave on our floors. If you've ever tried to scrub a stain out of an expensive wool rug, you know the struggle. Enter the modern washable rug. Here is our list of the best washable rugs that stand up to paws, claws, and accidents.
        </p>

        <AdUnit type="inline" />
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">1. Top Choice: Ruggable Kamran Washable Rug</h2>
          <ProductCard
            title="Ruggable Kamran Washable Rug"
            image="/placeholder"
            priceEstimate="$100 - $300"
            pros={["Machine washable and dryer safe", "Spill and stain resistant", "Two-piece system"]}
            cons={["Low pile height", "Aligning pad can be difficult for large sizes"]}
            amazonLink="#"
          />
        </section>
      </div>

      <div className="mt-12 mb-8">
         <AdUnit type="inline" />
      </div>

      <AuthorBio 
        name="Elena Rodriguez"
        role="Family & Home Editor"
        bio="Elena is a mother of two and owner of a very messy golden retriever. She specializes in finding products that make family life cleaner and easier."
      />

      <div className="sm:hidden mt-8">
        <AdUnit type="sticky-bottom" />
      </div>
    </div>
  );
}
