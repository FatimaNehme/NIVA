import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Idea from "./components/Idea";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./Admin";
import WorkPage from "./components/WorkPage";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Idea />
        <Services />
        <Work />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter basename="/NIVA">

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/work" element={<WorkPage />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;