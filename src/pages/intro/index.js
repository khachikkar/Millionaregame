import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import "./index.css"

import { GameContext } from '../../context/context'

const Intro = () => {

const {isAuth} = useContext(GameContext)


  return (
    <div>
        <nav>
            
        <p>Logo</p>
       {
        isAuth 
        ? <div><p>User : Khachik Karapetyan</p> <button>Log Out</button></div>
        : <p>Login</p>
       } 
        
        </nav>
        <main>
      <Outlet />
      </main>
    </div>
  )
}

export default Intro
