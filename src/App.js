import "./App.css";
import Header from "./components/Header";
import Second from "./components/Second";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Section /> */}
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/second" element={<Second />} />
          <Route path="/" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
     
    </Router>
  );
}
export default App;
