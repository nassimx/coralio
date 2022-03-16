import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { AnimatePresence } from 'framer-motion';
import Header from './pages/Header';
import Header2 from './pages/Header2';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Layout/Footer';
import Clients from './pages/Clients';
import { useEffect } from 'react';
import { ServiceDetails } from './components/Layout/Body/ServicesSection/ServiceDetails';
import PageNotFound from './pages/PageNotFound';
import Recrutement from './pages/Recrutement';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence
        exitBeforeEnter={true}
        initial={true}
        key={Math.random()}
      >
        <ScrollToTop />
        <Routes>
          {/* <Route element={<Footer />}></Route> */}
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Header2 />}>
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/recrutement" element={<Recrutement />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
