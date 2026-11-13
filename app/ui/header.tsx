'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineLightMode, MdOutlineDarkMode } from '@/app/ui/icons';
import { useTheme } from 'next-themes';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="sticky top-0 z-10 pt-3">
      <nav
        aria-label="Main"
        className="bg-surface/70 flex items-center gap-2 rounded-full border border-line py-2 pl-5 pr-2 backdrop-blur-md"
      >
        <Link
          href="/"
          className="mr-auto font-display font-bold tracking-tight"
        >
          Ravi
        </Link>
        <div className="flex gap-0.5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 ${
                pathname === link.href
                  ? 'bg-surface-2 text-fg'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-lg hover:bg-surface-2"
        >
          <MdOutlineDarkMode className="hidden dark:block" />
          <MdOutlineLightMode className="dark:hidden" />
        </button>
      </nav>
    </div>
  );
}
