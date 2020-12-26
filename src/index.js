import React from 'react'
import ReactDOM from 'react-dom'
import Scene from './components/scene'
import { HistoryProvider } from './utils/HistoryContext'

ReactDOM.render(
  <React.StrictMode>
    <HistoryProvider>
    <Scene />
    </HistoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
