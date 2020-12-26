/* eslint-disable react/prop-types */
import React from 'react'

const Spell = ({ name, spell }) => {
  return (
    <button className="Spell" onClick={spell}>
        {name}
    </button>
  )
}

export default Spell
