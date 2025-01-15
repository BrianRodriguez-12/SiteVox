import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
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