const UseAbilities = ({ setPlayerHp, setMonsterHp, setTurn, setGameEnded }) => {
  const endTurn = () => {
    setTurn(prevTurn => prevTurn === 'Player' ? 'Monster' : 'Player')
  }

  const attack = (attacker) => {
    if (attacker === 'Player') {
      setMonsterHp(prev => prev - 10)
    } else {
      setPlayerHp(prev => prev - 10)
    }
    endTurn()
  }

  const specialAttack = (attacker) => {
    const damageAmount = Math.round(Math.random() * 20)
    if (attacker === 'Player') {
      setMonsterHp(prev => prev - damageAmount)
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
      setMonsterHp(prev => prev + healAmount)
    }
    endTurn()
  }

  const flee = (coward) => {
    if (coward === 'Player') {
      alert('You ran away!')
    } else {
      alert('Monster ran away!')
    }
    setGameEnded(true)
  }

  return [attack, specialAttack, heal, flee]
}

export default UseAbilities
