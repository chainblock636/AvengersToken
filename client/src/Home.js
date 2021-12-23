import React from 'react'
import CounterArea from './components/Main/CounterArea'
import BuyPresale from './components/BuyPresale'
import GamePlay from './components/Main/GamePlay'
import HeroArea from './components/Main/HeroArea'
import HowToPlay from './components/Main/HowToBuy'
import JoinUs from './components/Main/JoinUs'
import LatestArchieve from './components/Main/LatestArchieve'
import About from './components/Main/About'
import RoadMap from './components/Main/RoadMap'
import Recent from './components/Main/Recent'
import Contact from './components/Main/Contact'
import HowToBuy from './components/Main/HowToBuy'

function Home() {
  return (
    <div>
      <HeroArea />
      {/* <CounterArea /> */}
      <About />
      <RoadMap />
      <Recent />
      {/* <LatestArchieve /> */}
      {/* <GamePlay /> */}
      {/* <JoinUs /> */}
      <BuyPresale/>
      <HowToBuy />
      <Contact />
    </div>
  )
}

export default Home
