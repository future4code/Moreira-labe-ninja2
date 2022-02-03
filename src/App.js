import React from 'react'
import { AppContainer } from './components/AppContainer'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './constants/theme'
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';
import Home from './pages/Home';
import Contratar from './pages/Contratar';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho/Carrinho';
import Detalhes from './pages/Detalhes';
import Footer from './components/Footer';
import "./geral.css";
import {Container, Body} from './components/styleGeral'


//Para instalar o Desing Material: npm install @material-ui/core
//Para instalar o Desing Material: npm install @material-ui/icons

class App extends React.Component {
	state = {
		page: 'carrinho'		
	}
	
nextCadastro = () => {
	this.setState({page: 'cadastro'})
}
nextContratar = () => {
	this.setState({page: 'contratar'})
}

	render() {
		const pagina = () => {
			switch (this.state.page) {
				case 'home':
					return <Home nextCadastro={this.nextCadastro} nextContratar={this.nextContratar}/>
				case 'contratar':
					return <Contratar />
				case 'cadastro':
					return <Cadastro />
				case 'carrinho':
					return <Carrinho nextContratar={this.nextContratar}/>
				case 'detalhes':
					return <Detalhes />
				default:
					return <Home />
			}
		}

		return (
			<ThemeProvider theme={theme}>
				<Container>
					<Body>
						{pagina()}
					</Body>
					<Footer />
				</Container>
			</ThemeProvider>

		)
	}
}

export default App
