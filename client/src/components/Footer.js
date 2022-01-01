import React from 'react'
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };

    return (
        <div>
			<footer class="footer" id="footer">
			
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="flogo">
								<img onClick={scrollToTop} src="assets/images/footer-logo.png" alt="" />
							</div>
							<div class="social-links">
								<ul>
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
							<div class="footer-menu">
								<ul>
									{/* <li>
										<a href="#">
											About
										</a>
									</li>
									<li>
										<a href="#">
											FAQ
										</a>
									</li>
									<li>
										<a href="#">
											Disclamer
										</a>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="copy-bg">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
									<p>© Copyright 2021. All Rights Reserved By Avengers Token</p>
							</div>
						</div>
					</div>
				</div>
			</footer> 
        </div>
    )
}

export default Footer
