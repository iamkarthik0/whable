import type { Metadata, Viewport } from "next";
import { Gabarito, Bitter } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://whable.com'), // Replace with your actual domain
  title: {
    default: 'Whable - Rendere il Mondo Più Accessibile',
    template: '%s | Whable'
  },
  description: 'Whable è una piattaforma che connette persone con disabilità, creando una community per un mondo più accessibile e inclusivo.',
  keywords: [
    'accessibilità',
    'disabilità',
    'community',
    'inclusione sociale',
    'supporto disabili',
    'accessibilità urbana',
    'whable',
    'italia'
  ],
  authors: [
    {
      name: 'Whable Team',
      url: 'https://whable.com/about',
    },
  ],
  creator: 'Whable',
  publisher: 'Whable',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://whable.com',
    siteName: 'Whable',
    title: 'Whable - Rendere il Mondo Più Accessibile',
    description: 'Whable è una piattaforma che connette persone con disabilità, creando una community per un mondo più accessibile e inclusivo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Whable - Community per l\'accessibilità',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whable - Rendere il Mondo Più Accessibile',
    description: 'Whable è una piattaforma che connette persone con disabilità, creando una community per un mondo più accessibile e inclusivo.',
    images: ['/twitter-image.jpg'],
    creator: '@whable',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${gabarito.variable} ${bitter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}