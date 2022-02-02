import React, { Component } from 'react';
import ninja from '../assets/labeninjas2.png';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const ContainerHome = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;

  .imgHome{
    border: 1px solid white;
    box-shadow: 1px 1px 4px black;
    height: 650px;
    width: 700px;
    object-fit: cover; 
    background-color: #f5e6e8;       
  }


  .botaoHome{ 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:20px;     
  }

  .botao{
    margin: 10px;
  }
`

export default class Home extends Component {

  render() {
    return( 
        <ContainerHome>
          <img className='imgHome' src={ninja} alt='imagem ninja'/>
          <div className='botaoHome'>
          <Button className='botao' variant='contained'color='primary'>Quero ser um Ninja</Button>          
          <Button className='botao' variant='contained'color='primary'>Contratar um Ninja</Button>
          </div>
         
        </ContainerHome>
      

    )
  }
}
