import React from 'react';
import styled from 'styled-components';

const StyledNasa = styled.div`
  padding: 2%;

  h2 {
    font-size: 30px;
    color: #6d597a;
  }

  h3 {
    font-size: 25px;
    color: #4d908e;
  }

  p{
    color: #9a031e;
    width: 70%;
    margin-left: 15%;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    color: #fb8500;
  }
  img {
    width: 90%;
    height: 70vh;
    box-shadow: 12px 12px 2px 1px rgba(203, 200, 209, 0.8);
  }
`

const Nasa = (props) => {
  return (
    <StyledNasa className='website'>
      <div>
      <h2>Today's Date: {props.info.date}</h2>
      <img src={props.info.url} />
      <h3>Title: {props.info.title}</h3>
      <p>{props.info.explanation}</p>
      <h4>Copyright: {props.info.copyright}</h4>
      </div>
    </StyledNasa>
  )
}

export default Nasa;