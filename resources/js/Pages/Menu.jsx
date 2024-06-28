import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faChartSimple,
    faGear,
    faHouse,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ user, setStep, currentStep }) => {
    return (
        <>
            <div
                className="bg-white w-80 mx-5 mt-5 mb-5 rounded-3xl shadow-lg"
                style={{ height: `calc(100vh - 40px)` }}
            >
                <div className="pt-20 pb-16 text-3xl">
                    <h1 className="font-bold text-center">LOGO</h1>
                </div>
                <div className="flex flex-1 items-center gap-1 flex-row">
                    <div className="flex items-center justify-center bg-gray-500 rounded-full mx-8" style={{width: 50, height: 50}}>
                    <FontAwesomeIcon
                            icon={faUser}
                            color="#FFFF"
                            style={{ width: 25, height: 25 }}
                        />
                    </div>
                    <div>
                        <h4 className="font-interRegular">Bem vindo,</h4>
                        <h3 className="font-interBold text-xl">{user.name}</h3>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <h2 className="font-interMedium text-gray-400">
                        Seu Nível
                    </h2>
                    <h1 className="font-interExtraBold text-green-800 text-6xl">
                        02
                    </h1>
                </div>
                <section>
                <div
                    className={`cursor-pointer flex flex-1 items-center gap-5 flex-row mt-12 px-7 py-4 mx-4 my-2 rounded-xl hover:bg-gray-100`}
                    onClick={() => setStep(1)}
                >
                    <FontAwesomeIcon icon={faPlus} color={'#327835'} style={{ width: 25, height: 25 }} />
                    <h1 className="text-lg font-interBold" style={{color:'#327835'}}>Nova tarefa</h1>
                </div>
                <div
                    className={`cursor-pointer flex flex-1 items-center gap-5 flex-row mt-12 px-7 py-4 mx-4 my-2 rounded-xl ${currentStep === 2 ? 'bg-green-600 text-white' : ''}`}
                    onClick={() => setStep(2)}
                >
                    <FontAwesomeIcon icon={faHouse} color={currentStep === 2 ? '#FFFF' : '#327835'} style={{ width: 25, height: 25 }} />
                    <h1 className="text-lg">Início</h1>
                </div>
                <div
                    className={`cursor-pointer flex flex-1 items-center gap-5 flex-row px-7 py-4 mx-4 my-2 rounded-xl ${currentStep === 3 ? 'bg-green-600 text-white' : ''}`}
                    onClick={() => setStep(3)}
                >
                    <FontAwesomeIcon icon={faChartSimple} color={currentStep === 3 ? '#FFFF' : '#327835'} style={{ width: 25, height: 25 }} />
                    <h1 className="text-lg">Estatísticas</h1>
                </div>
                <div
                    className={`cursor-pointer flex flex-1 items-center gap-5 flex-row px-7 py-4 mx-4 my-2 rounded-xl ${currentStep === 4 ? 'bg-green-600 text-white' : ''}`}
                    onClick={() => setStep(4)}
                >
                    <FontAwesomeIcon icon={faGear} color={currentStep === 4 ? '#FFFF' : '#327835'}  style={{ width: 25, height: 25 }} />
                    <h1 className="text-lg">Opções</h1>
                </div>
            </section>
            </div>
        </>
    );
};

export default Menu;
