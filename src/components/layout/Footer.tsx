import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-tight text-white font-semibold mb-4 inline-block">
              Modern Looms
            </Link>
            <p className="text-sm border-l-2 border-mocha pl-4 my-4 max-w-sm">
              Your trusted guide in the North American rug market. Discover the perfect styles for an authentic, warm, and inviting home.
            </p>
            <p className="text-xs text-background/60 max-w-md mt-6">
              Affiliate Disclosure: As an Amazon Associate and affiliate for other brands, we earn from qualifying purchases. This helps support our research and expert content.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-sage mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vintage-rugs" className="hover:text-white transition-colors">Vintage Rugs</Link></li>
              <li><Link href="/wool-rugs" className="hover:text-white transition-colors">Wool Rugs</Link></li>
              <li><Link href="/washable-rugs" className="hover:text-white transition-colors">Washable Rugs</Link></li>
              <li><Link href="/jute-natural-rugs" className="hover:text-white transition-colors">Jute & Natural Rugs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-sage mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span className="text-background/30">•</span>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <span className="text-background/30">•</span>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 text-sm text-center text-background/50">
          &copy; {new Date().getFullYear()} Modern Looms. All rights reserved. North America.
        </div>
      </div>
    </footer>
  );
}
