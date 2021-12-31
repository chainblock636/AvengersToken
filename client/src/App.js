import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modals from "./components/Main/Modals";
import Preloader from "./components/Preloader";
import Modal from "react-modal";
import Home from "./Home";
import GameProfile from "./GameProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wallet from './components/Modals/Wallet';
import { useParams } from "react-router";


const App = () => {
  let { id } = useParams();

  return (
    <div>
      <Router>
        <Header />
        <Preloader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Home />} />
          <Route exact path="/staking" element={<GameProfile />} />
        </Routes>
        <Footer />
        <Modals />
        <Wallet />
      </Router>
    </div>
  );
};

export default App;