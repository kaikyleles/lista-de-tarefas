import {useLayoutEffect, useState} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import * as Yup from 'yup';
import backgroundImage from '../../../assets/bg-image.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useFormik} from "formik";
import { Inertia } from '@inertiajs/inertia';

const Login = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useLayoutEffect(() => {
        const updateSize = () => {
            setIsDesktop(window.innerWidth >= 1000);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("O e-mail deve ser válido")
                .required('O e-mail é obrigatório'),
            password: Yup.string().required('A senha é obrigatória').min(6, "Mínimo de 6 caracteres"),
        }),
        onSubmit: values => {
            auth();
        },
    });

    const auth = () => {
        Inertia.visit('/');
    }

    return (
        <>
            <div className={`bg-white grid font-interRegular h-screen overflow-hidden ${isDesktop ? 'grid-cols-3' : 'grid-cols-1'}`}>
                <div className="bg-white">
                    <header className='flex flex-col gap-4 justify-center items-center' style={{ height: '40%' }}>
                        <h1 className='text-3xl font-interExtraBold'>
                            LOGO
                        </h1>
                        <div className='mt-5 text-xl font-interBold text-green-700'>
                            <h5>Seja bem vindo!</h5>
                        </div>
                        <div className='text-md font-interSemiBold text-green-700'>
                            <h5>Faça login!</h5>
                        </div>
                    </header>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 items-center h-full'
                          style={{height: '60%'}}>
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center font-montserratMedium text-xs gap-4 text-green-700'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                placeholder={'E-mail'}
                                className='border-green-700 border-2 text-sm px-8 py-2 rounded-xl'
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-600 text-xs">{formik.errors.email}</div>
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
                                className='border-green-700 border-2 px-8 py-2 text-sm rounded-xl'
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
                                className='text-white px-28 py-2 rounded-xl font-bold text-sm'
                                style={{backgroundColor: '#FEB132'}}
                            >
                                Entrar
                            </button>
                        </div>
                        <div className='mt-3 text-xs'>
                            <p>Não possui conta? <a href={route('register')}
                                                    className='text-green-700 font-bold cursor-pointer'>Cadastre-se</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className={`col-span-2 bg-cover bg-center ${isDesktop ? '' : 'hidden'}`}
                     style={{backgroundImage: `url(${backgroundImage})`}}></div>
            </div>
        </>
    );
}
export default Login;

