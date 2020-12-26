/* eslint-disable react/prop-types */
import React from 'react'

const PlayAgainButton = ({ startGame, gameEnded }) => {
  return gameEnded === false
    ? null
    : (
        <button className="Start_New_Game" onClick={startGame} >
            Play again
        </button>
      )
}

export default PlayAgainButton
