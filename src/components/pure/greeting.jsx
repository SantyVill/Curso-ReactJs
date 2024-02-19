import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            edad:26
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}!
                </h1>
                <h2>
                    Tu edad es {this.state.edad}
                </h2>
                <button onClick={this.cumpleanios}>
                    Cumplir Años
                </button>
            </div>
        );
    }
    
    cumpleanios = () => {
        this.setState((prevState)=>(
            {
                edad : prevState.edad+1,
            }
        ))
    }
    
    /* Greeting.propTypes = {
        name: propTypes.string,
    }; */
}


export default Greeting;
