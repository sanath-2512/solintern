import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div style={{ position: "relative", background: "#0d1117" }}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;