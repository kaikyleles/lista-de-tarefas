import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faGear,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ user }) => {
    return (
        <>
            <div
                className="bg-white w-80 mx-5 mt-5 mb-5 rounded-3xl shadow-lg"
                style={{ height: `calc(100vh - 40px)` }}
            >
                <div className="pt-20 pb-16 text-4xl">
                    <h1 className="font-bold text-center">LOGO</h1>
                </div>
                <div className="flex flex-1 items-center gap-1 flex-row">
                    <div className="p-7 bg-gray-500 rounded-full mx-8"></div>
                    <div>
                        <h4 className="font-interRegular">Bem vindo,</h4>
                        <h3 className="font-interBold text-xl">{user.name}</h3>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <h2 className="font-interMedium text-gray-400">
                        Seu Nível
                    </h2>
                    <h1 className="font-interExtraBold text-green-800 text-7xl">
                        02
                    </h1>
                </div>
                <section>
                    <div className="flex flex-1 items-center gap-5 flex-row mt-12 p-10 ">
                        <FontAwesomeIcon
                            icon={faHouse}
                            color="#327835"
                            style={{ width: 25, height: 25 }}
                        />
                        <h1 className="text-lg">Início</h1>
                    </div>
                    <div className="flex flex-1 items-center gap-5 flex-row px-10 ">
                        <FontAwesomeIcon
                            icon={faChartSimple}
                            color="#327835"
                            style={{ width: 25, height: 25 }}
                        />
                        <h1 className="text-lg">Estatísticas</h1>
                    </div>
                    <div className="flex flex-1 items-center gap-5 flex-row p-10 ">
                        <FontAwesomeIcon
                            icon={faGear}
                            color="#327835"
                            style={{ width: 25, height: 25 }}
                        />
                        <h1 className="text-lg">Opções</h1>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Menu;
