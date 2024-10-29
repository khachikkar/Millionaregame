
import { useState } from 'react';
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


function App() {


const [isAuth, setIsAuth] = useState(true)



  return (
    <div className="App">
      <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Intro />}>
            <Route path="game" element={ isAuth ? <Game /> : <Navigate to="/login" />} />
            <Route path="register" element={ isAuth ?  <Navigate to="/game" /> : <Register />} />
            <Route path="login" element={ isAuth ?  <Navigate to="/game" /> : <LogIn setIsAuth={setIsAuth} />} />
          </Route>
        )
      )}
    />
    </div>
  );
}

export default App;
