// Esse hook serve para ler parâmetros que vêm na URL.
import {ChevronLeftIcon} from "lucide-react"
import {useNavigate, useSearchParams} from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    // useSearchParams devolve um array [searchParams, setSearchParams]
    const [searchParams] = useSearchParams();
    // Pega o valor do parâmetro "title" na URL
    const title = searchParams.get("title")
    // Pega o valor do parâmetro "description" na URL
    const description = searchParams.get("description")
    return (
        <div className="h-screen w-screen bg-slate-500 p-6" >
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative md-6">
                    <button
                        onClick={()=> navigate(-1)}
                        className="absolute left-0 top-0 bottom-0 text-white text-3xl"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>
                
                <div className = "bg-slate-200 p-4 rounded-md"> 
                    <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage