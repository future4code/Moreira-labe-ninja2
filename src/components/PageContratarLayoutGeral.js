import styled from 'styled-components';
import { palette } from '../constants/colors'

export const ContainerFiltros = styled.div`
display: flex;
height: auto;
justify-content: space-between;
align-items: center;
margin: 3px 15px;
`

export const ContainerBuscaValores = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerCards = styled.div`
display: flex;
flex-wrap: wrap;
margin: 20px 10px;
justify-content: center;
text-align: center;
align-items: center;

p{ 
    margin: 10px 10px;
    border-radius: 5px;
}
`
