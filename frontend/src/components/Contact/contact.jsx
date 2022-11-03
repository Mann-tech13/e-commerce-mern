import React, {useState} from 'react'

function Contact() {
  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    reason: "",
  })
  const handleChange = () => {
    console.log("Hi");
  }
  return (
    <div>
      <div className=""><input type="text" name="name" value={contactUser.name} placeholder='Enter your Name' onChange={handleChange} /></div>
      <div className=""><input type="password" name="email" value={contactUser.email} placeholder='Enter your Email' onChange={handleChange} /></div>
      <div className=""><textarea name="reason" id="" cols="30" rows="5" value={contactUser.reason}></textarea></div>
      <div className=""><input type="button" value="submit" /></div>
    </div>
  )
}

export default Contact