/**
 * Prueba de Hooks: useState(), useContext()
 */

import React, {useState,useContext} from 'react';
/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener valor que recibe desde el padre
 */

const miContexto = React.createContext(null); 

const Componente1 = () => {
    //Inicializamos un estado que va a rellenarce con los datos del contexto del padre

    const state = useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/* Pontamos aqui el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state=useContext(miContexto);
    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}

export default function MiComponenteConContexto () {

    const estadoInicial={
        token:"1234567",
        sesion: 1
    }

    //creamos el estado de este componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData({
            token:"JSH1234566",
            sesion: sessionData.sesion+1
        })
    }
    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
                {/* Ademas si se actualiza, los componentes de aqui tambien se actualizan */}
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesion</button>
            </miContexto.Provider>
        </div>
    );
}




