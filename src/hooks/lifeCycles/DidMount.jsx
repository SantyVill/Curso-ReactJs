import React, { Component, useEffect } from 'react';

class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHooks = () => {
    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
        
    }, []);
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


