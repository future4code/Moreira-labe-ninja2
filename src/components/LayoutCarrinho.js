import Styled from 'styled-components';
import { palette } from '../constants/colors'

export const ItensRenderizados = Styled.div`
display: flex;
width: 80vw;
height: 5vh;
border: 1px solid gray;
padding: 0px 30px;
border-radius: 5px;
justify-content: space-between;
align-items: center;
background-color: ${palette.info.main};

button{
  display: flex;
  justify-content: center;
  align-items:center;
  width: 20px;
  border:none;
  background-color: inherit;
  :hover{cursor:pointer; background-color: #d4cbcb; border-radius: 3px;}
}
`
export const InfoServicoPreco = Styled.section`
display: flex;
width: 40em;
`

export const BotaoVoltar = Styled.button`
margin-top: 50px;
`

export const ContainerGeral = Styled.section`
display: flex;
justify-content: center;
margin-top: 100px;
`

export const InfosGerais = Styled.section`
width: auto;
padding: 10px;
`

export const ContainerTotalContratar = Styled.section`
display: flex;
justify-content: space-around;
padding-top: 80px;

p{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid gray;
  background: ${palette.info.main};
}

button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid gray;
  background: ${palette.primary.main};
}

h1{
  display: flex;
  position: absolute;
  margin-top: -100px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 400px;

}
`

export const ListaJobs = Styled.section`
display: flex;
flex-direction: column;
gap: 10px;
`