import React from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado");

        const  intervalId= setInterval(() => {
            document.title=`{New Date()}`   
           console.log("Alcualizacion del componente")
        }, 1000);

        return () =>{
            console.log("Actualizacion del componente");
            document.title="Tiempo detenido"
            clearInterval(intervalId);
        }
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
