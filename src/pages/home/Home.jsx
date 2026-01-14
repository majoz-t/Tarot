import React from 'react'
import { getSakuraCards } from '../../services/cardService'

const Home = () => {
  const cards=getSakuraCards()
  console.log(cards)
  return (
    <div>Home</div>
  )
}

export default Home

