import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.calss';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo','Descripcion default',false,LEVELS.NORMAL);

    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Modificacion de tareas");
        setLoading(false);
        return () => {
            console.log("lista de tareas eliminadas");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }
    return (
        <div>
            <div>
                Tu tarea: 
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
