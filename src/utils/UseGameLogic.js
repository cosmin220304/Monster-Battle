import { useState, useEffect } from 'react'

const UseGameLogic = ({ playerHp, setPlayerHp, enemyHp, setEnemyHp }) => {
  // Player first, Monster second
  const [turn, setTurn] = useState('Player')
  const [gameEnded, setGameEnded] = useState(false)

  const StartGame = () => {
    setEnemyHp(100)
    setPlayerHp(100)
    setTurn('Player')
    setGameEnded(false)
  }

  // Keep track of player HP
  useEffect(() => {
    if (enemyHp <= 0) {
      endGame()
    } else if (enemyHp > 100) {
      setEnemyHp(100)
    }
  }, [enemyHp])

  // Keep track of enemy HP
  useEffect(() => {
    if (playerHp <= 0) {
      endGame()
    } else if (playerHp > 100) {
      setPlayerHp(100)
    }
  }, [playerHp])

  const attack = (attacker) => {
    if (attacker === 'Player') {
      setEnemyHp(prev => prev - 10)
    } else {
      setPlayerHp(prev => prev - 10)
    }
    endTurn()
  }

  const specialAttack = (attacker) => {
    const damageAmount = Math.round(Math.random() * 20)
    if (attacker === 'Player') {
      setEnemyHp(prev => prev - damageAmount)
    } else {
      setPlayerHp(prev => prev - damageAmount)
    }
    endTurn()
  }

  const heal = (healer) => {
    const healAmount = Math.round(Math.random() * 20)
    if (healer === 'Player') {
      setPlayerHp(prev => prev + healAmount)
    } else {
      setEnemyHp(prev => prev + healAmount)
    }
    endTurn()
  }

  const flee = (coward) => {
    if (coward === 'Player') {
      alert('You ran away!')
    } else {
      alert('Monster ran away!')
    }
    endGame()
  }

  useEffect(() => {
    if (turn === 'Monster') {
      monsterMove()
    }
  }, [turn])

  const endTurn = () => {
    setTurn(prevTurn => prevTurn === 'Player' ? 'Monster' : 'Player')
  }

  const endGame = () => {
    if (playerHp <= 0) {
      alert('Monster won!')
    } else {
      alert('Player won!')
    }
    setGameEnded(true)
  }

  const monsterMove = async () => {
    // normal attack: 49%
    // special attack: 24%
    // heal: 24%
    // flee: 3%
    await new Promise(resolve => setTimeout(resolve, 200)) // Sleep 200 seconds
    const spellChance = Math.floor(Math.random() * 100)
    if (spellChance < 49) {
      attack(setPlayerHp)
    } else if (spellChance < 73) {
      specialAttack(setPlayerHp)
    } else if (spellChance < 97) {
      heal(setEnemyHp)
    } else {
      flee(setEnemyHp)
    }
  }

  const playerMove = (spell) => {
    if (turn === 'Player') {
      spell('Player')
    } else {
      alert('Not your turn!')
    }
  }

  return [playerMove, attack, specialAttack, heal, flee, gameEnded, StartGame]
}

export default UseGameLogic
