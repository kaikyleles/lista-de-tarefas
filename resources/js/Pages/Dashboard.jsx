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
