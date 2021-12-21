import React from 'react'

const header = () => {
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
                      <ul class="left-list">
                        <li>
                          <p>
                            <i class="fas fa-headset"></i> Support
                          </p>
                        </li>
                      </ul>
                      <ul class="top-social-links">
                        <li>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="right-content">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Top Header Area End -->
		<!--Main-Menu Area Start--> */}
          <div class="mainmenu-area">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html">
                      <img src="assets/images/logo.png" alt="" />
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
                          <a class="nav-link" href="raffles.html">
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="raffles.html">
                            Raffles
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="games.html">
                            Games
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="tournaments.html">
                            Tournaments
                          </a>
                        </li>
                        {/* <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pages
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="about.html">
                                {" "}
                                <i class="fa fa-angle-double-right"></i>About
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="bonuse-page.html">
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Bonuse
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="ticket-page.html">
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Ticket
                                Page
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="raffles-details.html"
                              >
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Raffles
                                Details
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="games_details.html"
                              >
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Games
                                Details
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="tournaments2.html">
                                {" "}
                                <i class="fa fa-angle-double-right"></i>
                                Tournaments Details
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="gamer-profile1.html"
                              >
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Gamer
                                Profile Public
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="gamer-profile6.html"
                              >
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Gamer
                                Problie Private{" "}
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="help1.html">
                                {" "}
                                <i class="fa fa-angle-double-right"></i>Help
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="404.html">
                                {" "}
                                <i class="fa fa-angle-double-right"></i>404
                              </a>
                            </li>
                          </ul>
                        </li> */}
                        <li class="nav-item">
                          <a class="nav-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#"
                        class="mybtn1"
                        data-toggle="modal"
                        data-target="#signin"
                      >
                        {" "}
                        Join us
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Main-Menu Area Start--> */}
        </header>
      </div>
    );
}

export default header
