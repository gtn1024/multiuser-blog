import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TimeAgo from "javascript-time-ago";

import zh from 'javascript-time-ago/locale/zh'

TimeAgo.addDefaultLocale(zh)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
