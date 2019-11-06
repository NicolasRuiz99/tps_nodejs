import React from 'react';

const Error = ({msj}) => {
    return (
        <div className="row">
        <div className="col s12 m6">
        <div className="card-panel red">
            <div className="card-content white-text">
                <h3>{msj}</h3>
            </div>
            
        </div>  
        </div>
        </div>
    );
};

export default Error;