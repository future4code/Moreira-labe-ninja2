import styled from "styled-components";
import { palette } from '../constants/colors';

export const Container = styled.div`
    /* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    } */
    display: flex;
    flex-direction: column;
    /* min-width: 100vw; */
    max-width: 100vw;
    height: 100vh;
`

export const Body = styled.div`
    flex-grow: 1;
`