import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { baseURL, headers } from '../constants/dadosIntegracoes';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa1c8;
  border-radius: 10px;
  width: 450px;
  height: 350px;
  background-color: #f5e6e8;
  box-shadow: 1px 1px 4px black;
  margin: 80px auto;
  justify-content: center;
  align-items: center;



  p{
    padding-bottom: 5px;
    text-align: center;
  }

  h1{
    padding-bottom: 10px;
  }

  button{
    margin: 10px 0 5px 0;
  }
`


export default class Detalhes extends Component {
  state = {
    oneJob: {}
  }

  getDetalhes = () => {
    const urlGetJob = `jobs/${this.props.idJob}`
    axios.get(baseURL + urlGetJob, { headers })
      .then((res) => {
        console.log("jobs", res.data);
        this.setState({ oneJob: res.data });
      })
  }

  componentDidMount() {
    this.getDetalhes();
  }



  render() {
    // console.log("estado2", this.state.oneJob.paymentMethods);

    const formasDePagamento = this.state.oneJob.paymentMethods && this.state.oneJob.paymentMethods.map((payment) => {
      return (
        <p>
          {payment}
        </p>
      )
    })

    return (

      <Div>
        <h1>{this.state.oneJob.title}</h1>
        <p> Forma de Pagamento: {formasDePagamento} </p>
        <p>Prazo: {this.state.oneJob.dueDate?.slice(0, 10)} Valor: R${this.state.oneJob.price},00 </p>
        <p>{this.state.oneJob.description}</p>
        <Button variant='contained' color='primary'> Adicionar ao Carrinho</Button>
        <Button variant='contained' color='primary' onClick={this.props.nextContratar}>Voltar à Lista</Button>
      </Div>
    )
  }
}
