import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { baseURL, headers } from "../constants/dadosIntegracoes";
import styled from "styled-components";
import axios from "axios";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import { getDetalhes } from "../services/integracoes";
import { Alert, AlertTitle } from "@material-ui/lab";
import { palette } from "../constants/colors";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa1c8;
  border-radius: 10px;
  width: 350px;
  max-width: 100vw;
  background-color: #f5e6e8;
  box-shadow: 1px 1px 4px black;
  margin: 80px auto;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .alertSuccess {
    background-color: ${palette.sucess.main};
  }

  p {
    padding-bottom: 5px;
    text-align: center;
  }
  ul{
    list-style-position: inside;
  }

  h1 {
    padding-bottom: 10px;
  }

  button {
    margin: 10px 0 5px 0;
  }
`;

export default class Detalhes extends Component {
  state = {
    oneJob: {},
    carrinho: [],
    desabilitado: this.props.disabled,
    mostrarAlerta: false,
  };

  componentDidMount() {
    getDetalhes(this.props.idJob, this.salvarJob);
    this.buscarLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.carrinho !== this.state.carrinho) {
      localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
    }
  }

  salvarJob = (data) => {
    this.setState({ oneJob: data });
  };

  buscarLocalStorage = () => {
    const jobs = localStorage.getItem("carrinho");
    this.setState({ carrinho: JSON.parse(jobs) || [] });
  };

  adicionarJobsCarrinho = (job) => {
    const jobNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === job.id) {
        return item;
      }
    });
    if (jobNoCarrinho.length === 0) {
      const novoCarrinho = [...this.state.carrinho, job];
      this.setState({
        carrinho: novoCarrinho,
      });
      localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
    }
    this.setState({ mostrarAlerta: true });
  };

  carClick = () => {
    this.setState({ desabilitado: true });
    this.adicionarJobsCarrinho(this.state.oneJob);
  };

  render() {
    const formasDePagamento =
      this.state.oneJob.paymentMethods &&
      this.state.oneJob.paymentMethods.map((payment) => {
        let pagamento;
        if (payment === "CC") {
          pagamento = "Cart??o de Cr??dito";
        } else if (payment === "CD") {
          pagamento = "Cart??o de D??bito";
        } else if (payment === "PP") {
          pagamento = "PayPal";
        } else if (payment === "BO") {
          pagamento = "Boleto";
        } else if (payment === "PIX") {
          pagamento = "PIX";
        }

        return <li>{pagamento}</li>;
      });

    return (
      <Div>
        <h1>{this.state.oneJob.title}</h1>
        {this.state.oneJob.title ? (
          <div>
            <p>
              <b>Valor:</b> R${this.state.oneJob.price},00
            </p>
            <p>
              <b>Prazo:</b> {this.state.oneJob.dueDate.slice(0, 10)}{" "}
            </p>
            <p>{this.state.oneJob.description}</p>
            <p>
              {" "}
              <b>Formas de Pagamento:</b> <ul>{formasDePagamento}</ul>{" "}
            </p>
          </div>
        ) : (
          <Button
            disabled
            variant="outlined"
            color="primary"
            startIcon={<RotateRightIcon />}
          >
            Carregando
          </Button>
        )}
        {this.state.desabilitado ? (
          <Button disabled variant="contained" color="primary">
            Adicionar ao Carrinho
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={this.carClick}>
            Adicionar ao Carrinho
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.nextContratar}
        >
          Voltar ?? Lista
        </Button>
        {this.state.mostrarAlerta && (
          <Alert
            className="alertSuccess"
            variant="filled"
            severity="success"
            onClose={() => {
              this.setState({ mostrarAlerta: false });
            }}
          >
            <AlertTitle>Success</AlertTitle>
            Servi??o adicionado ao carrinho!
          </Alert>
        )}
      </Div>
    );
  }
}
