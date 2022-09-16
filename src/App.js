import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Banner from './Pages/Banner';
import Skill from './Pages/Skill';
import RecentWork from './Pages/RecentWork';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';
import Expert from './Pages/Expert';
import About from './Pages/About';
import Certificate from './Pages/Certificate';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Banner" element={<Banner />} />
           <Route path="/Skill" element={<Skill />} />
           <Route path="/RecentWork" element={<RecentWork />} />
           <Route path="/Testimonials" element={<Testimonials />} />
           <Route path="/ContactUs" element={<ContactUs />} />
           <Route path="/Expert" element={<Expert />} />
           <Route path="/About" element={<About />} />
           <Route path="/Certificate" element={<Certificate />} />
           <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
