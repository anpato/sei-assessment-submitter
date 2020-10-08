import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Configuration } from 'react-md'
ReactDOM.render(
  <React.StrictMode>
    <Configuration>
      <App />
    </Configuration>
  </React.StrictMode>,
  document.getElementById('root')
)
