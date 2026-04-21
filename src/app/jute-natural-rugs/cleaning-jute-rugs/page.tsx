import AdUnit from "@/components/ads/AdUnit";
import ExpertBadge from "@/components/article/ExpertBadge";
import AuthorBio from "@/components/article/AuthorBio";
import FactChecked from "@/components/article/FactChecked";

export default function CleaningJuteGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ExpertBadge />
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
        How to Clean and Maintain Your Jute Rug
      </h1>
      
      <FactChecked />
      
      <div className="prose prose-lg prose-headings:font-serif max-w-none text-foreground/80">
        <p>
          Jute rugs bring a beautiful, earthy texture to any room. But their natural fibers require specific care to keep them looking their best. Here is the definitive guide on maintaining your jute rug without ruining its structural integrity.
        </p>

        <AdUnit type="inline" />

        <h2>Routine Vacuuming is Key</h2>
        <p>
          The most important step in jute rug care is regular vacuuming. Dirt works its way down into the natural fibers, wearing them out prematurely from friction. Vacuum at least once a week from multiple directions.
        </p>

        <div className="bg-sage/10 border-l-4 border-sage p-6 my-8 rounded-r-lg">
          <h4 className="flex items-center text-sage font-bold font-sans mt-0 mb-2">
            Expert Tip
          </h4>
          <p className="m-0 text-sm">
            Never use the beater bar on your vacuum when cleaning a jute rug. The aggressive brush roll will pull and break the natural plant fibers. Switch off the beater bar or use an upholstery attachment.
          </p>
        </div>

        <h2>Dealing with Spills</h2>
        <p>
          Water is the enemy of jute. If you spill liquid, never rub it in and never use water to clean it, as water will darken the fibers permanently. Instead, aggressively blot the area with clean, white paper towels until dry.
        </p>

        <AdUnit type="inline" />

      </div>

      <AuthorBio 
        name="Sarah Jenkins"
        role="Senior Rug Appraiser & Design Editor"
        bio="Sarah has spent over 15 years sourcing textiles and authentic Persian rugs from around the globe. She holds a certification from the Oriental Rug Retailers of America."
      />

      <div className="sm:hidden mt-8">
        <AdUnit type="sticky-bottom" />
      </div>
    </div>
  );
}
