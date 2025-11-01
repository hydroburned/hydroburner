
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import Header from './components/Header';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pb-32">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<CaseStudyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;