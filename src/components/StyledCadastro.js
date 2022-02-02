import styled from 'styled-components';
import { palette } from '../constants/colors';
import { makeStyles } from '@material-ui/core/styles';
import {theme} from '../constants/theme'

export const Container = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Box = styled.div`
  width: 400px;
  max-width: 100vw;
  border-radius: 10px;
  background-color: ${palette.info.main};
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  h2{
      color: ${palette.secondary.main};
  }
  select{
      max-width: 100%;
  }
  button{
      margin: 10px 0;
      color: white;
  }
  form {
      max-width: 100%;
  }
`

export const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: 5,
      minWidth: 120,
      maxWidth: 300,
    },
    noLabel: {
      marginTop: 5,
    },
  }));