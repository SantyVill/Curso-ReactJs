import React, {useState} from 'react';
import propTypes from 'prop-types';


const GreetingF = (props) => {

    const [edad, setedad] = useState(26);

    const cumpleanios = () =>{
        setedad(edad+1);
    }

    return (
        <div>
                <h1>
                    Hola {props.name} desde componente funcional!
                </h1>
                <h2>
                    Tu edad es {edad}
                </h2>
                <button onClick={cumpleanios}>
                    Cumplir Años
                </button>
            </div>
    );
};

GreetingF.propTypes = {
    name:propTypes.string,
};



export default GreetingF;
