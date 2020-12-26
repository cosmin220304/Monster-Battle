/* eslint-disable react/prop-types */
import React from 'react'

const Character = ({ isPlayer, hp }) => {
  return (
    <div>
        <div className="Name">
            { isPlayer ? 'You' : 'Monster'}
        </div>
        <div className="HP">
            <div className="Bar">
                <div className="Health" style={{ width: `${hp}%` }}/>
            </div>
            {hp}/100
        </div>
    </div>
  )
}

export default Character
