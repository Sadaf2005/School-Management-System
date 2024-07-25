import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import GoogleMap from "./Components/GoogleMap";
import About from "./Components/About";
import Academics from "./Components/Academics";
import Admission from "./Components/Admission";
import Contact from "./Components/Contact";
import Faculty from "./Components/Faculty";
import Gallery from "./Components/Gallery";
import AchievementSection from "./Components/AchievementSection";
import Footer from "./Components/Footer";

// export default App;
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievement" element={<AchievementSection />} />
        </Routes>
        <Footer />
        <GoogleMap />
      </div>
    </Router>
  );
}
export default App;
