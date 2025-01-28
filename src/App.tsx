import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Components
import Footer from './components/CustomFooter';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AdSense from './components/AdSense';

// Styles
import './App.css';

// Pages
import {
  AboutUs,
  CookiesPage,
  ContactForm,
  FAQ,
  Home,
  OurServices,
  TravelTips,
  Visas,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout">
        <aside className="sidebar left">
          <AdSense />
        </aside>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/*" element={<OurServices />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/policy" element={<CookiesPage />} />
            <Route path="/visas" element={<Visas />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <aside className="sidebar right">
          <AdSense />
        </aside>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
