import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// Components
import ClientLayout from '@/components/ClientLayout';

// Styles
import '@/styles/globals.css';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VoxMex',
  description: 'VoxMex page for your safety trip',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.webp" type="image/webp" />
        {/* Osano Consent Manager */}
        <Script
          id="osano"
          strategy="afterInteractive"
          src="https://cmp.osano.com/169y7FUapm6rcxAO/51699aad-f4c8-4268-993a-42cdce6baa23/osano.js"
        />

        {/* Google Analytics - Se carga solo tras consentimiento */}
        <Script id="osano-analytics" strategy="afterInteractive">
          {`
            window.addEventListener('osano:ready', () => {
              if (window.osano) {
                osano.addEventListener('consent:on', () => {
                  if (osano.consent.analytics) {
                    const script = document.createElement('script');
                    script.src='https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}';
                    script.async = true;
                    document.head.appendChild(script);

                    script.onload = () => {
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    };
                  }
                });
              }
            });

            // Fallback: Si Osano no responde en 3s, cargar GA de todas formas
            setTimeout(() => {
              if (!window.osano || typeof osano.consent === 'undefined') {
                console.warn('Osano no disponible. Cargando Google Analytics directamente.');
                const script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}';
                script.async = true;
                document.head.appendChild(script);

                script.onload = () => {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                };
              }
            }, 3000);
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          id="adsense"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3822217487643957"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
