import React from "react"

const Arma = ({arma, eliminarArma}) => {
    return (
        <div className = "media mt-3">
            <div className="media-body">
                <h3 className="mt-0">
                    {arma.nombre}
                </h3>
                <p className="card-text">
                    <span>Arma defectuosa: </span> {arma.nombre}
                    <p><span>Tipo: </span> {arma.tipo}</p>
                    <p><span>Soldado: </span> {arma.soldado}</p>
                    <p><span>Rango: </span> {arma.rango}</p>
                    <p><span>Dia: </span> {arma.dia}</p>
                    <p><span>Hora: </span> {arma.hora}</p>
                    <p><span>Detalle: </span> {arma.detalle}</p>
                </p>

                <button className = "btn btn-danger" onClick={ () => eliminarArma (arma.id)}>
                    Borrar &times;
                </button>
            </div>
        </div>
    );
};

export default Arma;