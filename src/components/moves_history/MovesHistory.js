import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from '../../utils/HistoryContext'

const MovesHistory = () => {
  const history = useHistory()
  return (
    <div>
    { history.map(h =>
        <div key={uuidv4()} className="History_Item">
            {h}
        </div>
    )}
    </div>
  )
}

export default MovesHistory
