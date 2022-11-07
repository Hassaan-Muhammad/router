
import './App.css';
import { Routes, Route, Link ,Navigate } from "react-router-dom";
import { useState } from 'react';
import Home from "./componets/home/home";
import About from "./componets/about/about";
import Login from './componets/login/login';
import Signup from './componets/signup/signup';


function App() {

  const [isLogin, setisLogin] = useState(false)

  return (
    <div>

      <button onClick={() => { (setisLogin(!isLogin)) }}>Toggle login test</button>

      {
        (isLogin) ?
          <ul>
            <li> <Link to={"/"} >Home</Link></li>
            <li> <Link to={"about"} >About</Link></li>
          </ul>
          :
          <ul>
            <li> <Link to={"login"} >Login</Link></li>
            <li> <Link to={"signup"} >signup</Link></li>
          </ul>
      }


      {(isLogin)  ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to={"/"} replace={true} />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to={"/"} replace={true} />} />
        </Routes>
      }





    </div>
  );
}

export default App;
