import React from 'react'
import { Link } from "react-scroll";

const HeroArea = () => {
    return (
        <div>
			<div class="hero-area" id="home">
				<img class="shape parallax5" src="assets/images/home/h2-shape.png" alt="" />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="content">
								<div class="content">
									<h5 class="subtitle">
										$AVET Fan Tokens <br/>
										are here
									</h5>
									<h1 class="title">
										<br/>
										<br/>
										{/* <img src="assets/images/text.png" alt="" /> */}
									</h1>
									<div class="links">
										<Link
											className="mybtn1"
											to="buy-presale"
											spy={true}
											smooth={true}
											offset={-70}
											duration={500}
										>
											Buy Now
										</Link>
										{/* https://avengerstoken.org/assets/white-paper.pdf */}
										{/* <a style={{margin: "0px 10px"}} class="mybtn2">White Paper</a> */}
										{/* <a href="../../watch.html?v=jssO8-5qmag" class="video_btn play-video mfp-iframe">
											<i class="fas fa-play"></i>
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default HeroArea
