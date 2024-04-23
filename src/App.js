import React, {useState} from "react";
import './App.css';
import Tasks from "./components/tasks/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          title: 'Estudar Programação',
          completed: false
      },
      {
          id: 2,
          title: 'Ler Livros',
          completed: true
      }
  ]);

  return (
    <div className="container">
        <h1>Minha Tarefas</h1>
        <Tasks tasks={tasks}/>
        <button onClick={ () => setTasks('Teste') }>Mudar Mensagem</button>
    </div>
  );
};

export default App;
