import React from 'react'

const Modals = () => {
    return (
        <div>
            	{/* <!-- Back to Top Start --> */}
	<div class="bottomtotop">
		<i class="fas fa-chevron-right"></i>
	</div>
	{/* <!-- Back to Top End --> */}


	{/* <!-- User Message Modal Start--> */}
	<div class="modal fade" id="usermessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
			<div class="modal-content">
				<div class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</div>
				<div class="modal-body">
					<div id="mycontainer">
						<aside>
							<header>
								<input type="text" placeholder="search" />
							</header>
							<ul>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status orange"></span>
											offline
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_02.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status green"></span>
											online
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_03.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status orange"></span>
											offline
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_04.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status green"></span>
											online
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_05.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status orange"></span>
											offline
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_06.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status green"></span>
											online
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_07.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status green"></span>
											online
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_08.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status green"></span>
											online
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_09.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status green"></span>
											online
										</h3>
									</div>
								</li>
								<li>
									<img src="../../s.cdpn.io/1940306/chat_avatar_10.jpg" alt="" />
									<div>
										<h2>Prénom Nom</h2>
										<h3>
											<span class="status orange"></span>
											offline
										</h3>
									</div>
								</li>
							</ul>
						</aside>
						<main>
							<header>
								<img src="../../s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
								<div>
									<h2>Vincent Porter</h2>
									<h3>already 1902 messages</h3>
								</div>
							</header>
							<ul id="chat">
								<li class="you">
									<div class="entete">
										<span class="status green"></span>
										<h2>Vincent</h2>
										<h3>10:12AM, Today</h3>
									</div>
									<div class="triangle"></div>
									<div class="message">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
									</div>
								</li>
								<li class="me">
									<div class="entete">
										<h3>10:12AM, Today</h3>
										<h2>Vincent</h2>
										<span class="status blue"></span>
									</div>
									<div class="triangle"></div>
									<div class="message">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
									</div>
								</li>
								<li class="me">
									<div class="entete">
										<h3>10:12AM, Today</h3>
										<h2>Vincent</h2>
										<span class="status blue"></span>
									</div>
									<div class="triangle"></div>
									<div class="message">
										OK
									</div>
								</li>
								<li class="you">
									<div class="entete">
										<span class="status green"></span>
										<h2>Vincent</h2>
										<h3>10:12AM, Today</h3>
									</div>
									<div class="triangle"></div>
									<div class="message">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
									</div>
								</li>
								<li class="me">
									<div class="entete">
										<h3>10:12AM, Today</h3>
										<h2>Vincent</h2>
										<span class="status blue"></span>
									</div>
									<div class="triangle"></div>
									<div class="message">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
									</div>
								</li>
								<li class="me">
									<div class="entete">
										<h3>10:12AM, Today</h3>
										<h2>Vincent</h2>
										<span class="status blue"></span>
									</div>
									<div class="triangle"></div>
									<div class="message">
										OK
									</div>
								</li>
							</ul>
							<footer>
								<textarea placeholder="Type your message"></textarea>
								<img src="../../s.cdpn.io/1940306/ico_picture.png" alt="" />
								<img src="../../s.cdpn.io/1940306/ico_file.png" alt="" />
								<a href="#">Send</a>
							</footer>
						</main>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- User Message Modal End--> */}

	{/* <!-- User Notification Modal Start--> */}
	<div class="modal fade" id="usernotification" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Notification</h4>
					<div class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</div>
				</div>
				<div class="modal-body">
					<div class="single-notification">
						<div class="img">
							<img src="assets/images/n1.png" alt="" />
						</div>
						<div class="content">
							<div class="top-area">
								<h4>Update Announcement</h4>
								<p>2021-03-07  -  23:50:21 </p>
							</div>
							<div class="middle-area">
								<h6>Dear player:</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
							</div>
							<div class="bottom-area">
								<p>Jugaro.Game Team</p>
								<span>April 30 2021</span>
							</div>
						</div>
					</div>
					<div class="single-notification">
						<div class="img">
							<img src="assets/images/n1.png" alt="" />
						</div>
						<div class="content">
							<div class="top-area">
								<h4>Update Announcement</h4>
								<p>2021-03-07  -  23:50:21 </p>
							</div>
							<div class="middle-area">
								<h6>Dear player:</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
							</div>
							<div class="bottom-area">
								<p>Jugaro.Game Team</p>
								<span>April 30 2021</span>
							</div>
						</div>
					</div>
					<div class="single-notification">
						<div class="img">
							<img src="assets/images/n1.png" alt="" />
						</div>
						<div class="content">
							<div class="top-area">
								<h4>Update Announcement</h4>
								<p>2021-03-07  -  23:50:21 </p>
							</div>
							<div class="middle-area">
								<h6>Dear player:</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
							</div>
							<div class="bottom-area">
								<p>Jugaro.Game Team</p>
								<span>April 30 2021</span>
							</div>
						</div>
					</div>
					<div class="single-notification">
						<div class="img">
							<img src="assets/images/n1.png" alt="" />
						</div>
						<div class="content">
							<div class="top-area">
								<h4>Update Announcement</h4>
								<p>2021-03-07  -  23:50:21 </p>
							</div>
							<div class="middle-area">
								<h6>Dear player:</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum dictum congue. Duis fringilla malesuada lobortis. In ultricies venenatis magna ut mollis. Nam sit amet arcu lobortis, porta nisl non, egestas felis. Nulla et finibus massa. Ut varius tristique elit et gravida.</p>
							</div>
							<div class="bottom-area">
								<p>Jugaro.Game Team</p>
								<span>April 30 2021</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- User Notification Modal End--> */}
	
	{/* <!-- SignIn Area Start --> */}
	<div class="modal fade login-modal sign-in" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered " role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<div class="modal-body">
					<ul class="nav l-nav" role="tablist">
						<li class="nav-item" role="presentation">
							<a class="nav-link mybtn2 active" id="pills-m_login-tab" data-toggle="pill" href="#pills-m_login" role="tab" aria-controls="pills-m_login" aria-selected="true">Login</a>
						</li>
						<li class="nav-item" role="presentation">
							<a class="nav-link mybtn2" id="pills-m_register-tab" data-toggle="pill" href="#pills-m_register" role="tab" aria-controls="pills-m_register" aria-selected="false">Register</a>
						</li>
						</ul>
						<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-m_login" role="tabpanel" aria-labelledby="pills-m_login-tab">
							<div class="header-area">
								<h4 class="title">Welcome to
									JuGARO</h4>
							</div>
							<div class="form-area">
								<form action="#" method="POST">
									<div class="form-group">
											<input type="text" class="input-field" id="input-name" placeholder="Username" />
									</div>
									<div class="form-group">
											<input type="email" class="input-field" id="input-email" placeholder="Password" />
									</div>
									<div class="form-group">
										<span>Forgot your password? <a href="#">recover password</a></span>
									</div>
									<div class="form-group">
										<button type="submit" class="mybtn2">Login</button>
									</div>
								</form>
							</div>
							
						</div>
						<div class="tab-pane fade" id="pills-m_register" role="tabpanel" aria-labelledby="pills-m_register-tab">
							<div class="header-area">
								<span class="bunnus_btn">
									<span>Current Contest Pool</span>
									<h4>$500</h4>
								</span>
								<h4 class="title">Play +100 games
									and win cash!</h4>
									<p class="text">
										Fill this outyour majesty & Get Your Bonus
									</p>
							</div>
							<div class="form-area">
								<form action="#" method="POST">
									<div class="form-group">
											<input type="text" class="input-field" id="input-name" placeholder="Username" />
									</div>
									<div class="form-group">
											<input type="email" class="input-field" id="input-email" placeholder="Enter your Email" />
									</div>
									<div class="form-group">
											<input type="password" class="input-field" id="input-password" placeholder="Enter your password" />
									</div>
									<div class="form-group">
											<input type="password" class="input-field" id="input-con-password" placeholder="Enter your Confirm Password" />
									</div>
									<div class="form-group">
										<div class="check-group">
												<input type="checkbox" class="check-box-field" id="input-terms" checked="" />
												<label for="input-terms">
														I agree with <a href="#">terms and Conditions</a> and  <a href="#">privacy policy</a>
												</label>
										</div>
									</div>
									<div class="form-group">
										<button type="submit" class="mybtn2">Register</button>
									</div>
								</form>
							</div>
						</div>
						</div>
					
					
				</div>
			</div>
			</div>
	</div>
	{/* <!-- SignIn Area End --> */}
    </div>
    )
}

export default Modals
