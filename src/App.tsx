import React from "react";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/projects/projects";
import About from "./components/about/About";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="main-content">
        <Home></Home>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
