import React from 'react'
import CounterArea from './components/Main/CounterArea'
import Footer from './components/Footer'
import GamePlay from './components/Main/GamePlay'
import Header from './components/Header'
import HeroArea from './components/Main/HeroArea'
import HowToPlay from './components/Main/HowToPlay'
import JoinUs from './components/Main/JoinUs'
import LatestArchieve from './components/Main/LatestArchieve'
import Modals from './components/Main/Modals'
import About from './components/Main/About'

function Home() {
  return (
    <div>
      <HeroArea />
      <CounterArea />
      <About />
      <GamePlay />
      <LatestArchieve />
      <JoinUs />
      <HowToPlay />
    </div>
  )
}

export default Home
