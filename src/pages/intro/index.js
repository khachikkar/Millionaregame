import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import "./index.css"

import { GameContext } from '../../context/context'

import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import logo from "../../img/Gemini_Generated_Image_2n11s72n11s72n11.png"
import translations from "../../internationization/translations";

const Intro = () => {

const {isAuth, userProfileInfo, language, setLanguage} = useContext(GameContext)
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

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };


  return (
    <div className='mainCont'>
        <nav>
            
        <img className='logo' src={logo} alt='logo' />
       {
        isAuth 
        ? <div className='usertruenav'>  <select onChange={handleLanguageChange} value={language}>
                <option value="en">English</option>
                <option value="hy">Armenian</option>
            </select><p>{fullname}</p> <Button onClick={handleSignOut}>{translations[language].logout}</Button></div>
            : <Link to="/login"> <Button type='primary'>{translations[language].login}</Button></Link>
       } 
        
        </nav>

        <main >
      <Outlet />
      </main>

    </div>
  )
}

export default Intro
