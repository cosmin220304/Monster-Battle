import { useHistoryUpdate } from './HistoryContext'

const failedAction = ' It was not very effective!'
const succesfulAction = ' It was very effective!'

const UseAbilities = ({ setPlayerHp, setMonsterHp, setTurn, setGameEnded }) => {
  const updateHistory = useHistoryUpdate()

  const endTurn = () => {
    setTurn(prevTurn => prevTurn === 'Player' ? 'Monster' : 'Player')
  }

  const attack = (attacker) => {
    const move = `${attacker} used normal attacke (10 damage).`

    if (attacker === 'Player') {
      setMonsterHp(prev => prev - 10)
    } else {
      setPlayerHp(prev => prev - 10)
    }

    updateHistory(move)
    endTurn()
  }

  const specialAttack = (attacker) => {
    const damageAmount = Math.round(Math.random() * 20)
    let move = `${attacker} used special attack (${damageAmount} damage).`

    if (attacker === 'Player') {
      setMonsterHp(prev => prev - damageAmount)
    } else {
      setPlayerHp(prev => prev - damageAmount)
    }

    if (damageAmount <= 5) {
      move += failedAction
    }

    if (damageAmount >= 15) {
      move += succesfulAction
    }

    updateHistory(move)
    endTurn()
  }

  const heal = (healer) => {
    const healAmount = Math.round(Math.random() * 20)
    let move = `${healer} used healing (${healAmount} hp)`

    if (healer === 'Player') {
      setPlayerHp(prev => prev + healAmount)
    } else {
      setMonsterHp(prev => prev + healAmount)
    }

    if (healAmount <= 5) {
      move += failedAction
    }

    if (healAmount >= 15) {
      move += succesfulAction
    }

    updateHistory(move)
    endTurn()
  }

  const flee = (coward) => {
    const move = `${coward} ran away like a coward`

    if (coward === 'Player') {
      alert('You ran away!')
    } else {
      alert('Monster ran away!')
    }

    updateHistory(move)
    setGameEnded(true)
  }

  return [attack, specialAttack, heal, flee]
}

export default UseAbilities
