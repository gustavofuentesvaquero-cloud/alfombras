import Link from 'next/link';

const trendingCategories = [
  { name: 'Vintage Persian', desc: 'Timeless elegance and quiet luxury.', href: '/vintage-rugs', tag: 'Top Choice' },
  { name: 'Washable Runners', desc: 'Perfect for busy kitchens and entries.', href: '/washable-rugs', tag: 'Trending' },
  { name: 'Chunky Jute', desc: 'Eco-friendly texture for boho spaces.', href: '/jute-natural-rugs', tag: 'Eco-Friendly' },
];

export default function Trending() {
  return (
    <section className="py-16 bg-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Trending in 2026</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingCategories.map((cat, i) => (
            <Link href={cat.href} key={i} className="group block">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-sand/20 flex flex-col h-full">
                <div className="aspect-[4/3] bg-sage/10 relative flex items-center justify-center p-6 border-b border-sand/10">
                  <span className="absolute top-4 left-4 bg-white text-xs font-bold px-2 py-1 rounded text-mocha shadow-sm">
                    {cat.tag}
                  </span>
                  <div className="text-sage/50 font-serif text-lg">{cat.name} Image</div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-mocha transition-colors">{cat.name}</h3>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
