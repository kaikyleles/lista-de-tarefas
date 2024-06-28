import Menu from "./Menu";
import Home from "./Home"
import Statistics from "./Statistics"
import Options from "./Options"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faGear,
    faHouse,
    faLightbulb,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NewTask from "./NewTask";

export default function Dashboard({ auth }) {
    const userName = auth.user.name;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Lista de Tarefas</h2>}
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Bem vindo, {userName}!</div>
                    </div>
                </div>
    const user = auth.user;
    const [currentStep, setCurrentStep] = useState(2);

    const renderSteps = () => {
        switch (currentStep) {
            case 1:
                return <NewTask/>
            case 2:
                return <Home user={user} />;
            case 3:
                return <Statistics user={user} />;
            case 4:
                return <Options user={user} />;
        }
    };

    return (
        <>
            <div className="bg-gray-100 overflow-hidden flex flex-row">
                <Menu user={user} setStep={(step) => setCurrentStep(step)} currentStep={currentStep} />
                {renderSteps()}
            </div>
        </>
    );
}
