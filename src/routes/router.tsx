import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DEFAULT_PAGE_PATH } from '@/constants/routes'
import { HomePage } from '@/containers'

import BgLightFaded from '@/assets/images/bg-light-faded.avif'
import BgLightFaded2 from '@/assets/images/bg-light-faded-2.avif'

const Router = () => {
  const getAllPage = () => (
    <BrowserRouter>
      <Routes>
        <Route path={DEFAULT_PAGE_PATH} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )

  return (
    <div className='App' id='app'>
      <div className='absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none'>
        <div className='w-[108rem] flex-none flex justify-end'>
          <img src={BgLightFaded} alt='' className='w-[71.75rem] flex-none max-w-none' />
          <img src={BgLightFaded2} alt='' className='w-[90rem] flex-none max-w-none' />
        </div>
      </div>
      {getAllPage()}
    </div>
  )
}

export default Router
