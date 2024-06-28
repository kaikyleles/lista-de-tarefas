import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faChartSimple,
    faGear,
    faHouse,
    faClock,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Statistics({ user }) {
    const tasks = [
        {name: 'Teste', completed: false},
        {name: 'Teste2', completed: false},
        {name: 'Teste3', completed: true},
        {name: 'Teste4', completed: true},
        {name: 'Teste5', completed: false},
        {name: 'Teste5', completed: false},
        {name: 'Teste5', completed: false},
        {name: 'Teste5', completed: false},
    ];
    return (
        <>
            <div className="flex-1 px-2 py-5">
                <div className="flex flex-row items-center gap-4 pt-20 pb-12 px-5">
                    <FontAwesomeIcon
                        icon={faChartSimple}
                        color="#327835"
                        style={{ width: 35, height: 35 }}
                    />
                    <h1
                        className="text-4xl font-bold"
                        style={{ color: "#327835" }}
                    >
                        Estatísticas
                    </h1>
                </div>
                <div className="h-full">
                    <div className="flex flex-wrap p-4 gap-4">
                        <div
                            className="flex flex-col items-center justify-center p-8 bg-white gap-2 rounded-xl"
                            style={{ width: "60%", height: "230px" }}
                        >
                            <h3 className="font-interMedium text-xl">
                                Tarefas Concluídas
                            </h3>
                            <div className="flex items-center gap-1">
                                <h5 className="font-interExtraBold text-5xl text-green-600">
                                    10
                                </h5>
                                <h3 className="font-interExtraBold text-xl text-gray-300">
                                    /10
                                </h3>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center p-8 bg-white gap-2 rounded-xl"
                            style={{ width: "38%", height: "230px" }}
                        >
                            <h3 className="font-interMedium text-xl">
                                Sugestões <br></br>
                                <a className="text-green-600">Concluídas</a>
                            </h3>
                            <div className="flex items-center gap-1">
                                <h5 className="font-interExtraBold text-5xl text-green-600">
                                    02
                                </h5>
                                <h3 className="font-interExtraBold text-xl text-gray-300">
                                    /10
                                </h3>
                            </div>
                        </div>
                        <div
                            className="flex p-8 bg-white rounded-xl gap-3 align-center"
                            style={{ height: "230px", width: "100%" }}
                        >
                            <div
                                className="flex flex-col align-items justify-center items-center"
                                style={{ width: "40%" }}
                            >
                                <h3 className="font-interMedium text-xl">
                                    Seu <a className="font-interBold">nível</a>
                                </h3>
                                <div className="flex items-center gap-1">
                                    <h5 className="font-interExtraBold text-5xl text-green-600">
                                        02
                                    </h5>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-full gap-2">
                                <h3 className="font-interMedium text-xl">
                                    Seu progresso
                                </h3>
                                <h4 className="font-interBold text-xl text-green-600">
                                    80%
                                </h4>
                                <ProgressBar
                                    completed={60}
                                    bgColor="#327835"
                                    height="40px"
                                    isLabelVisible={false}
                                />
                            </div>
                        </div>
                        <div
                            className="flex p-8 bg-white rounded-xl gap-3 align-center"
                            style={{ height: "230px", width: "100%" }}
                        >
                            <div
                                className="flex align-items justify-center items-center gap-2"
                                style={{ width: "40%" }}
                            >
                                <FontAwesomeIcon
                                    icon={faClock}
                                    color="#327835"
                                    style={{ width: 25, height: 25 }}
                                />
                                <h3 className="font-interMedium text-xl">
                                    Histórico
                                </h3>
                            </div>
                            <div className="flex flex-col w-full gap-2" style={{maxHeight: '200px', overflowY: 'scroll'}}>
                                {tasks && tasks.map(task => {
                                    return (
                                        <div className="flex flex-row align-center gap-5">
                                            <h3 className="font-interMedium text-lg">
                                                - {task.name}
                                            </h3>
                                            {task.completed ?  <FontAwesomeIcon
                                                icon={faCheck}
                                                color="#327835"
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                            /> : null}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
