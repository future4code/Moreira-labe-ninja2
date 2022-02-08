import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #aaa1c8;
  padding: 10px 20px;
`;

const Img = styled.img`
  width:100%;
`;

const A = styled.a`
  margin: 0 15px; 
  text-decoration: none;
`


export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <h2>Labeninjas</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
          <IconButton color="secondary" component="span">
            <TwitterIcon fontSize='large' />
          </IconButton>
          </a>
          <a href="https://facebook.com/" target="_blank">
          <IconButton color="secondary" component="span">
            <FacebookIcon fontSize='large'/>
          </IconButton>
          </a>
          <a href="https://instagram.com/" target="_blank">
          <IconButton color="secondary" component="span">
            <InstagramIcon fontSize='large'/>
          </IconButton>
          </a>
        </span>
      </Container>
    )
  }
}