import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faChartSimple,
    faGear,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Options({ user }) {
    const formik = useFormik({
        initialValues: {
            name: user.name ? user.name : "",
            email: user.email ? user.email : "",
            allowNotifications: false,
            allowStatistics: false,
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().min(1, "O nome não pode ser vazio."),
            email: Yup.string().email("O e-mail deve ser válido"),
            allowNotifications: Yup.boolean(),
            allowStatistics: Yup.boolean(),
        }),
        onSubmit: (values) => {},
    });

    return (
        <>
            <div className="flex-1 px-2 py-5">
                <div className="flex flex-row items-center gap-4 pt-20 pb-12 px-5">
                    <FontAwesomeIcon
                        icon={faGear}
                        color="#327835"
                        style={{ width: 35, height: 35 }}
                    />
                    <h1
                        className="text-4xl font-bold"
                        style={{ color: "#327835" }}
                    >
                        Opções
                    </h1>
                </div>
                <div className="h-full p-30">
                    <div
                        className="flex flex-1 p-8 bg-white rounded-xl gap-3 align-center"
                    >
                        <div
                            className="flex flex-col align-items justify-center items-center"
                            style={{ width: "40%" }}>
                             <div
                                className="flex items-center justify-center bg-gray-500 rounded-full mx-8"
                                style={{ width: '120px', height: '120px' }}
                            >
                                <FontAwesomeIcon
                                    icon={faUser}
                                    color="#FFFF"
                                    style={{ width: 50, height: 50 }}
                                />
                                </div>
                        </div>
                        <div className="flex flex-col justify-center w-full gap-2">
                            <div className="flex flex-col gap-2" style={{width: '70%'}}>
                                <label className="flex items-center font-montserratMedium text-sm gap-4 text-green-700">
                                    <FontAwesomeIcon icon={faUser} />
                                    Nome Completo
                                </label>
                                <input
                                    className="border-green-700 border-2 px-8 py-2 text-sm rounded-xl"
                                    name="password"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="text-red-600 text-xs">
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col gap-2" style={{width: '70%'}}>
                                <label className="flex items-center font-montserratMedium text-sm gap-4 text-green-700">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    Email
                                </label>
                                <input
                                    className="border-green-700 border-2 px-8 py-2 text-sm rounded-xl"
                                    name="password"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="text-red-600 text-xs">
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-4">
                                <input type="checkbox" />
                                <label>Receber atualizações no e-mail</label>
                            </div>
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <input type="checkbox" />
                                <label>Permitir o sistema gerar estatícas para contextos externos</label>
                            </div>
                            <div className="flex items-center justify-center" style={{width: '70%'}}>
                                <button
                                    className="bg-green-700 text-white font-montserratMedium py-2 px-8 rounded-xl"
                                    type="submit"
                                    onClick={formik.handleSubmit}
                                    style={{backgroundColor: '#feb132'}}
                                >
                                    Atualizar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
