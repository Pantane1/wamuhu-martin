
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Socials from './pages/Socials';
import Contact from './pages/Contact';
import Support from './pages/Support';

const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (hash) {
      case '#projects':
        return <Projects />;
      case '#socials':
        return <Socials />;
      case '#contact':
        return <Contact />;
      case '#support':
        return <Support />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Layout>
        {renderPage()}
      </Layout>
      <Analytics />
    </>
  );
};

export default App;
