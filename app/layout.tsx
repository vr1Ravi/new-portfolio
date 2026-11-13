import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/app/ui/header';
import ThemeProvider from './themeprovider';
import SocialLink from './ui/Home/social-links';
import { socialLinks } from './lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Ravi Jha — Full-Stack Developer',
  description:
    'Portfolio of Ravishankar Jha, a full-stack developer building fast, polished web apps with the MERN stack.',
  keywords:
    'frontend development, reactjs, mern stack, ravishankar, javascript, fullstack development, freelancer, internship',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${display.variable} min-h-screen px-4 font-body text-base leading-relaxed antialiased`}
      >
        <ThemeProvider>
          <div className="mx-auto flex min-h-screen max-w-4xl flex-col">
            <Header />
            {children}
            <footer className="mt-auto flex flex-col items-center gap-4 py-10 text-sm text-muted">
              <div className="flex gap-3">
                {socialLinks.map((l) => (
                  <SocialLink key={l.label} {...l} />
                ))}
              </div>
              <p>
                © {new Date().getFullYear()} Ravi Jha. All rights reserved.
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
