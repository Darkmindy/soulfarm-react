import React from "react";
import Header from "./components/Header";
import HeroWithEvents from "./components/HeroWithEvents"; 
import PlanetariumSection from "./components/PlanetariumSection";
import ProductsCarousel from "./components/ProductsCarousel";
import Newsletter from "./components/Newsletter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroWithEvents />
      <PlanetariumSection />
      <ProductsCarousel />
      <Newsletter />
    </div>
  );
};

export default App;