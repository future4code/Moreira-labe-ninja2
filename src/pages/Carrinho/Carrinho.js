import React, { Component } from 'react';
import { ContainerGeral, ContainerTotalContratar, InfosGerais, ListaJobs } from '../../components/LayoutCarrinho';
import { JobsTempFakes } from '../../constants/TempJobsFakes';
import ItensCarrinho from './ItensCarrinho';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


export default class Carrinho extends React.Component {

    state = {
        carrinho: [],
        valorTotal: 0,
    }

    componentDidMount() {
        this.buscarLocalStorage()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.carrinho !== this.state.carrinho) {
            localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
        }
    }

    buscarLocalStorage = () => {
        const jobs = localStorage.getItem("carrinho")
        this.setState({ carrinho: JSON.parse(jobs) || [] })
    }

    removerJobsDoCarrinho = (job) => {
        if (window.confirm("Deseja excluir este serviço?")) {
            const novoCarrinho = this.state.carrinho.filter(item => {
                if (item.id !== job.id) {
                    return item
                }
            })
            this.setState({
                carrinho: novoCarrinho
            })

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

    zerarCarrinho = () => {
        alert('Obrigado por contratar nossos serviços.')
        this.setState({ carrinho: [] })
    }

    render() {
        const jobsDoCarrinho = this.state.carrinho.map((job) => {
            return <ItensCarrinho
                key={job.id}
                tituloJob={job.title}
                preco={job.price}
                onClick={() => this.removerJobsDoCarrinho(job)}
            />
        })

        const total = this.state.carrinho.reduce(
            ((total, item) => { return total + item.price }), 0)

        return (
            <ContainerGeral>
                <InfosGerais>
                    <ListaJobs>
                        {jobsDoCarrinho}
                    </ListaJobs>
                    <ContainerTotalContratar>
                        {total === 0 ? <h1>
                            Seu carrinho está vazio. Acesse nossos serviços!
                            </h1> : <p><b>Total</b>: R$ {total}</p>}
                        {/* {total !==0 && <p><b>Total</b>: R$ {total}</p>} */}
                        <Button
                            className='BotaoVoltar'
                            variant='contained'
                            color='primary'
                            onClick={this.props.nextContratar}>
                            Serviços
                        </Button>
                        {total !==0 && 
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={this.zerarCarrinho}
                        >
                            Contratar
                        </Button>
                        }
                    </ContainerTotalContratar>
                </InfosGerais>
            </ContainerGeral>
        )
    }
} 
