import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {
    arma: {
        nombre: '',
        tipo: '',
        soldado: '',
        dia: '',
        hora: '',
        rango: '',
        detalle: ''
    },
    error: false
}

class CargarArma extends Component {
    
    state = {...stateInicial}

    handleChange = e => {
        this.setState({
            arma: {
                ...this.state.arma,
                [e.target.name] : e.target.value
            }
        })

    }

    handleSubmit = e => {
        e.preventDefault ()
        const {nombre,tipo,soldado,dia,hora,rango,detalle} = this.state.arma
        if (nombre === '' || tipo === '' || soldado === '' || dia === '' || hora === '' || rango === '' || detalle === ''){
            this.setState ({
                error:true
            })
            return;
        }

        const nuevaArma = {...this.state.arma};
        nuevaArma.id = uuid ();

        this.props.cargarNuevaArma(nuevaArma)

        this.setState ({
            ...stateInicial
        })
    }

    render (){
        const {error} = this.state;
        return (
            <div className ="card text-white bg-dark mb-3">
                <div className = "card-body">
                    <h2 className = "card-title text-center mb-5">
                        Formulario para cargar armas defecutosas
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios </div> : null}

                <form
                    onSubmit = {this.handleSubmit}
                >
                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            Arma defecutosa
                        </label>    
                        <div className = "col-sm-8 col-lg-10">
                            <input type="text" 
                            className = "form-control"
                            placeholder = "Nombre del arma"
                            name = "nombre"
                            onChange = {this.handleChange}
                            value = {this.state.arma.nombre}
                            />
                        </div>
                    </div>  

                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            Tipo del arma
                        </label>    
                        <div className = "col-sm-8 col-lg-10">
                            <input type="text" 
                            className = "form-control"
                            placeholder = "Tipo del arma"
                            name = "tipo"
                            onChange = {this.handleChange}
                            value = {this.state.arma.tipo}
                            />
                        </div>
                    </div>  

                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            ID del soldado
                        </label>    
                        <div className = "col-sm-8 col-lg-4">
                            <input type="text" 
                            className = "form-control"
                            placeholder = "Identificación del soldado"
                            name = "soldado"
                            onChange = {this.handleChange}
                            value = {this.state.arma.soldado}
                            />
                        </div>
                    </div> 

                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            Rango de soldado
                        </label>    
                        <div className = "col-sm-8 col-lg-4">
                            <input type="text" 
                            className = "form-control"
                            placeholder = "Rango del soldado"
                            name = "rango"
                            onChange = {this.handleChange}
                            value = {this.state.arma.rango}
                            />
                        </div>
                    </div> 

                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            Dia
                        </label>    
                        <div className = "col-sm-8 col-lg-3">
                            <input type="date" 
                            className = "form-control"
                            name = "dia"
                            onChange = {this.handleChange}
                            value = {this.state.arma.dia}
                            />
                        </div>
                    </div>    

                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            Hora
                        </label>    
                        <div className = "col-sm-8 col-lg-2">
                            <input type="time" 
                            className = "form-control"
                            name = "hora"
                            onChange = {this.handleChange}
                            value = {this.state.arma.hora}
                            />
                        </div>
                    </div>    

                    <div className = "form-group row">
                        <label className = "col sm-4 col-lg-2 col-form-label">
                            Detalle
                        </label>    
                        <div className = "col-sm-8 col-lg-10">
                            <textarea type="text" 
                            className = "form-control"
                            placeholder = "Detalle de la falla"
                            name = "detalle"
                            onChange = {this.handleChange}
                            value = {this.state.arma.detalle}
                            />
                        </div>
                    </div>    

                    <input 
                        type="submit"
                        className = "py-3 mt-2 btn btn-success btn-block"
                        value = "Registrar nueva falla"
                    />

                </form> 
                </div>
            </div>
        );
    }
}

export default CargarArma;