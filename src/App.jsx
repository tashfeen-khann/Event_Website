
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import LoveNotes from './Pages/LoveNotes';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Final from './Pages/Final';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lovenotes" element={<LoveNotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Thank-You" element={<Final />} />

      </Routes>
      <Footer/>
    </Router>
  
    </>
  );
}

export default App;
