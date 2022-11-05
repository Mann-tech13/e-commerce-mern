import React, { useEffect, useState } from 'react'
import Navigation from "../navigation/navigation"
import axios from "axios"
import "./home.css"

function Home({ setLoginUser }) {
  const [searchedProduct, setSearchedProduct] = useState("")
  const [value, setValue] = useState("")
  const [data, setData] = useState([])

  const url = `https://fakeapi.com/products/${searchedProduct}`
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${searchedProduct}`)
      .then(res => res.json())
      .then(json => setData(json))

  }, [url])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = (e) => {
    if(value == ""){
      setSearchedProduct("")
    }
    else{
      setSearchedProduct("category/" + value)
    }
  }

  return (
    <div>
      <Navigation />
      <div className='search-div'>
        <input type="text" className="search-area" onChange={handleChange} />
        <input type="submit" className="search-btn" value="🔎" onClick={handleClick} />
      </div>
      <div className="product_div">
        {
          data.map((value) => {
            return (

              <div className="product">
                <img key={value.id} src={value.image} alt="" className="product_images" />
                <div className="rating">Rating: {value.rating.rate}/5</div>
                <h3><div className="title">{value.title}</div></h3>
                <hr />
                <div className="price">Price: ${value.price}</div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home