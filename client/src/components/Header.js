import React from 'react'
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const header = () => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    
    return (
      <div>
        <header class="header">
          <div class="overlay"></div>
          <section class="top-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="content">
                    <div class="left-content">
                      {/* <ul class="left-list">
                        <li>
                          <p>
                            <i class="fas fa-headset"></i> Support
                          </p>
                        </li>
                      </ul> */}
                      <ul class="top-social-links">
                        {/* <li>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li> */}
                        <li>
                          <a href="https://twitter.com/AvengersTokens">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/avengerstokenEN1">
                            <i class="fab fa-telegram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-discord"></i>
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    {/* <div class="right-content">
                      <ul class="right-list">
                        <li>
                          <div
                            class="notofication"
                            data-toggle="modal"
                            data-target="#usernotification"
                          >
                            <i class="far fa-bell"></i>
                          </div>
                        </li>
                        <li>
                          <div
                            class="message"
                            data-toggle="modal"
                            data-target="#usermessage"
                          >
                            <i class="far fa-envelope"></i>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div class="mainmenu-area">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#home">
                      <img onClick={scrollToTop} src="assets/images/logo.png" alt="" />
                    </a>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#main_menu"
                      aria-controls="main_menu"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                      class="collapse navbar-collapse fixed-height"
                      id="main_menu"
                    >
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                          <Link
                            activeClass="active"
                            className="nav-link"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Home
                          </Link>
                        </li>
                        {/* <li class="nav-item">
                          <a class="nav-link" href="#">
                          <NavLink to="/staking">
                            DAO/Staking
                            </NavLink>
                          </a>
                        </li> */}
                        <li class="nav-item">
                          <Link
                            activeClass="active"
                            className="nav-link"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            About
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link
                            activeClass="active"
                            className="nav-link"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Road Map
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link
                            activeClass="active"
                            className="nav-link"
                            to="tokenomics"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Tokenomics
                          </Link>
                        </li>

                        <li class="nav-item">
                          <Link
                            activeClass="active"
                            className="nav-link"
                            to="community"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Community
                          </Link>
                        </li>
                      </ul>
                      <a
                        href="#"
                        class="mybtn1"
                        data-toggle="modal"
                        data-target="#signin"
                      >
                        {" "}
                         Wallet
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default header
