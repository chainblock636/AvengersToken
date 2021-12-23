import React from 'react'

const Modals = () => {
    return (
        <div>
			<div class="bottomtotop">
				<i class="fas fa-chevron-right"></i>
			</div>

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
	    </div>
    )
}

export default Modals
