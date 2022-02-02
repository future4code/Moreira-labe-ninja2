import styled from 'styled-components';
import { palette } from '../constants/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .alertSuccess{
    background-color: ${palette.sucess.main}
  }
  .alertError{
    background-color: ${palette.error.main}
  }
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