import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Components
import Footer from './components/CustomFooter';
import Header from './components/Header';

// Pages
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services/*" element={<OurServices />} />
          {/* 
          <Route path="/contact" element={<Contact />} /> 
        <Route path="/visas" element={<Visas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const styles = {
  main: {
    padding: '20px',
  },
};
