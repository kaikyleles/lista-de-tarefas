import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faChartSimple,
    faGear,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function Statistics({ user }) {
    return (
        <>
            <div className="flex-1 px-2 py-5">
                <div className="flex flex-row items-center gap-4 pt-20 pb-12 px-5">
                    <FontAwesomeIcon
                        icon={faChartSimple}
                        color="#327835"
                        style={{ width: 35, height: 35 }}
                    />
                    <h1 className="text-4xl font-bold">Estatísticas</h1>
                </div>
                <div className="h-full">
                    <div className="flex flex-wrap p-4 gap-4">
                        <div
                            className="flex flex-col items-center justify-center p-8 bg-white gap-2 rounded-xl"
                            style={{ width: "60%", height: "230px" }}
                        >
                            <h3 className="font-interMedium text-xl">Tarefas Concluídas</h3>
                            <div className="flex items-center gap-1">
                                <h5 className="font-interExtraBold text-5xl text-green-600">10</h5>
                                <h3 className="font-interExtraBold text-xl text-gray-300">/10</h3>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center p-8 bg-white gap-2 rounded-xl"
                            style={{ width: "38%", height: "230px" }}
                        >
                            <h3 className="font-interMedium text-xl">Sugestões <br></br><a className="text-green-600">Concluídas</a></h3>
                            <div className="flex items-center gap-1">
                                <h5 className="font-interExtraBold text-5xl text-green-600">02</h5>
                                <h3 className="font-interExtraBold text-xl text-gray-300">/10</h3>
                            </div>
                        </div>
                        <div
                            className="flex-1 p-8 bg-white rounded-xl"
                            style={{height: "230px" }}
                        >
                            Terceiro
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
