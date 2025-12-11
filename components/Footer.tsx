import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block p-1 h-12 w-12 rounded bg-gray-50" aria-hidden ><img src="/images/logo.png" /></span>
            <span className="font-semibold">Youth Friendly RC, UNN</span>
          </div>
          <p className="mt-3 text-sm text-gray-300">
            Supporting students with health, career, and life skills resources.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/#about" className="hover:text-emerald-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-emerald-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#events" className="hover:text-emerald-300">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-emerald-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-emerald-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>University of Nigeria, Nsukka</li>
            <li>Email: youthfriendly@unn.edu.ng</li>
            <li>Phone: +234 803 868 4409</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-400 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-foreground/60 flex items-center justify-between text-gray-300">
          <span>© {new Date().getFullYear()} Youth Friendly RC, UNN. All rights reserved.</span>
          <div className="flex items-center gap-4">
            Powered by <Link href="https://www.gigoplanet.com" className="hover:text-emerald-600" target="_blank">Gigoplanet Services Ltd.</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


