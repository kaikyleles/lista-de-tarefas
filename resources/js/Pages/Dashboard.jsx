import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faGear,
    faHouse,
    faLightbulb,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard({ auth }) {
    const user = auth.user;
    return (
        <>
            <div className="bg-gray-100 overflow-hidden flex flex-row">
                <Menu user={user} />
                <div className="flex-1 px-2 py-5">
                    <div className="flex flex-row items-center gap-4 pt-20 pb-12 px-5">
                        <FontAwesomeIcon
                            icon={faHouse}
                            color="#327835"
                            style={{ width: 35, height: 35 }}
                        />
                        <h1 className="text-4xl font-bold">Inicio</h1>
                    </div>
                    <div className="h-full">
                        <div className="flex flex-1 flex-col h-1/2">
                            <div className="flex flex-row items-center gap-4 py-3 px-5">
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    style={{ width: 20, height: 20 }}
                                />
                                <h2 className="text-xl font-bold">
                                    Nova Tarefa
                                </h2>
                            </div>
                            <div className="flex flex-row items-center gap-4 py-3 px-5">
                                <input type="checkbox" />
                                <label> Fazer trabalho </label>
                            </div>
                        </div>
                        <div className="w-full border-t border-gray-300 my-4"></div>
                        <div>
                            <div className="flex flex-row items-center gap-4 py-3 px-5">
                                <FontAwesomeIcon
                                    icon={faLightbulb}
                                    style={{ width: 20, height: 20 }}
                                />
                                <h2 className="text-xl font-bold">
                                    Sugestões
                                </h2>
                            </div>
                            <div className="flex flex-row items-center gap-4 py-3 px-5">
                                <input type="checkbox" />
                                <label> Economizar </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
