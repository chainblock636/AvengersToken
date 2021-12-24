import React from 'react'

const Contact = () => {
	const style = {
		paddingTop: "0px",
		height: 150
	};

	const contractAdrress = "0x024A9Ac101587517BEd42FeFf0d304e500d58f73";

	const copy = (event) => {
		event.preventDefault();
		navigator.clipboard.writeText(contractAdrress);
	}

    return (
        <div>
			<section class="contact-section" id="community" style={{backgroundImage: "none"}}>
				<div class="container">
					<div class="row">	
						<div class="col-lg-12">
							<div class="contact-area">
								<div class="row">
									<div class="col-lg-12">
										<h2>Get in touch today!</h2>
									</div>
								</div>
								<div class="row justify-content-between align-items-center">
									<div style={{margin: "auto"}} class="col-lg-6">
										<div class="right-area">
											<div class="bottom-content">
												<div class="single-info center">
													<div style={{margin: "auto"}} class="icon">
													<a href="https://t.me/avengerstokenEN1"><i class="fab fa-telegram"></i></a>
													</div>
													<div style={{margin: "auto"}} class="icon">
														<a href="https://twitter.com/AvengersTokens"><i class="fab fa-twitter"></i></a>
													</div>
													<div style={{margin: "auto"}} class="icon">
													<a href="#"><i class="fab fa-discord"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="how-to-play" style={style}>
				<div class="subscribe-area">
					<div class="container">
						<div class="row">
							<div class="col-lg-12">
								<div class="subscribe-box" style={{top: 0}}>
									<img class="left" src="assets/images/vr.png" alt="" />
									<img class="right" src="assets/images/game controler_.png" alt="" />
									<div class="row justify-content-center">
										<div class="col-lg-12">
											<div class="heading-area">
													<h4 class="title">
													$AVET Contract address
													</h4>
											</div>
										</div>
									
										<div class="col-lg-6 col-12">
											
											<form onSubmit={copy} class="form-area">
												<input type="text" readOnly value={contractAdrress} id='contractAdrress' />
												<button class="mybtn1" type="submit"><i class="fas fa-file"></i> Copy
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default Contact
