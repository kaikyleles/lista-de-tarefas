import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faGear,
    faHouse,
    faLightbulb,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Tarefa from "@/Components/Tarefa";

const formatDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;
}

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
                        Inicio - <i className="text-2xl">{formatDate()}</i>
                    </h1>
                </div>
                <div className="h-full">
                    <div className="flex flex-1 flex-col h-1/2">
                        <div className="flex flex-row items-center gap-4 py-3 px-5">
                            <Tarefa />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
