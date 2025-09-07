'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLink = (href, label) => (
    <Link
      href={href}
      className={`px-4 py-2 rounded-xl transition ${
        pathname === href ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Al2 Showcase</Link>
        <nav className="flex items-center gap-2">
          {navLink('/', 'Home')}
          {navLink('/teams', 'Teams')}
        </nav>
      </div>
    </header>
  );
}
