import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SidebarProvider } from '@/components/SidebarContext';
import { ThemeProvider } from '@/components/ThemeContext';
import Sidebar from '@/components/Sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cognitio-mauve.vercel.app'),

  title: {
    default: 'Cognitio',
    template: '%s | Cognitio',
  },
  description:
    'Website de bibliografia e anotações para Ciência da Computação e outros saberes.',
  authors: [{ name: 'Brenno Gomes Breda' }],
  keywords: ['programação', 'ciência da computação', 'idiomas'],

  openGraph: {
    title: 'Cognitio',
    description: 'Website de bibliografia para Computação e outros saberes.',
    url: 'https://cognitio-mauve.vercel.app',
    siteName: 'Cognitio',
    images: [
      {
        url: '/cognitio.png',
        width: 1200,
        height: 630,
        alt: 'Cognitio Cover',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <ThemeProvider>
          <SidebarProvider>
            <div className="flex flex-col min-h-screen lg:bg-black/5 dark:lg:bg-black/40 transition-colors">
              <Header />
              <Sidebar />
              <main className="grow w-full lg:w-[60%] mx-auto bg-background lg:shadow-2xl lg:border-x border-black/10 dark:border-white/5 transition-all">
                <div className="h-full w-full px-6 py-8 lg:px-12 lg:py-10">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
