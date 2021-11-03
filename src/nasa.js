import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App () {
  const [nasaData, setNasaData] = useState('');


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=VOqtIGmTdFGtlmFKl66visR18itZOWJygOTgtFKI`)
    .then(res => {
      setNasaData(res.data);
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className='information'>
      <h2>The date is {nasaData.date}</h2>
      <img src={nasaData.hdurl} alt='space brought to you by Nasa' />
      <h2>{nasaData.title}</h2>
      <p>Explanation: {nasaData.explanation}</p>
      <p>Copyright {nasaData.copyright}</p>
    </div>
  )
}