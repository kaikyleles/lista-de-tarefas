// resources/js/Pages/Home.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Tarefa from "@/Components/Tarefa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formatDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
};

const Home = ({ user }) => {
    const [tasks, setTasks] = useState([]);
    const [suggestions] = useState(["Economizar", "Reciclar"]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/tarefas');
                setTasks(response.data);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleAddSuggestion = async (name) => {
        try {
            const response = await axios.post('http://localhost:8000/api/tarefas', { name, is_suggestion: true });
            if (response.status === 201) {
                toast.success("Sugestão adicionada como tarefa!", {
                    autoClose: 2000,
                });
                setTasks([...tasks, response.data]);
            }
        } catch (error) {
            toast.error("Erro ao adicionar sugestão como tarefa!", {
                autoClose: 2000,
            });
        }
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleToggleComplete = (id, completed) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed };
            }
            return task;
        }));
    };

    return (
        <>
            <div className="flex-1 px-2 py-5">
                <div className="flex flex-row items-center gap-4 pt-20 pb-12 px-5">
                    <FontAwesomeIcon
                        icon={faHouse}
                        color="#327835"
                        style={{ width: 35, height: 35 }}
                    />
                    <h1
                        className="text-4xl font-bold"
                        style={{ color: "#327835" }}
                    >
                        Inicio - <i className="text-2xl">{formatDate()}</i>
                    </h1>
                </div>
                <div className="h-full">
                    <div className="flex flex-1 flex-col h-1/2">
                        <div className="flex flex-row items-center gap-4 py-3 px-5">
                            {tasks.map((task, index) => (
                                <Tarefa 
                                    key={index} 
                                    id={task.id} 
                                    name={task.name} 
                                    completed={task.completed}
                                    onDelete={handleDelete} 
                                    onToggleComplete={handleToggleComplete} 
                                />
                            ))}
                        </div>
                    </div>
                    {/* <div className="p-5">
                        <h2 className="text-2xl font-bold mb-4">Sugestões do Dia</h2>
                        <div className="flex flex-wrap gap-4">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAddSuggestion(suggestion)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;
