import React from "react";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Conteiner = styled.h2`
  display: flex;
  background-color: #aaa1c8;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
    width: 100%;
`;

class Header extends React.Component {
  render() {
    return (
      <Conteiner>
        <h2>Labeninjas</h2>
        <span>
          <IconButton onClick={this.props.nextHome} color="secondary" component="span">
            <HomeIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={this.props.nextCarrinho} color="secondary" component="span">
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </span>
      </Conteiner>
    );
  }
}

export default Header;
