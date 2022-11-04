import React from 'react'
import axios from "axios"

function home({ setLoginUser }) {

  const options = {
    method: 'GET',
    url: 'https://real-time-product-search.p.rapidapi.com/search',
    params: {q: 'iPhone', country: 'us', language: 'en'},
    headers: {
      'X-RapidAPI-Key': '5182f24adcmsh95a5bfed385303dp104125jsnd9ca2b9a7921',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>home</div>
  )
}

export default home