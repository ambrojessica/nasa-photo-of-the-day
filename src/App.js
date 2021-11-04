import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Nasa from "./Nasa";
import styled from 'styled-components';


function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=VOqtIGmTdFGtlmFKl66visR18itZOWJygOTgtFKI`)
        .then(res => {
          setInfo(res.data);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      }, [])

      const StyledApp = styled.div`
      h1 {
      background-image: url('https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2707&q=80');
      background-size: cover;
      background-position: center ;
	background-attachment: fixed;
  background-repeat: no-repeat;
      padding: 3%;
      color: #fefee3;
      }
      `

  return (
    <StyledApp>
    <div className="App">
      <h1>
        Picture of the Day! <span role="img" aria-label='go!'>🚀</span>
      </h1>
      <Nasa info={info} />
    </div>
    </StyledApp>
  );
}

export default App;
 