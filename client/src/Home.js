import React from 'react'
import CounterArea from './components/Main/CounterArea'
import BuyPresale from './components/BuyPresale'
import GamePlay from './components/Main/GamePlay'
import HeroArea from './components/Main/HeroArea'
import HowToPlay from './components/Main/HowToPlay'
import JoinUs from './components/Main/JoinUs'
import LatestArchieve from './components/Main/LatestArchieve'
import About from './components/Main/About'

function Home() {
  return (
    <div>
      <HeroArea />
      <CounterArea />
      <About />
      <BuyPresale/>
      <GamePlay />
      <LatestArchieve />
      <JoinUs />
      <HowToPlay />
    </div>
  )
}

export default Home
