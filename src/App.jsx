import { useState } from 'react'
import Google from './pages/google'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
       <Routes>
          <Route element={<Google/>} path='/google'/>
        </Routes>
    </>
  )
}

export default App
