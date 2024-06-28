import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLightbulb,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewTask = ({ }) => {
    const [taskName, setTaskName] = useState("");
    const suguestoes = ["Economizar", "Reciclar"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() === "") {
            toast.error("Tarefa não pode ser vazia!", {
                autoClose: 2000,
            });
            return;
        }
        save(taskName);
        setTaskName("");
    };

    const save = (taskName) => {
        toast.success("Tarefa adicionada com sucesso!", {
            autoClose: 2000,
        });
    };
    return (
        <>
            <div className="flex-1 px-2 py-5">
                <div className="flex flex-row items-center gap-4 pt-20 pb-12 px-5">
                    <FontAwesomeIcon
                        icon={faPlus}
                        color="#327835"
                        style={{ width: 35, height: 35 }}
                    />
                    <h1
                        className="text-4xl font-bold"
                        style={{ color: "#327835" }}
                    >
                        Nova Tarefa
                    </h1>
                </div>
                <div className="h-full p-30">
                    <div className="flex flex-col p-8 bg-white rounded-xl gap-3 align-center justify-center">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Nova Tarefa
                        </h2>
                        <div className="flex align-center justify-center">
                            <form
                                onSubmit={handleSubmit}
                                style={{ width: "60%" }}
                            >
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="taskName"
                                    >
                                        Nome da Tarefa
                                    </label>
                                    <input
                                        type="text"
                                        id="taskName"
                                        value={taskName}
                                        onChange={(e) =>
                                            setTaskName(e.target.value)
                                        }
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        style={{ backgroundColor: "#327835" }}
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full h-full border-gray-300 my-4">
                            <div>
                                <div className="flex flex-row items-center gap-4 py-3 px-5">
                                    <FontAwesomeIcon
                                        icon={faLightbulb}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <h2 className="text-xl font-bold">
                                        Sugestões do dia
                                    </h2>
                                </div>
                                {suguestoes &&
                                    suguestoes.map((s) => {
                                        return (
                                            <div
                                                key={s}
                                                className="flex flex-row items-center gap-4 py-3 px-5 cursor-pointer hover:bg-gray-100 w-48 rounded-xl"
                                                onClick={() => save(s)}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    style={{
                                                        width: 17,
                                                        height: 17,
                                                    }}
                                                />
                                                <label className="cursor-pointer">{s}</label>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default NewTask;
