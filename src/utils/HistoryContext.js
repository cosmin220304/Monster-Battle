/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'

const HistoryContext = React.createContext()
const HistoryUpdateContext = React.createContext()
const HistoryDeleteContext = React.createContext()

export const useHistory = () => useContext(HistoryContext)
export const useHistoryUpdate = () => useContext(HistoryUpdateContext)
export const useHistoryDelete = () => useContext(HistoryDeleteContext)

export const HistoryProvider = ({ children }) => {
  const [moves, setMoves] = useState([])

  const addMove = (newMove) => {
    setMoves(prev => [newMove, ...prev])
  }

  const deleteMoves = () => {
    setMoves([])
  }

  return (
    <HistoryContext.Provider value={moves}>
      <HistoryUpdateContext.Provider value={addMove}>
        <HistoryDeleteContext.Provider value={deleteMoves}>
          {children}
        </HistoryDeleteContext.Provider>
      </HistoryUpdateContext.Provider>
    </HistoryContext.Provider>
  )
}
