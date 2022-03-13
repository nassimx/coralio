import Hero from '../components/Layout/Body/HeroSection';
import ServicesSection from '../components/Layout/Body/ServicesSection';
import { ClientsSection } from '../components/Layout/Body/ClientsSection';
import Footer from '../components/Layout/Footer';
// import { homeObjOne } from '../data//FirstSectionData';
// import { heroOne, heroThree, heroTwo } from '../data/ThirdSectionData';
import { motion } from 'framer-motion';
import PartenairesSection from '../components/Layout/Body/PartenairesSection';

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: -100 }}
        transition={{ duration: 1 }}
        key={Math.random()}
      >
        <Hero />
        <ServicesSection />
        <ClientsSection />
        {/* <ThirdSection />
        <ThirdSection /> */}
        <PartenairesSection />

        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
