import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from '@/routes/router'
import '@/assets/styles/global.css'
import '@/assets/styles/normalize.css'
import '@/assets/iconFont/style.css'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.extensions.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
