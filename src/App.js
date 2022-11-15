import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Proteced from './components/Proteced'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './scss/global.scss'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dasboard"
          element={
            <Proteced>
              <NavBar />
            </Proteced>
          }
        />
      </Routes>
    </>
  )
}
export default App
