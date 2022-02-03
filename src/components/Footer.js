import React from 'react';
import styled from 'styled-components';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:absolute;
	bottom:0;
  width: 100%;
  background-color: #aaa1c8;
  padding: 10px 20px;
`;

const Img = styled.img`
  width:50px;
`;

const A = styled.a`
  margin-left: 20px; 
  text-decoration: none;
`


export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <h2>Labeninjas</h2>
        <span>
          <A href="https://twitter.com/" target="_blank"><Img src={twitter} alt="logo twitter" /></A>
          <A href="https://facebook.com/" target="_blank"><Img src={facebook} alt="logo facebook" /></A>
          <A href="https://instagram.com/" target="_blank"> <Img src={instagram} alt="logo instagram" /> </A>
        </span>
      </Container>
    )
  }
}