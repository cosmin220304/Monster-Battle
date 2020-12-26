import React, { useState } from 'react'
import useGameLogic from '../../utils/UseGameLogic'
import Character from '../character'
import SpellList from '../spell_list'
import PlayAgainButton from '../common/PlayAgainButton'
import MovesHistory from '../moves_history'
import '../../assets/App.css'

function Scene () {
  const [playerHp, setPlayerHp] = useState(100)
  const [monsterHp, setMonsterHp] = useState(100)
  const [playerAction, gameEnded, startGame] = useGameLogic({ playerHp, setPlayerHp, monsterHp, setMonsterHp })

  return (
    <div className="Scene">
      <h1> 👨🏻 Monster Battle 👾 </h1>
      <div className="Characters" >
        <Character isPlayer={true} hp={playerHp} />
        <Character isPlayer={false} hp={monsterHp} />
      </div>
      <SpellList playerAction={playerAction} gameEnded={gameEnded} />
      <PlayAgainButton startGame={startGame} gameEnded={gameEnded} />
      <MovesHistory />
    </div>
  )
}

export default Scene
