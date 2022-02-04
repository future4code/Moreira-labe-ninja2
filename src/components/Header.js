import React, { Component } from 'react';
import styled from "styled-components"
import carrinho from '../assets/carrinho.jpg';
import home from '../assets/imgHome.jpg';



const Conteiner = styled.h2 `
display:flex;
background-color: #aaa1c8;
padding: 10px 20px;
justify-content:space-between;
align-items:center;
 

 .img{
     align-items:center;
    width:50px;
    border-radius:25px;
    background-color:#967aa1;
    margin:10px;
 }

`



export  default class Header extends Component{
    render(){
        return (
            <Conteiner>
                 <h2>Labeninjas</h2>
                 <span>
                 <img className='img' src={home} alt="imagem Home" />
                    <img className='img' src={carrinho} alt="imagem-carrinho" />
                 </span>
            </Conteiner>
        
        )
    }

}