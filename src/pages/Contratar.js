import React, { Component } from 'react';
import BasicSelect, { BuscaPorTermos, BuscaValorMaximo, BuscaValorMinimo } from '../components/PageContratarLayoutGeral'
import { ContainerFiltros, ContainerBuscaValores, ContainerCards } from '../components/PageContratarLayoutGeral';
import { Button } from '@material-ui/core';
import { getAllJobs } from '../services/integracoes';


export default class Contratar extends Component {
  state = {
    listJobs: []
  }

  componentDidMount() {
    getAllJobs(this.atualizarJobs)
  }

  atualizarJobs = (dados) => {
    this.setState({ listJobs: dados })
  }



  render() {
    //console.log(this.state.listJobs)
    const newJobs = this.state.listJobs.map((service) => {
      console.log(service.id);
      return (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p>{service.price}</p>
          <p>{service.paymentMethods}</p>
          <button onClick={() => this.props.setDetailsId(service.id)}>Ver Detalhes</button>
        </div>
      )
    })
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
          {newJobs}
          {/* <p>
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
          </p> */}

        </ContainerCards>

      </div>
    )
  }
}
