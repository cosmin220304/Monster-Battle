/* eslint-disable react/prop-types */
import React from 'react'
import Spell from './Spell'

const SpellList = ({ playerAction, gameEnded }) => {
  return gameEnded
    ? null
    : (
        <div className="SpellList">
            <Spell name="Attack" spell={() => playerAction('Attack')} />
            <Spell name="Special Attack" spell={() => playerAction('SpecialAttack')} />
            <Spell name="Heal" spell={() => playerAction('Heal')} />
            <Spell name="Flee" spell={() => playerAction('Flee')} />
        </div>
      )
}

export default SpellList
