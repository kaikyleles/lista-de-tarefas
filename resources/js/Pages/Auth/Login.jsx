import {useLayoutEffect, useState} from 'react';
import * as Yup from 'yup';
import backgroundImage from '../../assets/bg-image.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {useFormik} from "formik";

function Login() {
    const [isDesktop, setIsDesktop] = useState(false);

    useLayoutEffect(() => {
        function updateSize() {
            setIsDesktop(window.innerWidth >= 1000);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('O usuário é obrigatório'),
            password: Yup.string().required('A senha é obrigatória'),
        }),
        onSubmit: values => {
            // Aqui você pode enviar os dados do formulário para a API ou realizar outras ações
            console.log('Valores do formulário:', values);
        },
    });

    return (
        <>
            <div className={`bg-white grid font-interRegular h-screen overflow-hidden ${isDesktop ? 'grid-cols-3' : 'grid-cols-1'}`}>
                <div className="bg-white">
                    <header className='flex flex-col gap-4 justify-center items-center' style={{ height: '40%' }}>
                        <h1 className='text-4xl font-interExtraBold'>
                            LOGO
                        </h1>
                        <div className='mt-5 text-2xl font-interBold text-green-700'>
                            <h5>Seja bem vindo!</h5>
                        </div>
                        <div className='text-lg font-interSemiBold text-green-700'>
                            <h5>Faça login!</h5>
                        </div>
                    </header>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 items-center h-full' style={{ height: '60%' }}>
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center font-montserratMedium text-xs gap-4 text-green-700'>
                                <FontAwesomeIcon icon={faUser} />
                                Usuário
                            </label>
                            <input
                                type={"text"}
                                placeholder={'Login'}
                                className='border-green-700 border-2 px-8 py-2.5 rounded-xl'
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="text-red-600 text-xs">{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center font-montserratMedium text-xs gap-4 text-green-700'>
                                <FontAwesomeIcon icon={faLock} />
                                Senha
                            </label>
                            <input
                                type={"password"}
                                placeholder={'Senha'}
                                className='border-green-700 border-2 px-8 py-2.5 rounded-xl'
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-600 text-xs">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className='mt-5'>
                            <button
                                type="submit"
                                className='text-white px-28 py-2.5 rounded-xl font-bold'
                                style={{ backgroundColor: '#FEB132' }}
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
                <div className={`col-span-2 bg-cover bg-center ${isDesktop ? '' : 'hidden'}`} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            </div>
        </>
    );
}

export default Login;