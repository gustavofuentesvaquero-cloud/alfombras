import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  pros: string[];
  cons: string[];
  amazonLink: string;
  priceEstimate?: string;
}

export default function ProductCard({ title, image, pros, cons, amazonLink, priceEstimate }: ProductCardProps) {
  return (
    <div className="border border-sand/30 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] bg-sand/10 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{title}</h3>
        {priceEstimate && <p className="text-mocha font-medium mb-4">{priceEstimate}</p>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-sage flex items-center mb-2">
              <span className="mr-2">✓</span> Pros
            </h4>
            <ul className="text-sm text-foreground/80 space-y-1">
              {pros.map((pro, i) => <li key={i}>• {pro}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-mocha flex items-center mb-2">
              <span className="mr-2">✗</span> Cons
            </h4>
            <ul className="text-sm text-foreground/80 space-y-1">
              {cons.map((con, i) => <li key={i}>• {con}</li>)}
            </ul>
          </div>
        </div>

        <a
          href={amazonLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center justify-center w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-medium py-3 px-4 rounded transition-colors"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}
