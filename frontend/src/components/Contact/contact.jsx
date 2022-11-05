import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Contact_Image from "../../images/contact_svg.svg"
import Navigation from "../navigation/navigation"
import "./contact.css"

function Contact() {
  let navigate = useNavigate()
  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    reason: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setContactUser({
      ...contactUser,
      [name]: value
    })
  }

  const contactDetails = () => {
    const { name, email, reason } = contactUser
    if (name || email || reason) {
      axios.post("http://localhost:8000/contact", contactUser)
        .then(res => {
          alert(res.data.message)
          navigate("/contact")
        })

    }
    else {
      alert("false")
    }
  }
  return (
    <div className="">
      <Navigation/>
      <div className="connectus">Lets get Connected</div>
      <div className="container">
        {/* {console.log(contactUser)} */}

        <img src={Contact_Image} alt="" className="contact-svg" />
        <div className="form">
          <div className="name_div"><input className="name" type="text" name="name" value={contactUser.name} placeholder='Enter your Name' onChange={handleChange} /></div>
          <div className="email_div"><input className="email" type="email" name="email" value={contactUser.email} placeholder='Enter your Email' onChange={handleChange} /></div>
          <div className="message_div"><textarea className="reason" name="reason" value={contactUser.reason} rows="5" cols="60" placeholder='Message' onChange={handleChange} /></div>
          <div className="submit_div"><input className="submit" type="button" value="submit" onClick={contactDetails} /></div>
        </div>
      </div>
    </div>
  )
}

export default Contact