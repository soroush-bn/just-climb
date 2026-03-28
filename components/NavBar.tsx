import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* App Title / Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-extrabold text-xl tracking-wider">
              JUST<span className="text-blue-500">CLIMB</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
<Link href="/#solutions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
  Solutions
</Link>
              <Link href="/profile" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
                Profile
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
                About
              </Link>

              <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition shadow-lg hover:shadow-blue-500/30">
                Sign In
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}