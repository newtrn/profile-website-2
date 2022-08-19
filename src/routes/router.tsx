import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'

import { DEFAULT_PAGE_PATH } from '@/constants/routes'
import { HomePage } from '@/containers'

const Router = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const getAllPage = () => (
    <BrowserRouter>
      <Routes>
        <Route path={DEFAULT_PAGE_PATH} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )

  return (
    <div className="App" id="app">
      {getAllPage()}
    </div>
  )
}

export default Router
