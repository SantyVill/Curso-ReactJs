import React, {useState} from 'react';

const PruebaHooks = () => {
    
    const valorIncial= 0;

    const personaInicial={
        nombre: "Santiago",
        email:"santiagovillagra@gmail.com"
    }
    
    const [contador, setContador] = useState(valorIncial);

    const [persona, setPersona] = useState(personaInicial);

    /**
    Funcion para actualizar el estado privado que contiene el contador
    */

    function incrementarContador(){
        setContador(contador+1);
    }

    /**
     * Funcion para actualizar estado de persona
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: "Pepe",
                email: "pepe@gmail.com"
            }
        )
    }

    return (
        <div>
            <h1>***Prueba de uso de useState()***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default PruebaHooks;
