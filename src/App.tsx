import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Components
import Footer from './components/CustomFooter';
import Header from './components/Header';

// Pages
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
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
