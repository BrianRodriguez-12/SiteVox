import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Components
import Footer from './components/CustomFooter';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Pages
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import ContactForm from './pages/ContactForm';
// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services/*" element={<OurServices />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* 
        <Route path="/visas" element={<Visas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
