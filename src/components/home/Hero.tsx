import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-sand/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-7xl">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-serif font-bold text-foreground sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Find the perfect rug</span>{' '}
                <span className="block text-mocha">for your authentic home</span>
              </h1>
              <p className="mt-3 text-base text-foreground/80 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover curated selections, expert reviews, and comprehensive guides for the North American rug market. From vintage Persians to modern washable rugs.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#rug-finder" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mocha hover:bg-mocha/90 md:py-4 md:text-lg md:px-10 transition-colors">
                    Find My Rug
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 border border-transparent shadow rounded-md">
                  <Link href="/vintage-rugs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mocha bg-sand/50 hover:bg-sand/70 md:py-4 md:text-lg md:px-10 transition-colors">
                    Explore Vintage
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-sage/20 hidden lg:flex items-center justify-center border-l border-sand/30">
        <div className="text-sage/70 font-serif font-bold text-xl text-center px-6">
          [Beautiful Rug Interior Image]
        </div>
      </div>
    </div>
  );
}
