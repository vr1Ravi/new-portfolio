'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineLightMode, MdOutlineDarkMode } from '@/app/ui/icons';
import { useTheme } from 'next-themes';

// Nav Links
const links = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'blog',
    href: '/blog',
  },
];
export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  const handleTheme = () => {
    resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <header className="flex w-full p-2">
      <nav className="mr-auto flex gap-4">
        {links.map((link) => (
          <Link
            className={`${pathname === link.href ? 'text-black dark:text-white' : 'text-gray-500'}`}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button
        className={`peer h-6 w-11 rounded-full bg-gray-200 px-[2px] dark:bg-gray-800`}
        role="switch"
        aria-checked={resolvedTheme === 'dark'}
        onClick={handleTheme}
      >
        <div
          className={`peer h-4 w-[60%]  transition-all  peer-focus:outline-none dark:translate-x-full`}
        >
          {resolvedTheme === 'dark' ? (
            <MdOutlineDarkMode className="rounded-full bg-black" />
          ) : (
            <MdOutlineLightMode className="rounded-full bg-white" />
          )}
        </div>
      </button>
    </header>
  );
}
