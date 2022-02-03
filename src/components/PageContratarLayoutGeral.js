import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { palette } from '../constants/colors'

export default function BasicSelect() {
    const [ordem, setOrdem] = React.useState('');

    const handleChange = (event) => {
        setOrdem(event.target.value);
    };

    return (
        <Box className="BotaoSelect" sx={{ minWidth: 200 }}>
            <FormControl fullWidth size="small">
                <InputLabel>Ordenação</InputLabel>
                <Select
                    value={ordem}
                    label="Ordem"
                    onChange={handleChange}
                    >
                    <MenuItem value={1}>Valor crescente</MenuItem>
                    <MenuItem value={2}>Valor decrescente</MenuItem>
                    <MenuItem value={3}>Título</MenuItem>
                    <MenuItem value={4}>Prazo</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export function BuscaPorTermos() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
            type='text' 
            id="filled-basic" 
            label="Busca por termos"
            variant="filled" 
            inputProps={{ style: { height: "1px",},}}/>
        </Box>
    );
}

export function BuscaValorMaximo() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField type='number'
            id="filled-basic"
            label="Valor máximo"
            variant="filled" 
            inputProps={{ style: { height: "1px",},}}/>
        </Box>
    );
}

export function BuscaValorMinimo() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
            type='number' 
            id="filled-basic" 
            label="Valor mínimo" 
            variant="filled" 
            inputProps={{ style: { height: "1px",},}} />
        </Box>
    );
}



export const ContainerFiltros = styled.div`
display: flex;
height: auto;
justify-content: space-between;
align-items: center;
margin: 3px 15px;

.TextField{
    background-color: red;
}

input{
    background-color: ${palette.primary.main};
    border-radius: 4px;
    margin-top: 2px;
}

.BotaoSelect{
    background-color: ${palette.primary.main};
    border-radius: 4px;
    margin-top: 2px; 
    height: 47px;
}
`

export const ContainerBuscaValores = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin: 50px 15px;
justify-content: center;
text-align: center;
align-items: center;

p{
    border: 1px solid black;
    margin: 10px 10px;
    border-radius: 5px;
}
`
