import React from 'react';
import Styled from 'styled-components';


const CadaProduto = Styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  font-family: arial;
  
  .QuantidadeNomeProdutos{
    margin: 0;
    font-style: bold;
  }
  .BotaoRemover{
    width: 80px;
    border: 2px solid gray;
    border-radius: 5px;
    font-family: arial;
    :hover{border: 2px solid black};
    :active{background-color: white};
  }
`

export default class ItensCarrinho extends React.Component {

    render() {

        return <div>
            <CadaProduto>
                <p>{this.props.quantidade} x </p>
                <p>{this.props.tituloJob} </p>
                <button onClick={this.props.onClick}> Remover </button>
            </CadaProduto>

        </div>
    }
}