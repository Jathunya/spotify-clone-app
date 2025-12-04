import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-min h-screen m-2 py-4 px-4 rounded bg-[#121212] text-white over lg:w-[75%]'>
        <Routes>
            <Route path='/'
            element={<DisplayHome />} />
        </Routes>
    </div>
  )
}

export default Display