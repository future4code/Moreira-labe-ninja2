import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ConteinerCard = styled.div`
  border: 1px solid #aaa1c8;
  width: 280px; 
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
  state = {
    desabilitado: this.props.disabled
  }

  carClick = () => {
    this.setState({desabilitado: true})
    this.props.carrinho(this.props.job)
  }

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
            onClick={()=>{this.props.nextDetails(this.props.id, this.state.desabilitado)}}
          >
            Detalhes
          </Button>
          {!this.state.desabilitado? <IconButton 
            color="secondary" 
            aria-label="add to shopping cart"
            onClick={this.carClick }>
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>:
            <IconButton
            disabled
            color="primary" 
            aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>}
        </BotaoCard>
      </ConteinerCard>
    )
  }
}
