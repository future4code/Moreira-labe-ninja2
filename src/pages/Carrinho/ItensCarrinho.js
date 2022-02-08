import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ItensRenderizados, InfoServicoPreco, AreaBotaoDeletar } from '../../components/LayoutCarrinho';


export default class ItensCarrinho extends React.Component {

  render() {

    return (
      <section>
        <ItensRenderizados>
          <InfoServicoPreco>
            <p>{this.props.tituloJob} </p>
          </InfoServicoPreco>
          <p>R$ {this.props.preco},00 </p>
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