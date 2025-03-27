import React from "react";
import Header from "./components/Header";
import HeroWithEvents from "./components/HeroWithEvents"; 
import PlanetariumSection from "./components/PlanetariumSection";
import ProductsCarousel from "./components/ProductsCarousel";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroWithEvents />
      <PlanetariumSection />
      <ProductsCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;