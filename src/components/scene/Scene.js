import React, { useState } from 'react'
import Character from '../character'
import Spell from '../spell'
import useGameLogic from '../../utils/UseGameLogic'
import '../../assets/App.css'

function Scene () {
  const [playerHp, setPlayerHp] = useState(100)
  const [monsterHp, setMonsterHp] = useState(100)
  const [playerMove, gameEnded, StartGame] = useGameLogic({ playerHp, setPlayerHp, monsterHp, setMonsterHp })

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
        <Spell name="Attack" spellFunction={() => playerMove('Attack')} />
        <Spell name="Special Attack" spellFunction={() => playerMove('SpecialAttack')} />
        <Spell name="Heal" spellFunction={() => playerMove('Heal')} />
        <Spell name="Flee" spellFunction={() => playerMove('Flee')} />
      </div>
    )
  }

  return (
    <div className="Scene">
      <div className="Characters">
        <Character isPlayer={true} hp={playerHp} />
        <Character isPlayer={false} hp={monsterHp} />
      </div>
      {renderButtons()}
    </div>
  )
}

export default Scene
