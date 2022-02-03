import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ItensRenderizados } from '../../components/LayoutCarrinho';


export default class ItensCarrinho extends React.Component {

  render() {

    return (
      <section>
        <ItensRenderizados>
          <p>Quantidade: {this.props.quantidade} x </p>
          <p>Serviço: {this.props.tituloJob} </p>
          <p>Preço: R$ {this.props.preco}</p>

          <button>
            <DeleteIcon
              color="primary"
              onClick={this.props.onClick}>
            </DeleteIcon>
          </button>

        </ItensRenderizados>
      </section>
    )
  }
}