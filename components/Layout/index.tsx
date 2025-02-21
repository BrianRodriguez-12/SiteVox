'use client';
// Components
import Footer from '../Footer';
import AdSense from '../AdSense';
import Header from '../Header';
import I18nProvider from '../I18nProvider';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen gap-1">
      <I18nProvider>
        <Header />
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-1">
          <aside className="p-8 text-center">
            <AdSense />
          </aside>
          <main className="p-8 md:col-span-1 flex justify-center">
            {children}
          </main>
          <aside className="p-8 text-center">
            <AdSense />
          </aside>
        </div>
        <Footer />
      </I18nProvider>
    </div>
  );
}
