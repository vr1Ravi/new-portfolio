'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineLightMode, MdOutlineDarkMode } from '@/app/ui/icons';
import { useState } from 'react';

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
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <header className="flex w-full p-2">
      <nav className="mr-auto flex gap-4">
        {links.map((link) => (
          <Link
            className={`${pathname === link.href && 'text-gray-500'}`}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button
        className={`peer h-6 w-11 rounded-full bg-gray-200 ${isChecked && 'bg-gray-800'} px-[2px]`}
        role="switch"
        aria-checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      >
        <div
          className={`peer h-4 w-[60%] transition-all  peer-focus:outline-none ${isChecked && 'translate-x-full'}  dark:border-gray-600 dark:bg-gray-700`}
        >
          {isChecked ? (
            <MdOutlineDarkMode className="rounded-full  bg-black text-white" />
          ) : (
            <MdOutlineLightMode className="rounded-full bg-white" />
          )}
        </div>
      </button>
    </header>
  );
}
