import React, { useState } from 'react'
import Character from '../character'
import Spell from '../spell'
import GameLogic from '../../utils/UseGameLogic'
import '../../assets/App.css'

function Scene () {
  const [playerHp, setPlayerHp] = useState(100)
  const [enemyHp, setEnemyHp] = useState(100)
  const [playerMove, attack, specialAttack, heal, flee, gameEnded, StartGame] = GameLogic({ playerHp, setPlayerHp, enemyHp, setEnemyHp })

  const renderButtons = () => {
    if (gameEnded) {
      return (
      <button className="Start_New_Game" onClick={StartGame} >
        Play again
      </button>
      )
    }
    return (
      <div className="Spells">
        <Spell name="Attack" spellFunction={() => playerMove(attack)} />
        <Spell name="Special Attack" spellFunction={() => playerMove(specialAttack)} />
        <Spell name="Heal" spellFunction={() => playerMove(heal)} />
        <Spell name="Flee" spellFunction={() => playerMove(flee)} />
      </div>
    )
  }

  return (
    <div className="Scene">
      <div className="Characters">
        <Character isPlayer={true} hp={playerHp} />
        <Character isPlayer={false} hp={enemyHp} />
      </div>
      {renderButtons()}
    </div>
  )
}

export default Scene
