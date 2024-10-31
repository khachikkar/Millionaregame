
import {  useState, useEffect, useCallback } from 'react';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";
import LogIn from './pages/auth/login';
import Register from './pages/auth/register';
import Intro from './pages/intro';
import Game from './pages/game';
import { GameContext } from './context/context';
import GameBoard from './pages/gameboard';

import { data } from './fakeserver/data';

import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './services/firebase';
import {doc, getDoc} from "firebase/firestore"


function App() {


const [isAuth, setIsAuth] = useState(false)

const [userProfileInfo, setUserProfileInfo] = useState({})


const handleGetUserData = useCallback( async (uid)=>{
  const docRef = doc(db, "regusers", uid) // vercnum enq hamapatasxan uid ov datan
    const response = await getDoc(docRef)
      if(response.exists()){
        // console.log(response.data())
        setUserProfileInfo(response.data())
      }
}, [])

useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    user?.uid && handleGetUserData(user.uid)
    
// console.log(user)

    // setLoading(false)
    setIsAuth(Boolean(user))
    // console.log(user, ">>>>>>")
  })
},[handleGetUserData])



  return (
    <div className="App">
      <GameContext.Provider value={{isAuth, data, setIsAuth, userProfileInfo, handleGetUserData}}>
      <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Intro />}>
            <Route path="/" element={ isAuth ? <Game /> : <Navigate to="/login" />} />
            <Route path="register" element={ isAuth ?  <Navigate to="/game" /> : <Register />} />
            <Route path="login" element={ isAuth ?  <Navigate to="/game" /> : <LogIn setIsAuth={setIsAuth} />} />

            <Route path="/game" element={ isAuth ? <Game /> : <Navigate to="/login" />} />


            <Route path='/game/gameboard' element={isAuth ? <GameBoard /> : <Navigate to="/login" />} />
            

          </Route>
        )
      )}
    />
    </GameContext.Provider>
    </div>
  );
}

export default App;
