import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './login.css'

function Login({setLoginUser}) {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const login = () => {
    axios.post("http://my-e-commerce-mern.herokuapp.com/login", user)
      .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigate("/")
      })
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange} />
      <input type="password" name="password" value={user.password} placeholder='Enter your password' onChange={handleChange} />
      <div className="button" onClick={login} >Login</div>
      <div className="">or</div>
      <div className="button" onClick={() => navigate("/register")}>Register</div>
    </div>
  )
}

export default Login