// Import necessary React libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/Preksha-React-portfolio-challenge20/" element={<About />} />
            {/* <Route path="/Preksha-React-portfolio-challenge20/home" element={<Home />} /> */}
            <Route path="/Preksha-React-portfolio-challenge20/About" element={<About />} />
            <Route path="/Preksha-React-portfolio-challenge20/Portfolio" element={<Portfolio />} />
            <Route path="/Preksha-React-portfolio-challenge20/contact" element={<Contact />} />
            <Route path="/Preksha-React-portfolio-challenge20/Resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;