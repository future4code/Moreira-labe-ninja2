import React, { Component } from 'react';
import { Container, Box, useStyles } from '../components/StyledCadastro';
import { Button, FormControl } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { createJob } from '../services/integracoes';
import { Alert, AlertTitle } from '@material-ui/lab';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const InputProps = {
  PaperProps: {
    style: {
      maxWidth: 10
    },
  },
};


export default class Cadastro extends Component {
  state = {
    formasDePagamento: [],
    inputTitulo: '',
    inputDescricao: '',
    inputValor: '',
    inputPrazo: '',
    messagem: {},
    mostrarAlerta: false
  }

  handleChange = (event) => {
    this.setState({formasDePagamento: event.target.value});
  }
  tituloChange = (event) => {
    this.setState({inputTitulo: event.target.value});
  }
  descricaoChange = (event) => {
    this.setState({inputDescricao: event.target.value});
  }
  valorChange = (event) => {
    this.setState({inputValor: event.target.value});
  }
  prazoChange = (event) => {
    this.setState({inputPrazo: event.target.value});
  }
  salvarMessagem = (num, data) =>{
    const objeto = {
      opcao: num,
      msg: data
    }
    this.setState({messagem: objeto})
  }

  criarServico = () => {
    const body = {
      "title": this.state.inputTitulo,
      "description": this.state.inputDescricao,
      "price": Number(this.state.inputValor),
      "paymentMethods": this.state.formasDePagamento,
      "dueDate": this.state.inputPrazo
    }
    createJob(body, this.salvarMessagem)
    this.setState({formasDePagamento: [],
                    inputTitulo: '',
                    inputDescricao: '',
                    inputValor: '',
                    inputPrazo: '',
                    messagem: {},
                    mostrarAlerta: true})
  }

  render() {
    const mostrarMessagem = () =>{
      if (this.state.messagem.opcao === 1){
        return(<Alert color='success' severity="success"
        onClose={() => {this.setState({mostrarAlerta: false})}}>
          <AlertTitle>Success</AlertTitle>
          {this.state.messagem.msg}
          </Alert>)
      } else if (this.state.messagem.opcao === 2) {
        return(<Alert color='error' severity="error" onClose={() => {this.setState({mostrarAlerta: false})}}>
          <AlertTitle>Error</AlertTitle>
          {this.state.messagem.msg}
          </Alert>)
      }
    }
    return (
    <Container>
      <Box>
        <h2>Cadastre o seu serviço</h2>
        <form>
          <TextField
            required
            value={this.state.inputTitulo}
            onChange={this.tituloChange}
            id="filled-titulo"
            label="Título"
            fullWidth
          />
          <TextField
            required
            value={this.state.inputDescricao}
            onChange={this.descricaoChange}
            id="filled-descricao"
            label="Descrição"
            fullWidth
          />
          <TextField
            required
            value={this.state.inputValor}
            onChange={this.valorChange}
            id="filled-preco"
            label="Preço"
            type="number"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            value={this.state.inputPrazo}
            onChange={this.prazoChange}
            id="filled-prazo" 
            label="Prazo" 
            type="date" 
            fullWidth
            InputLabelProps={{
              shrink: true,
            }} />
          <FormControl fullWidth>
            <InputLabel readOnly id="demo-customized-select-label">Formas de Pagamento</InputLabel>
            <Select
              multiple
              MenuProps={MenuProps}
              input={<Input inputProps={InputProps} />}
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={this.state.formasDePagamento}
              onChange={this.handleChange}
            >
              <MenuItem value={'CC'}>Cartão de Crédito</MenuItem>
              <MenuItem value={'CD'}>Cartão de Débito</MenuItem>
              <MenuItem value={'PIX'}>Pix</MenuItem>
              <MenuItem value={'PP'}>PayPal</MenuItem>
              <MenuItem value={'BO'}>Boleto</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Button onClick={this.criarServico} variant="contained" color="primary" endIcon={<SendIcon/>}>
          Cadastrar
        </Button>
      </Box>
      {this.state.mostrarAlerta && mostrarMessagem()}
    </Container>);
  }
}
