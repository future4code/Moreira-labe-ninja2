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

const BotaoCard = styled.div`
display: flex;
justify-content: space-evenly;

.botao{
  margin: 10px;
}
`
export default class CardProduto extends Component {

  render() {
    return (
      <ConteinerCard>
        <h2>{this.props.titulo}</h2>
        <p>Preço: R$ {this.props.preco},00</p>
        <p>Prazo: {this.props.prazo.slice(0, 10)}</p>
        <BotaoCard>
          <Button
            className="botao"
            variant='contained'
            color='primary'
            onClick={() => this.props.detalhesId(this.props.id)}>
            Detalhes
          </Button>
          <Button
            className="botao"
            variant='contained'
            color='primary'
            onClick={() => { this.props.carrinho(this.props.job) }}>
            Carrinho
          </Button>
        </BotaoCard>
      </ConteinerCard>
    )
  }
}
