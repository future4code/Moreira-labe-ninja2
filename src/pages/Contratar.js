import React, { Component } from "react";
import {ContainerFiltros, ContainerBuscaValores, ContainerCards,} from "../components/PageContratarLayoutGeral";
import { getAllJobs } from "../services/integracoes";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CardProduto from "../components/CardProduto";
import Button from '@material-ui/core/Button';
import RotateRightIcon from '@material-ui/icons/RotateRight';

export default class Contratar extends Component {
  state = {
    listJobs: [],
    inputSelect: "",
    inputValMin: "",
    inputValMax: "",
    inputBusca: "",
    carrinho: [],
  };

  componentDidMount() {
    getAllJobs(this.atualizarJobs);
    this.buscarLocalStorage()
  }

  buscarLocalStorage = () => {
    const jobs = localStorage.getItem("carrinho")
    this.setState({ carrinho: JSON.parse(jobs) || [] })
  }

  atualizarJobs = (dados) => {
    this.setState({ listJobs: dados });
  };

  handleChange = (event) => {
    this.setState({ inputSelect: event.target.value });
  };

  valorMinChange = (event) => {
    this.setState({ inputValMin: event.target.value });
  };

  valorMaxChange = (event) => {
    this.setState({ inputValMax: event.target.value });
  };

  buscaChange = (event) => {
    this.setState({ inputBusca: event.target.value });
  };

  adicionarJobsCarrinho = (job) => {
    const jobNoCarrinho = this.state.carrinho.filter(item => {
      if (item.id === job.id) {
        return item
      }
    })
    if (jobNoCarrinho.length === 0) {
      const novoCarrinho = [...this.state.carrinho, job]
      this.setState({
        carrinho: novoCarrinho
      })
      localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
    }
    // this.somaValorTotal(job.price)
  }


  render() {
    const newJobs = () => {
      let novaLista = [...this.state.listJobs];
      if (this.state.inputValMin) {
        novaLista = novaLista.filter((item) => {
          return item.price >= this.state.inputValMin;
        });
      }

      if (this.state.inputValMax) {
        novaLista = novaLista.filter((item) => {
          return item.price <= this.state.inputValMax;
        });
      }

      if (this.state.inputBusca) {
        novaLista = novaLista.filter((item) => {
          return item.title.toLowerCase().includes(this.state.inputBusca.toLowerCase());
        });
      }
      if (this.state.inputSelect === 'crescente') {
        novaLista.sort((a, b) => { return a.price - b.price });
      } else if (this.state.inputSelect === 'decrescente') {
        novaLista.sort((a, b) => { return b.price - a.price });
      } else if (this.state.inputSelect === 'alfabetica') {
        novaLista.sort((a, b) => {
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else if (this.state.inputSelect === 'prazo') {
        novaLista.sort((a, b) => {
          const data1 = new Date(a.dueDate)
          const data2 = new Date(b.dueDate)
          return data1 - data2
        });
      }

      return novaLista.map((service) => {
        let desabilitado
        const jobNoCarrinho = this.state.carrinho.filter(item => {
          if (item.id === service.id) {
            return item
          }
        })
        if (jobNoCarrinho.length === 0){
          desabilitado = false
        } else {
          desabilitado = true
        }
        return (
          <div key={service.id}>
            <CardProduto
              titulo={service.title}
              preco={service.price}
              prazo={service.dueDate}
              id={service.id}
              job={service}
              disabled={desabilitado}
              carrinho={this.adicionarJobsCarrinho} />
          </div>
        );
      });
    };
    return (
      <div>
        <ContainerFiltros>
          <ContainerBuscaValores>
            <Box>
              <TextField
                value={this.state.inputValMin}
                onChange={this.valorMinChange}
                type="number"
                id="filled-basic"
                label="Valor mínimo"
                variant="filled"
                inputProps={{ style: { height: "1px" } }}
              />
            </Box>
            <Box>
              <TextField
                value={this.state.inputValMax}
                onChange={this.valorMaxChange}
                type="number"
                id="filled-basic"
                label="Valor máximo"
                variant="filled"
                inputProps={{ style: { height: "1px" } }}
              />
            </Box>
          </ContainerBuscaValores>
          <Box>
            <TextField
              value={this.state.inputBusca}
              onChange={this.buscaChange}
              type="text"
              id="filled-basic"
              label="Busca por nome"
              variant="filled"
              inputProps={{ style: { height: "1px" } }}
            />
          </Box>
          <Box className="BotaoSelect" sx={{ minWidth: 200 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Ordenação</InputLabel>
              <Select
                value={this.state.inputSelect}
                label="Ordem"
                onChange={this.handleChange}
              >
                <MenuItem value={'crescente'}>Valor crescente</MenuItem>
                <MenuItem value={'decrescente'}>Valor decrescente</MenuItem>
                <MenuItem value={'alfabetica'}>Título</MenuItem>
                <MenuItem value={'prazo'}>Prazo</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ContainerFiltros>

        <ContainerCards>
          {(this.state.listJobs.length !== 0) ? (newJobs()) : (<Button
            disabled
            variant="outlined"
            color="primary"
            startIcon={<RotateRightIcon />}
          >
            Carregando
          </Button>)}
        </ContainerCards>

      </div>
    );
  }
}
