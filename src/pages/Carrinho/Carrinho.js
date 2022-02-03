import React, { Component } from 'react';
import Styled from 'styled-components';
import { JobsTempFakes } from '../../constants/TempJobsFakes';
import ItensCarrinho from './ItensCarrinho';

const ContainerSacola = Styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 16px;
`

const InfoGeralSacola = Styled.section`
  border: 1px solid black;
  width: 300px;
  padding: 10px;
  font-family: arial;
`

const ListaProdutos = Styled.section`
  display: grid;
  gap: 10px;
  text-align: left;
`

export default class Carrinho extends React.Component {

    state = {
        jobs: JobsTempFakes,
        carrinho: [],
        valorTotal: 0
    }

    adicionarJobsCarrinho = (job) => {
        if (window.confirm("Deseja excluir este serviço?")) {
            const jobNoCarrinho = this.state.carrinho.filter(item => {
                if (item.id === job.id) {
                    return item
                }
            })
            if (jobNoCarrinho.length === 0) {
                job.quantidade = 1
                const novoCarrinho = [...this.state.carrinho, job]
                this.setState({
                    carrinho: novoCarrinho
                })
            } else {
                const novoCarrinho = this.state.carrinho.map(item => {
                    if (job.id === item.id && item.quantidade >= 1) {
                        return { ...item, quantidade: item.quantidade + 1 }
                    } else {
                        return item
                    }
                })
                this.setState({
                    carrinho: novoCarrinho
                })
            }
            this.somaValorTotal(job.price)
        } else {
            alert('Nenhum serviço foi adicionado')
        }
    }


    removerJobsDoCarrinho = (job) => {
        if (window.confirm("Deseja excluir este serviço?")) {
            if (job.quantidade === 1) {
                const novoCarrinho = this.state.carrinho.filter(item => {
                    if (item.id !== job.id) {
                        return item
                    }
                    this.setState({
                        carrinho: novoCarrinho
                    })
                })
            } else {
                const novoCarrinho = this.state.carrinho.map(item => {
                    if (job.id === item.id && item.quantidade >= 1) {
                        return { ...item, quantidade: item.quantidade - 1 }
                    } else {
                        return item
                    }
                })
                this.setState({ carrinho: novoCarrinho })
            }
            this.removeValorTotal(job.price)
        } else {
            alert('Nenhum serviço foi excluído')
        }
    }

    somaValorTotal = (preco) => {
        this.setState({
            valorTotal: this.state.valorTotal + preco
        })
    }

    removeValorTotal = (preco) => {
        this.setState({
            valorTotal: this.state.valorTotal - preco
        })
    }

    render() {
        const jobsDoCarrinho = this.state.jobs.map((job) => {
            return <ItensCarrinho
                key={job.id}
                quantidade={job.quantidade}
                tituloJob={job.title}
                onClick={() => this.removerJobsDoCarrinho(job)}

            />
        })
        return (
            <ContainerSacola>
                <InfoGeralSacola>
                    <h3>Carrinho:</h3>
                    <p>Total: R$ {this.state.valorTotal}</p>
                    <ListaProdutos>
                        {jobsDoCarrinho}
                    </ListaProdutos>
                </InfoGeralSacola>
            </ContainerSacola>
        )
    }
} 