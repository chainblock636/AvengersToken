import React from 'react'
import Breadcrumb from './components/GameProfile/Breadcrumb'
import UserMenu from './components/GameProfile/UserMenu'
import UserMainDash from './components/GameProfile/UserMainDash'
import GameProfileTop from './components/GameProfile/GameProfileTop'
import Subscribe from './components/GameProfile/Subscribe'

const GameProfile = () => {
    return (
        <div>
            <Breadcrumb />
            <GameProfileTop />
            <UserMenu />
            <UserMainDash />
            <Subscribe />
        </div>
    )
}

export default GameProfile
