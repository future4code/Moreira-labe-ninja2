import React, { Component } from 'react';

export default class Filtros extends Component {
    state = {
        lista: [],
        minimo: '',
        maximo: '',
        busca: ''
    }

    filtrarPorValores = () => {
        const novaListaMin = this.state.lista.filter((item)=>{
            return item.price > this.state.minimo
        })

        const novaListaMax = novaListaMin.filter((item)=>{
            return item.price < this.state.maximo
        })

        const novaListaBusca = novaListaMax.filter((item)=>{
            return item.title.includes(this.state.busca)
        })
        this.setState({lista: novaListaBusca})
    }

    render() {
        return (
        <div>

        </div>);
    }
}
