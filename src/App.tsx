import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Masthead from './components/Masthead';
import Footer from './components/Footer';
import Home from './pages/Home';
import After10th from './pages/After10th';
import Exams from './pages/Exams';
import Topics from './pages/Topics';
import DegreeNext from './pages/DegreeNext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ background: '#f5f0e8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Masthead />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/after-10th" element={<After10th />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/degree-next" element={<DegreeNext />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div
      style={{ background: '#f5f0e8', minHeight: '60vh' }}
      className="flex flex-col items-center justify-center text-center px-6 py-20"
    >
      <div className="text-6xl mb-6">🗺️</div>
      <h1
        style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
        className="text-4xl font-bold mb-4"
      >
        Page Not Found
      </h1>
      <p
        style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }}
        className="text-lg mb-8"
      >
        This path doesn't exist yet. Let's guide you back.
      </p>
      <a
        href="/"
        style={{
          fontFamily: '"IBM Plex Mono", monospace',
          background: 'linear-gradient(135deg, #c0392b, #962d22)',
        }}
        className="text-white px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-medium"
      >
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
