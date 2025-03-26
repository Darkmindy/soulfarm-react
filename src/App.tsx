import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EventsGrid from "./components/EventsGrid";
import PlanetariumSection from "./components/PlanetariumSection";
import ProductsCarousel from "./components/ProductsCarousel";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <EventsGrid />
      <PlanetariumSection />
      <ProductsCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
