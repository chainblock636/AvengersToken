import React from 'react'

const Breadcrumb = () => {
    return (
        <div>
             <section class="breadcrumb-area gamer-profile">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="breadcrumb-list">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Players</a>
                            </li>
                            <li>
                                <a href="#">Gamer's profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bc-content">
                            <div class="left">
                                <h3>Tim Wilkins <span>Online</span></h3>
                                <p>Member Since 08 JAN 2021</p>
                            </div>
                            <div class="right">
                                <div class="player-wrapper">
                                    <span>Players</span>
                                    <h6>28</h6>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="assets/images/player/sm1.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/images/player/sm2.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/images/player/sm3.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/images/player/sm4.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <span>
                                            32+
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	</section>
        </div>
    )
}

export default Breadcrumb
