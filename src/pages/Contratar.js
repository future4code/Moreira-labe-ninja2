import React, { Component } from 'react';
import BasicSelect, { BuscaPorTermos, BuscaValorMaximo, BuscaValorMinimo } from '../components/PageContratarLayoutGeral'
import { ContainerFiltros, ContainerBuscaValores, ContainerCards } from '../components/PageContratarLayoutGeral';

export default class Contratar extends Component {
  render() {
    return (
      <div>
        <ContainerFiltros>
          <ContainerBuscaValores>
            <BuscaValorMinimo />
            <BuscaValorMaximo />
          </ContainerBuscaValores>
          <BuscaPorTermos />
          <BasicSelect />
        </ContainerFiltros>

        <ContainerCards>
          <p>
            Título Card1 <br></br>
            Descrição<br></br>
            Preço<br></br>
            Prazo<br></br>
            Pagamento
          </p>
          <p>
            Título Card2 <br></br>
            Descrição<br></br>
            Preço<br></br>
            Prazo<br></br>
            Pagamento
          </p>
          <p>
            Título Card3 <br></br>
            Descrição<br></br>
            Preço<br></br>
            Prazo<br></br>
            Pagamento
          </p>
          <p>
            Título Card4 <br></br>
            Descrição<br></br>
            Preço<br></br>
            Prazo<br></br>
            Pagamento
          </p>

        </ContainerCards>

      </div>
    )
  }
}
