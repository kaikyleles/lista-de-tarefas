// resources/js/Components/Tarefa.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tarefa = ({ id, name, completed, onDelete, onToggleComplete }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isChecked, setIsChecked] = useState(completed);

    useEffect(() => {
        setIsChecked(completed);
    }, [completed]);

    const handleDelete = async (e) => {
        e.stopPropagation();
        if (isProcessing) return;

        setIsProcessing(true);
        try {
            const response = await axios.delete(`http://localhost:8000/api/tarefas/${id}`);
            if (response.status === 204) {
                toast.success("Tarefa excluída com sucesso!", {
                    autoClose: 2000,
                });
                onDelete(id);
            }
        } catch (error) {
            toast.error("Erro ao excluir tarefa!", {
                autoClose: 2000,
            });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleToggleComplete = async (e) => {
        e.stopPropagation();
        if (isProcessing) return;

        setIsProcessing(true);
        try {
            if (isChecked) {
                const response = await axios.post(`http://localhost:8000/api/tarefas/${id}/undo-complete`);
                if (response.status === 200) {
                    setIsChecked(false);
                    toast.success("Tarefa marcada como não concluída!", {
                        autoClose: 2000,
                    });
                    onToggleComplete(id, false);
                } else {
                    toast.error("Erro ao marcar tarefa como não concluída!", {
                        autoClose: 2000,
                    });
                }
            } else {
                const response = await axios.post(`http://localhost:8000/api/tarefas/${id}/complete`);
                if (response.status === 200) {
                    setIsChecked(true);
                    toast.success("Tarefa marcada como concluída!", {
                        autoClose: 2000,
                    });
                    onToggleComplete(id, true);
                } else {
                    toast.error("Erro ao marcar tarefa como concluída!", {
                        autoClose: 2000,
                    });
                }
            }
        } catch (error) {
            toast.error("Erro ao marcar tarefa!", {
                autoClose: 2000,
            });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex flex-row items-center">
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleToggleComplete} 
                    disabled={isProcessing}
                />
                <h3 className={`text-sm font-interMedium ml-2 ${isChecked ? 'line-through' : ''}`}>{name}</h3>
            </div>
            <button 
                onClick={handleDelete} 
                className="bg-red-500 text-white px-2 py-1 rounded"
                disabled={isProcessing}
            >
                <FontAwesomeIcon
                        icon={faTrash}
                        color="white"
                        style={{ width: 14, height: 14 }}
                    />
            </button>
        </div>
    );
};

export default Tarefa;
