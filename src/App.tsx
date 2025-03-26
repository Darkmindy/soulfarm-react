import React from "react";
import Header from "./components/Header";
import HeroWithEvents from "./components/HeroWithEvents"; 
// ... altri import

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroWithEvents />
    </div>
  );
};

export default App;