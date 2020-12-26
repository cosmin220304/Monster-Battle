import { useState, useEffect } from 'react'
import useAbilities from './UseAbilities'

const UseGameLogic = ({ playerHp, setPlayerHp, monsterHp, setMonsterHp }) => {
  const [turn, setTurn] = useState('Player')
  const [gameEnded, setGameEnded] = useState(false)
  const [attack, specialAttack, heal, flee] = useAbilities({ setPlayerHp, setMonsterHp, setTurn, setGameEnded })
  const stringToFunction = {
    Attack: attack,
    SpecialAttack: specialAttack,
    Heal: heal,
    Flee: flee
  }

  const StartGame = () => {
    setMonsterHp(100)
    setPlayerHp(100)
    setTurn('Player')
    setGameEnded(false)
  }

  useEffect(() => {
    StartGame()
  }, [])

  useEffect(() => {
    if (monsterHp <= 0) {
      setGameEnded(true)
    } else if (monsterHp > 100) {
      setMonsterHp(100)
    }
  }, [monsterHp])

  useEffect(() => {
    if (playerHp <= 0) {
      setGameEnded(true)
    } else if (playerHp > 100) {
      setPlayerHp(100)
    }
  }, [playerHp])

  useEffect(() => {
    if (turn === 'Monster') {
      monsterMove()
    }
  }, [turn])

  useEffect(() => {
    if (gameEnded) {
      if (playerHp <= 0) {
        alert('Monster won!')
      } else if (monsterHp <= 0) {
        alert('Player won!')
      }
    }
  }, [gameEnded])

  const monsterMove = async () => {
    // normal attack: 49%
    // special attack: 24%
    // heal: 24%
    // flee: 3%
    await new Promise(resolve => setTimeout(resolve, 200)) // Sleep 0.2 seconds
    const spellChance = Math.floor(Math.random() * 100)
    if (spellChance < 49) {
      attack('Monster')
    } else if (spellChance < 73) {
      specialAttack('Monster')
    } else if (spellChance < 97) {
      heal('Monster')
    } else {
      flee('Monster')
    }
  }

  const playerMove = (spellString) => {
    if (turn === 'Player') {
      stringToFunction[spellString]('Player')
    } else {
      alert('Not your turn!')
    }
  }

  return [playerMove, gameEnded, StartGame]
}

export default UseGameLogic
