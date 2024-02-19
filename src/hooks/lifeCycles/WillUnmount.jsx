import React, { Component } from 'react';

class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparesca.")
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}

export default WillUnmount;

    useEffect(() => {
        return () => {
            console.log("Comportamiento antes de que el componente desaparesca.")
        };
    }, []);

export const WillUnmountHook = () => {
    return (
        <div>
            
        </div>
    );
}


