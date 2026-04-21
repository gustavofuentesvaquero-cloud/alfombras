import Hero from "@/components/home/Hero";
import RugFinder from "@/components/home/RugFinder";
import Trending from "@/components/home/Trending";
import AdUnit from "@/components/ads/AdUnit";
import FactChecked from "@/components/article/FactChecked";

export default function Home() {
  return (
    <>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdUnit type="inline" />
      </div>
      
      <RugFinder />
      <Trending />
      
      {/* Intro Content for SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:font-serif max-w-none text-foreground/80">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">Your Guide to North American Rugs</h2>
            <FactChecked />
            <p className="mb-4 text-lg">
              Choosing the right rug can transform your living space from cold to cozy, tying together your furniture and decor into a cohesive "Coastal Farmhouse" or "Modern Minimalist" look. Our mission at Modern Looms is to help you navigate the complexity of the North American rug market.
            </p>
            <AdUnit type="inline" />
            <p className="mt-4 text-lg">
              Whether you are looking for the durability of a 100% Wool Rug, the historic charm of a Vintage piece, or the practical nature of Washable rugs for a busy family with pets, Modern Looms has you covered with expert advice.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sticky Mobile Ad */}
      <div className="sm:hidden">
        <AdUnit type="sticky-bottom" />
      </div>
    </>
  );
}
