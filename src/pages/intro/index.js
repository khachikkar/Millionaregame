import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import "./index.css"

import { GameContext } from '../../context/context'

import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { Button } from 'antd'
import { Link } from 'react-router-dom'


const Intro = () => {

const {isAuth, userProfileInfo} = useContext(GameContext)
// const [redirectToLogin, setRedirectToLogin] = useState(false); 

const handleSignOut = async()=>{
    // console.log("signout")
    try{
      await signOut(auth) // poxancum enq authy vor kaskana uma sign out anum
      // setRedirectToLogin(true);
    }catch(e){
      console.log(e, "sign out message")
    }
  }

  const {fullname} = userProfileInfo


  // if (redirectToLogin) {
  //   return <Navigate to="/login" />; // Redirect to login
  // }

  return (
    <div className='mainCont'>
        <nav>
            
        <p>Logo</p>
       {
        isAuth 
        ? <div className='usertruenav'><p>{fullname}</p> <Button onClick={handleSignOut}>Log Out</Button></div>
        : <Link to="/login" > <Button type='primary'>Log In</Button></Link> 
       } 
        
        </nav>

        <main >
      <Outlet />
      </main>

    </div>
  )
}

export default Intro
