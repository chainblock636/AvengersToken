import React from 'react'

const GameProfileTop = () => {
    return (
        <div>
            	<section class="gamer-profile-top">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="gamer-profile-top-inner">
						<div class="profile-photo">
							<div class="img">
								<img src="assets/images/gamer/gamer.png" alt=""/>
							</div>
							<div class="mybadge">
								<img src="assets/images/gamer/badge.png" alt=""/>
								<span>12</span>
							</div>
						</div>
						<div class="g-p-t-counters">
							<div class="g-p-t-single-counter">
								<div class="img">
									<img src="assets/images/gamer/c1.png" alt=""/>
								</div>
								<div class="content">
									<h4>687</h4>
									<span>Total Match</span>
								</div>
							</div>
							<div class="g-p-t-single-counter">
								<div class="img">
									<img src="assets/images/gamer/c2.png" alt=""/>
								</div>
								<div class="content">
									<h4>687</h4>
									<span>Win Ratio</span>
								</div>
							</div>
							<div class="g-p-t-single-counter">
								<div class="img">
									<img src="assets/images/gamer/c3.png" alt=""/>
								</div>
								<div class="content">
									<h4>687</h4>
									<span>Achievements</span>
								</div>
							</div>
						</div>
						<div class="msg-btn-wrapper">
							<a href="#" class="msg-btn">
								<img src="assets/images/gamer/envelop.png" alt=""/>
								<span>Message</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}

export default GameProfileTop
