import React from 'react'
import BuyPresale from './components/BuyPresale'
import CounterArea from './components/CounterArea'
import Footer from './components/Footer'
import GamePlay from './components/GamePlay'
import Header from './components/Header'
import HeroArea from './components/HeroArea'
import HowToPlay from './components/HowToPlay'
import JoinUs from './components/JoinUs'
import LatestArchieve from './components/LatestArchieve'
import Modals from './components/Modals'

function App() {
  return (
    <div>
      <Header />
      <HeroArea />
      <CounterArea />
      <BuyPresale />
      <GamePlay />
      <LatestArchieve />
      <JoinUs />
      <HowToPlay />
      <Footer />
      <Modals />
    </div>
  )
}

export default App
