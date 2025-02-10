import React from 'react';

// Components
import Footer from '../CustomFooter';
import AdSense from '../AdSense';
import Header from '../Header';

// Styles
import './styles.module.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="layout">
        <aside className="sidebar left">
          <AdSense />
        </aside>
        {children}
        <aside className="sidebar right">
          <AdSense />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
