import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from './_components/Header';
import { ThemeProvider } from '@/providers/theme-provider';
import { ScrollToTopButton } from '@/components';
import Footer from './_components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Font files can be colocate inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'KhanhTQ',
  description: 'Personal curriculum vitae of Tran Quang Khanh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${inter.variable} ${fontHeading.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex min-h-svh flex-col'>
            <div className='fixed inset-0 overflow-hidden bg-[url(/noise.png)] opacity-40 dark:opacity-60'></div>
            <Header />
            <main className='container flex-1 py-6 md:py-10'>{children}</main>
            <ScrollToTopButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
