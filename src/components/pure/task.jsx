import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.calss';


const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log("Tarea creada");
        return () => {
            console.log("La tarea: "+task.name+" sera eliminada");
        };
    }, [task]);

    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripcion: {task.descripcion}
            </h3>
            <h4>
                Nivel de tarea: {task.level}
            </h4>
            <h5>
                Esta tarea esta: {task.completed? "Completed":"Pending"}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
