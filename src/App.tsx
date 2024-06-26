import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import OffersSection from './Components/OffersSection/OffersSection';
import Footer from './Components/Footer';
import MenuSection from './Components/MenuSection/MenuSection';
import DetailedMenuSection from './Components/DetailedMenuSection/DetailedMenuSection';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AbaoutUs/AboutUs';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <OffersSection />
              <MenuSection />
              <DetailedMenuSection />
            </>
          } />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='aboutsus' element={<AboutUs/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
