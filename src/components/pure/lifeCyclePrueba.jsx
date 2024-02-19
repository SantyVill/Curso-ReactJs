import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCyclePrueba extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: cuando se instacia el componente");
    }

    componentWillMount() {
        console.log("WillMount: Antes del montaje del componente");
    }

    componentDidMount() {
        console.log("Didmount: Justo al terminar el montaje del componente, antes de renderizarlo");
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReciveProps: Si va a recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        /* Controlar si el componente debe o no actualizarce */
        //return true/false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: Justo antes de actualizarce");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate: Justo despues de actualizarce");
    }

    componentWillUnmount() {
        console.log("WillUnmount: Justo antes de desaparecer");
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCyclePrueba.propTypes = {

};

export default lifeCyclePrueba;