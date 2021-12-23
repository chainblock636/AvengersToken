import React from 'react'
import Breadcrumb from './components/GameProfile/Breadcrumb'
import UserMenu from './components/GameProfile/UserMenu'
import UserMainDash from './components/GameProfile/UserMainDash'
import GameProfileTop from './components/GameProfile/GameProfileTop'
import Subscribe from './components/GameProfile/Subscribe'

const GameProfile = () => {
    return (
        <div>
            {/* <Breadcrumb /> */}
            <section class="breadcrumb-area bonus">
                
            </section>
            <section class="bonuse-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-area">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8 text-center">
                                        <h1>
                                            Coming Soon
                                        </h1>
                                        <a href="#" class="mybtn2">
                                            Buy Presale
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <GameProfileTop />
            <UserMenu />
            <UserMainDash />
            <Subscribe /> */}
        </div>
    )
}

export default GameProfile
