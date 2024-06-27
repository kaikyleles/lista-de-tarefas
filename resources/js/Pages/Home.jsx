import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faGear,
    faHouse,
    faLightbulb,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Tarefa from "@/Components/Tarefa";

export default function Home({ user }) {
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
                        Inicio
                    </h1>
                </div>
                <div className="h-full">
                    <div className="flex flex-1 flex-col h-1/2">
                        <div className="flex flex-row items-center gap-4 py-3 px-5">
                            <Tarefa />
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-300 my-4"></div>
                    <div>
                        <div className="flex flex-row items-center gap-4 py-3 px-5">
                            <FontAwesomeIcon
                                icon={faLightbulb}
                                style={{ width: 20, height: 20 }}
                            />
                            <h2 className="text-xl font-bold">Sugestões</h2>
                        </div>
                        <div className="flex flex-row items-center gap-4 py-3 px-5">
                            <input
                                type="checkbox"
                                className="custom-checkbox form-checkbox h-4 rounded"
                            />
                            <label> Economizar </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
