import React from 'react';
import styled from 'styled-components';

const StyledNasa = styled.div`
  background-color
  h2 {
    font-size: 30px;
    color: #6d597a;
    background-color: #f7e1d7;
  }

  h3 {
    font-size: 25px;
    color: #4d908e;
  }

  p{
    color: #9a031e;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    color: #fb8500;
  }
  img {
    width: 90%;
    height: 70vh;
  }
`

const Nasa = (props) => {
  return (
    <StyledNasa className='website'>
      <h2>Today's Date: {props.info.date}</h2>
      <img src={props.info.url} />
      <h3>Title: {props.info.title}</h3>
      <p>{props.info.explanation}</p>
      <h4>Copyright: {props.info.copyright}</h4>
    </StyledNasa>
  )
}

export default Nasa;