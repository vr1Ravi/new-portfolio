import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/ui/header';
import ThemeProvider from './themeprovider';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'WhoamI',
  description: "This is Ravishankar's portfolio",
  keywords:
    'frontend development, reactjs, mern stack, ravishankar, javsScript, fullStack development, freelancer, internship',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} mx-auto  mt-4 max-w-2xl antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
