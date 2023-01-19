import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'

const MainHolder = () => {
  return (
    <>

    <Routes>

        <Route path='/' element={<Nav/>}/>
    </Routes>
    
    </>
  )
}

export default MainHolder