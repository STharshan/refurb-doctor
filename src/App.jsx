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
import FullRespray from "./pages/FullRespray";
import CarPart from "./pages/CarPart";
import AccidentRepair from "./pages/AccidentRepair";
import Paintless from "./pages/Paintless";
import AlloyWheel from "./pages/AlloyWheel";
import Machine from "./pages/Machine";
import Mobile from "./pages/Mobile";
import Vandal from "./pages/vandal";


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
        <Route path="/services/full-respray" element={<FullRespray />} />
        <Route path="/services/car-part-damage-repair" element={<CarPart />} />
        <Route path="/services/accident-repair" element={<AccidentRepair />} />
        <Route path="/services/vandal-scratch-removal" element={<Vandal />} />
        <Route path="/services/paintless-dent-removal" element={<Paintless />}  />
        <Route path="/services/alloy-wheel-repair" element={<AlloyWheel />} />
        <Route path="/services/machine-polishing" element={<Machine />} />
        <Route path="/services/mobile-repair" element={<Mobile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
