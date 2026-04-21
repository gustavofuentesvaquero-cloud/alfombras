import AdUnit from "@/components/ads/AdUnit";
import ExpertBadge from "@/components/article/ExpertBadge";
import AuthorBio from "@/components/article/AuthorBio";
import FactChecked from "@/components/article/FactChecked";

export default function AuthenticPersianGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <ExpertBadge />
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
        The Persian Authenticity Guide: How to Spot a Fake
      </h1>
      
      <FactChecked />
      
      <div className="prose prose-lg prose-headings:font-serif max-w-none text-foreground/80">
        <p>
          Investing in a true vintage Persian rug is a rite of passage for many interior design enthusiasts. However, the market is flooded with machine-made replicas masquerading as authentic hand-knotted pieces. Here is our step-by-step guide to ensuring your investment is genuine.
        </p>

        <AdUnit type="inline" />

        <h2>Step 1: Check the Back of the Rug</h2>
        <p>
          The most telltale sign of an authentic hand-knotted Persian rug is found on its underside. Machine-made rugs typically feature a perfectly uniform backing or a canvas/latex covering. A true hand-knotted rug will display the distinct, slightly irregular knots that form the pattern on the front.
        </p>

        <div className="bg-sage/10 border-l-4 border-sage p-6 my-8 rounded-r-lg">
          <h4 className="flex items-center text-sage font-bold font-sans mt-0 mb-2">
            Expert Tip
          </h4>
          <p className="m-0 text-sm">
            Look for slight imperfections. Human hands create hand-knotted rugs, meaning the knots will never be mathematically perfect. If the back looks like a flawlessly printed grid, it's machine-made.
          </p>
        </div>

        <h2>Step 2: Inspect the Fringe</h2>
        <p>
          On a genuine Persian rug, the fringe is not sewn or glued onto the end of the rug. It is actually the foundation warp threads that run through the entire length of the rug. If you see signs of stitching attaching the fringe to the border, it's a reproduction.
        </p>

        <AdUnit type="inline" />

        <h2>Step 3: Test the Materials</h2>
        <p>
          Authentic Persian rugs are made from natural materials—primarily wool, silk, and cotton. They are never made from synthetic materials like polypropylene or nylon. A quick (and very careful) burn test on a loose fiber can tell you the material: wool smells like burning hair, while synthetics melt and smell like plastic.
        </p>

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
