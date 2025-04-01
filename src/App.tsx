import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>

    // <div className="min-h-screen">
    //   <NavBar />
    //   <main className="main-content">
    //     <Home></Home>
    //     <Projects></Projects>
    //     <About></About>
    //     <Contact></Contact>
    //   </main>
    // </div>
  );
}

export default App;
