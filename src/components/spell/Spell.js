/* eslint-disable react/prop-types */
import React from 'react'

const Spell = ({ name, spellFunction }) => {
  return (
    <button className="Spell" onClick={spellFunction}>
        {name}
    </button>
  )
}

export default Spell
