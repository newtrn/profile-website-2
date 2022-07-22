import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from '@/routes/router'
import '@/assets/styles/global.css'
import '@/assets/styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
