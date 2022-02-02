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

// const classe = useStyles()

export default class Cadastro extends Component {
  state = {
    formaDePagamento: []
  }

  handleChange = (event) => {
    this.setState({formaDePagamento: event.target.value});
  }

  render() {
    return (
    <Container>
      <Box>
        <h2>Cadastre o seu serviço</h2>
        <form>
          <TextField
            required
            id="filled-titulo"
            label="Título"
            fullWidth
          />
          <TextField
            required
            id="filled-descricao"
            label="Descrição"
            fullWidth
          />
          <TextField
            required
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
              value={this.state.formaDePagamento}
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
        <Button variant="contained" color="primary" endIcon={<SendIcon/>}>
          Cadastrar
        </Button>
      </Box>
    </Container>);
  }
}
