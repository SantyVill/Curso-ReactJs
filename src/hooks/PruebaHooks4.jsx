import React from 'react';

const PruebaHooks4 = (props) => {
    return (
        <div>
            <h1>Prueba de CHILDREN PROPS</h1>
            <h2>Nombre: {props.nombre}</h2>
            {props.children}
        </div>
    );
}

export default PruebaHooks4;
