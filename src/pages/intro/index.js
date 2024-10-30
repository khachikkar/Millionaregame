import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router'
import "./index.css"

import { GameContext } from '../../context/context'

import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebase'


const Intro = () => {

const {isAuth, userProfileInfo} = useContext(GameContext)
const navigate = useNavigate()


const handleSignOut = async()=>{
    // console.log("signout")
    try{
      await signOut(auth) // poxancum enq authy vor kaskana uma sign out anum
    }catch(e){
      console.log(e, "sign out message")
    }
  }

  const {fullname} = userProfileInfo


  return (
    <div className='mainCont'>
        <nav>
            
        <p>Logo</p>
       {
        isAuth 
        ? <div><p>User : {fullname}</p> <button onClick={handleSignOut}>Log Out</button></div>
        : <button onClick={()=>{ navigate("/login")}}>Log IN</button>
       } 
        
        </nav>

        <main >
      <Outlet />
      </main>

    </div>
  )
}

export default Intro
