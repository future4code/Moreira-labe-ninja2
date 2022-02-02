import { Button } from '@material-ui/core';
import Axios from 'axios';
import React, { Component } from 'react';

export default class Detalhes extends Component {
  state = {
    listaDetalhe: []
  }

  GetAllJobs = () => {
    Axios.get()
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
