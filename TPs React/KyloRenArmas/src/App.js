import React,{Fragment, Component} from 'react';
import KyloRenPreloader from './components/KyloRenPreloader';
import CargarArma from './components/CargarArma';
import './theme.css'
import ListaArma from './components/ListaArma';

class App extends Component {
    state = {
        armas: []
      }

    componentDidMount () {
        const listaArmas = localStorage.getItem('armas');
        if (listaArmas) {
          this.setState({
            armas: JSON.parse (listaArmas)
            })
        }
      }
    componentDidUpdate (){
        localStorage.setItem ('armas',JSON.stringify(this.state.armas))
      }
      
    cargarNuevaArma = data => {
        const armas = [...this.state.armas, data]
        this.setState({
          armas
        })
      }

    eliminarArma = id => {
        const armasCargadas = [...this.state.armas]
        const armas = armasCargadas.filter (arma => arma.id !== id)
        this.setState ({
            armas
        })
      }
    
    render (){
        return (
            <Fragment>
                <KyloRenPreloader/>
                <CargarArma
                    cargarNuevaArma = {this.cargarNuevaArma}
                />
                <ListaArma 
                    armas = {this.state.armas}
                    eliminarArma = {this.eliminarArma}
                />
            </Fragment>
        );
    }
}

export default App;