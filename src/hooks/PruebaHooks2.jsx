import React, {useState,useEffect,useRef} from 'react';

const PruebaHooks2 = () => {

    //Creo dos contadores distintos, cada uno con un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Creo una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1+1);
    }

    /**
     * Trabajo con useEffect
     */

    /* useEffect(()=>{
        console.log("Cambio en el estado del componente");
        console.log("Mostando referecia a elemento del DOM");
        console.log(miRef);
    }) */

    useEffect(() => {
        console.log("Cambio en el estado del componente");
        console.log("Mostando referecia a elemento del DOM");
        console.log(miRef);
    }, [contador1,contador2]); //Solo se ejecuta cuando cambia el contador 1 o contador 2

    function incrementar2() {
        setContador2(contador2+1);
    }
    return (
        <div>
            <h1>Pruba de uso de useState(), useEffect() y useRef()</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>incrementar contador 1</button>
                <button onClick={incrementar2}>incrementar contador 2</button>
            </div>
        </div>
    );
}

export default PruebaHooks2;
