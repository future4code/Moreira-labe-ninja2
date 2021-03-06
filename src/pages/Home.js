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
    height: 100%;

  .imgHome{
    border: 1px solid white;
    box-shadow: 1px 1px 4px black;
    width: 350px;
    max-width: 100vw;
    object-fit: cover; 
    background-color: #f5e6e8;       
  }


  .botaoHome{ 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:0 20px;     
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
          <Button className='botao' variant='contained'color='primary' onClick={this.props.nextCadastro}>Quero ser um Ninja</Button>          
          <Button className='botao' variant='contained'color='primary' onClick={this.props.nextContratar}>Contratar um Ninja</Button>
          </div>
         
        </ContainerHome>
      

    )
  }
}
