import React from 'react'
import { AppContainer } from './components/AppContainer'
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from './constants/theme'
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';
import Home from './pages/Home';
import Contratar from './pages/Contratar';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';

//Para instalar o Desing Material: npm install @material-ui/core
//Para instalar o Desing Material: npm install @material-ui/icons

class App extends React.Component {
	state = {
		page: 'home'
	}


	render(){
		const pagina = () => {
			switch(this.state.page){
				case 'home':
					return <Home />
				case 'contratar':
					return <Contratar />
				case 'cadastro':
					return <Cadastro />
				case 'carrinho':
					return <Carrinho />
				case 'detalhes':
					return <Detalhes />
				default:
					return <Home />
			}
		}

		return (
		<ThemeProvider theme={theme}>
		<AppContainer />
		{pagina()}
		</ThemeProvider>
			
		)}
}

export default App
