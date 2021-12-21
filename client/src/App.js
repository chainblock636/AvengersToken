import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Modals from './components/Main/Modals';
import Preloader from './components/Preloader';
import Home from './Home';
import GameProfile from './GameProfile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Preloader />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/GameProfile" element={<GameProfile />} />
        </Routes>
        <Footer />
        <Modals />
      </Router>
      
    </div>
  )
}

export default App
