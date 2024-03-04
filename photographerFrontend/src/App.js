import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Category from './Category';
import ErrorPage from './ErrorPage';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sampleImageSrcs = [
    'Image 1',
    'Image 2',
    'Image 3',
    'Image 4',
    'Image 5',
    'Image 5',
  ];
  return (
    <Router>
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route path='/' element={<Home isMobile={isMobile}/>}/>
          <Route path='/about' element={<About isMobile={isMobile}/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/architecture' element={<Category name={"Architecture"} images={sampleImageSrcs} cover={"../static/images/architecture.jpg"} isMobile={isMobile}/>}/>
          <Route path='/healthcare' element={<Category name={"Healthcare"} images={sampleImageSrcs} cover={"../static/images/healthcare.jpg"} isMobile={isMobile}/>}/>
          <Route path='/commercial' element={<Category name={"Commercial"} images={sampleImageSrcs} cover={"../static/images/commercial.jpg"} isMobile={isMobile}/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
