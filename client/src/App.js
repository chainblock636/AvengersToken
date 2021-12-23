import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modals from "./components/Main/Modals";
import Preloader from "./components/Preloader";
import Modal from "react-modal";
import Home from "./Home";
import GameProfile from "./GameProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [modal, setModal] = useState(false);
  React.useEffect(() => {
    if (window.ethereum) {
      console.log(window.ethereum);
    } else {
      // alert('Current network "undefined", Use ethereum enabled browser.');
      setModal(true);
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Preloader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/staking" element={<GameProfile />} />
        </Routes>
        <Footer />
        <Modal
          isOpen={modal}
          style={{
            content: {
              position: "absolute",
              left: "35.5rem",
              right: "35.5rem",
              top: "10.5rem",
              bottom: "10.5rem",
              backgroundColor: "#3e1b76",
              overflow: "auto",
              width: "500px",
              height: "200px",
              borderRadius: "15px",
            },
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Current network "undefined", Use ethereum enabled browser
            </p>
          </div>
          <div
            style={{
              backgroundColor: "red",
              width: 80,
              height: 40,
              marginLeft: 350,
              marginTop: 30,
              borderRadius: 8,
              padding: 5,
              paddingLeft: 15,
            }}
            onClick={() => {
              setModal(false);
            }}
          >
            <p style={{ color: "white", fontWeight: "bold" }}>Close</p>
          </div>
        </Modal>
        <Modals />
      </Router>
    </div>
  );
};

export default App;
