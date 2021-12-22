import React from 'react'
import CounterArea from './components/Main/CounterArea'
import BuyPresale from './components/BuyPresale'
import GamePlay from './components/Main/GamePlay'
import HeroArea from './components/Main/HeroArea'
import HowToPlay from './components/Main/HowToPlay'
import JoinUs from './components/Main/JoinUs'
import LatestArchieve from './components/Main/LatestArchieve'
import About from './components/Main/About'
import RoadMap from './components/Main/RoadMap'
import Recent from './components/Main/Recent'

function Home() {
  return (
    <div>
      <HeroArea />
      <CounterArea />
      <About />
      <BuyPresale/>
      <RoadMap />
      <Recent />
      <LatestArchieve />
      <GamePlay />
      <JoinUs />
      <HowToPlay />
    </div>
  )
}

export default Home
