import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { baseURL, headers } from '../constants/dadosIntegracoes';
import axios from 'axios';



export default class Detalhes extends Component {
  getDetalhes = () => {
    const urlGetJob = `jobs/${this.props.idJob}`
    axios.get(baseURL + urlGetJob, headers)
      .then((res) => {
        console.log(res);
      })
  }

  componentDidMount() {
    this.getDetalhes();
  }


  render() {
    return (
      <div>
        <h1>Título do Serviço</h1>
        <p>Formas de pagamento aceitas</p>
        <p>data e valor</p>
        <p>Descrição do Serviço</p>
        <Button>Adicionar ao Carrinho</Button>
        <Button>Voltar à Lista</Button>
      </div>
    )
  }
}
