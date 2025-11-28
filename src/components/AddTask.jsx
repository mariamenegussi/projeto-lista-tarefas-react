// useState permite criar variáveis que guardam valores que mudam
import { useState } from "react";
import Input from "./Input";

//o componente AddTask recebe como PROPS a função onAddTaskSubmit
function AddTask({onAddTaskSubmit}){ 

    //criado 2 states para guardar o titulo e a descrição digitado no input, setTitle/description é a função para atualizar o valor
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    return (
        <div className= "space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col" >
            <Input 
                type="text" 
                placeholder="Digite o título da tarefa"
                value={title}
                onChange = {(event) => setTitle(event.target.value)}
            />
        
            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange = {(event) => setdescription(event.target.value)}
            />
            <button 
                onClick={() => {
                    //verificar se o título e descrição não são vazios
                    if (!title.trim()|| !description.trim()) {
                        return alert("Preencha o título e a descrição da tarefa.");
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setdescription("");
                }}
                className = 'bg-slate-500 text-white px4 py-2 rounded-md font-medium'>
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;