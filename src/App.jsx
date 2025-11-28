import { useEffect, useState } from "react";
// Importa os componentes filhos
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid';
import Title from "./components/Title";

function App() {

  // state principal do app
  // tasks = lista atual de tarefas
  // setTasks = função que atualiza essa lista
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );


  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  }, [tasks]);


  // ao utilizar o use efect com o segundo parametro sendo uma lista vazia, essa função só sera executada uma vez, quando o usuario acessa a aplicação
    //useEffect(()=> {
      //const fetchTasks = async () => {
  
    // chamar a API 
    //const response = await fetch(
      //'https://jsonplaceholder.typicode.com/todos?_limit=10',
      //{
        //method: "GET",
      //}  
    //);

  //pegar os dados que ela retorna
  //const data = await response.json();

  //armazena, persiste os dados no state
  //setTasks(data);
//};

  //possibilidade de chamar uma API
  //fetchTasks();
//}, []);


  // Função chamada quando o usuário clica em uma tarefa.
  // taskId = id da tarefa clicada.

  function onTaskClick(taskId) {
    
      // Percorre TODAS as tarefas e cria uma nova lista.
      const newTasks = tasks.map((task) => {
      // Se o id da tarefa atual é o mesmo do clicado:
      if (task.id == taskId) {
        // Retorna uma cópia da tarefa, mas com isCompleted invertido.
        return {...task, isCompleted: !task.isCompleted};
      }
      // Se não for a tarefa clicada, apenas mantém igual.
      return task;
    });
    setTasks(newTasks);
  }

  // Função de deletar tarefa
  function onDeleteTaskClick(taskId) {
    //mantem na lista todas as tarefas que tem o id diferente da que foi clicada
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  // Função chamada ao adicionar uma nova tarefa
  function onAddTaskSubmit(title, description) {
    //Ao clicar no adicionar a tarefa ira para a lista
    const newTask = {
    id: v4(),
    title: title,
    description: description,
    isCompleted: false,
    };

    setTasks([...tasks, newTask])
  }


  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center p-6">
     <div className="w-[500px] space-y-4">
       <Title>Gerenciador de Tarefas</Title>

        <AddTask 
          onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}
        />
     </div>
    </div>
  );
}

export default App;


