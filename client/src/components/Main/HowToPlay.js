import React from 'react'

const HowToPlay = () => {
    return (
        <div>
			<section class="how-to-play" style={{paddingBottom: "320px"}}>
				<img class="left-img" src="assets/images/h-play/left-img.png" alt="" />
				<img class="right-img" src="assets/images/h-play/right-img.png" alt="" />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="section-heading">
								<h5 class="subtitle">
								How to Buy
								</h5>
								<h6 class="text">
									{/* Where skill is rewarded.Join millions of players worldwide! */}
								</h6>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="s-h-play">
								<img src="assets/images/h-play/ic1.png" alt="" />
								<h4>Connect Wallet</h4>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="s-h-play">
								<img src="assets/images/h-play/ic3.png" alt="" />
								<h4>Buy Token</h4>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="s-h-play">
								<img src="assets/images/h-play/ic2.png" alt="" />
								<h4>Hodl for Growth</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default HowToPlay
