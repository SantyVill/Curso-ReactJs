import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskList from './components/container/task_list';
import TaskListComponent from './components/container/task_list';
import PruebaHooks from './hooks/PruebaHooks';
import PruebaHooks2 from './hooks/PruebaHooks2';
import MiComponenteConContexto from './hooks/PruebaHooks3';
import PruebaHooks4 from './hooks/PruebaHooks4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Santiago"></Greeting> */}
        {/* <GreetingF name="Santiago"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <PruebaHooks></PruebaHooks> */}
        {/* <PruebaHooks2></PruebaHooks2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <PruebaHooks4 nombre="Santiago">
          <h3>contenido desde el props.children</h3>
        </PruebaHooks4>
      </header>
    </div>
  );
}

export default App;
