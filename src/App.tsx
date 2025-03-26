import React from "react";
import Header from "./components/Header";
import HeroWithEvents from "./components/HeroWithEvents"; 
import PlanetariumSection from "./components/PlanetariumSection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroWithEvents />
      <PlanetariumSection />
    </div>
  );
};

export default App;