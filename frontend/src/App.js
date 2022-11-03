import React, {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./components/Account/register"
import Login from "./components/Account/login"
import Home from "./components/Home/home"
import './App.css';

function App() {
  const [ loginUser, setLoginUser] = useState({})
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
              loginUser && loginUser._id ? <Home setLoginUser={loginUser}/> : <Login setLoginUser={setLoginUser}/>
            }/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
