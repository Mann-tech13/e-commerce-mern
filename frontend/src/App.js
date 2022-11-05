import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./components/Account/register"
import Login from "./components/Account/login"
import Home from "./components/Home/home"
import Contact from "./components/Contact/contact"
import './App.css';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
          } />
          <Route path="/home" element={<Home setLoginUser={setLoginUser} />} />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
