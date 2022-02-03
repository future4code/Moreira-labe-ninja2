import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ConteinerCard = styled.div`
    border: 1px solid #aaa1c8;
    width: 400px; 
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between ;
    align-items:left;
    margin: 20px;
    box-shadow: 1px 1px  4px black;
    background-color: #f5e6e8;
    padding:10px ;
     
`

const BotaoCard =styled.div`
display: flex;
flex-direction: row;

.botao{
  margin: 10px;
  
  
}

`
export  default class CardProduto extends Component {
    render() {
      return (
        <ConteinerCard>
             <h2>web design</h2>
             <p>preço</p>
             <p>prazo</p>
             <BotaoCard> 
             <Button className="botao" variant='contained'color='primary'>ver detalhes</Button>
             <Button className="botao" variant='contained'color='primary'>adicionar carrinhos</Button>
             </BotaoCard>
        </ConteinerCard>
      )
    }
  }
  