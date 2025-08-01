import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElemnet";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Term";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
