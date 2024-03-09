import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import EuphoriaApp from './pages/euphoriaApp';
import CosmeticsApp from './pages/cosmeticsApp';
import FurnitureApp from './pages/furnitureApp';
import MusicApp from './pages/musicApp';
import PhotographerApp from './pages/photographerApp';
import { useEffect, useState } from 'react';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  const cosmeticsImages = [
    'cosmetics-1',
    'cosmetics-2',
    'cosmetics-3',
    'cosmetics-4',
  ]
  const portfolioImages = [
    'portfolio-1',
    'portfolio-2',
    'portfolio-3',
  ]
  const furnitureImages = [
    'furniture-1',
    'furniture-2',
    'furniture-3',
    'furniture-4',
  ]
  const euphoriaImages = [
    'euphoria-1',
    'euphoria-2',
    'euphoria-3',
  ]
  const musicAppImages = [
    'musicApp-1',
    'musicApp-2',
    'musicApp-3',
  ]

  const cosmeticsDescription = "An online cosmetics store, developed using React and Django, featuring user login options, social logins, product listings, as well as cart and wishlist capabilities. The store offers a wide variety of cosmetics products to cater to different preferences and needs.";
  const furnitureDescription = "An online furniture store created with React and Django, designed to offer a hassle-free experience for exploring curated furnishings.";
  const euphoriaDescription = "A virtual showcase capturing the essence of a charming coffee shop. Immerse yourself in the aroma of freshly brewed coffee and the cozy ambiance. Explore a digital journey that brings the warm embrace of Cafe Euphoria to your screen.";
  const portfolioDescription = "A curated collection of visual narratives, capturing fleeting moments in time. This online portfolio is an invitation to witness the world from a unique perspective, where every click tells a story.";
  const musicAppDescription = "A music app created with React and Django, utilizing the Spotify API to showcase saved and featured playlists. Explore your favorite tunes and discover new melodies in a seamless digital experience.";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <Router>
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/euphoria" element={<EuphoriaApp />} />
          <Route path="/photographer" element={<PhotographerApp />} />
          <Route path="/furniture" element={<FurnitureApp />} />
          <Route path="/cosmetics" element={<CosmeticsApp />} />
          <Route path="/music" element={<MusicApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/cosmetics" element={<Project images={cosmeticsImages} name={"Cosmetics Boutique"} description={cosmeticsDescription} isMobile={isMobile}/>} />
          <Route path="/work/furniture" element={<Project images={furnitureImages} name={"Furniture Emporium"} description={furnitureDescription} isMobile={isMobile}/>} />
          <Route path="/work/portfolio" element={<Project images={portfolioImages} name={"Photographer Portfolio"} description={portfolioDescription} isMobile={isMobile}/>} />
          <Route path="/work/euphoria" element={<Project images={euphoriaImages} name={"Café Euphoria"} description={euphoriaDescription} isMobile={isMobile}/>} />
          <Route path="/work/music-app" element={<Project images={musicAppImages} name={"Music App"} description={musicAppDescription} isMobile={isMobile}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
