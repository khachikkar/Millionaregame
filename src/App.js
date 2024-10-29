
import { useEffect, useState } from 'react';
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

function App() {


const [isAuth, setIsAuth] = useState(true)





  return (
    <div className="App">
      <GameContext.Provider value={{isAuth, data}}>
      <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Intro />}>
            <Route path="/" element={ isAuth ? <Game /> : <Navigate to="/login" />} />
            <Route path="/game" element={ isAuth ? <Game /> : <Navigate to="/login" />} />
            <Route path="register" element={ isAuth ?  <Navigate to="/game" /> : <Register />} />
            <Route path="login" element={ isAuth ?  <Navigate to="/game" /> : <LogIn setIsAuth={setIsAuth} />} />

<Route path='/game/gameboard' element={<GameBoard />} />


          </Route>
        )
      )}
    />
    </GameContext.Provider>
    </div>
  );
}

export default App;
