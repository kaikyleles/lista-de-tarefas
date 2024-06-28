import {useLayoutEffect, useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../../assets/Design sem nome.png";
import { Inertia } from '@inertiajs/inertia';

export default function Register() {
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
            name: '',
            email: '',
            password: '',
            password_confirmation: '', // Novo campo para confirmar a senha
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('O nome é obrigatório'),
            email: Yup.string()
                .email("O e-mail deve ser válido")
                .required('O e-mail é obrigatório'),
            password: Yup.string().required('A senha é obrigatória').min(6, "Mínimo de 6 caracteres"),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais') // Confirmação de senha igual à senha
                .required('A confirmação de senha é obrigatória'),
        }),
        onSubmit: (values) => {
            register(values);
        },
    });

    const register = async (values) => {
        Inertia.post('/register', values, {
            onSuccess: () => {
                console.log('Register bem sucedido!');
            },
            onError: (errors) => {
                console.error('Erro no login:', errors);
            },
        });
    };

    return (
        <>
            <div className={`bg-white grid font-interRegular h-screen overflow-hidden ${isDesktop ? 'grid-cols-3' : 'grid-cols-1'}`}>
                <div className="bg-white">
                    <header className='flex flex-col gap-4 justify-center items-center' style={{ height: '35%' }}>
                        <h1 className='text-3xl font-interExtraBold'>
                            LOGO
                        </h1>
                        <div className='mt-5 text-xl font-interBold text-green-700'>
                            <h5>Faça parte, cadastre-se!</h5>
                        </div>
                    </header>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 items-center h-full'
                          style={{height: '65%'}}>
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center font-montserratMedium text-xs gap-4 text-green-700'>
                                <FontAwesomeIcon icon={faUser}/>
                                Nome Completo
                            </label>
                            <input
                                type={"text"}
                                placeholder={'Digite seu nome completo'}
                                className='border-green-700 border-2 text-sm px-8 py-2 rounded-xl'
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-600 text-xs">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center font-montserratMedium text-xs gap-4 text-green-700'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                E-mail
                            </label>
                            <input
                                type={"text"}
                                placeholder={'Digite seu e-mail'}
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
                                <FontAwesomeIcon icon={faLock}/>
                                Senha
                            </label>
                            <input
                                type={"password"}
                                placeholder={'Digite sua senha'}
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
                        
                        <div className='flex flex-col gap-2'>
                            <label className='flex items-center font-montserratMedium text-xs gap-4 text-green-700'>
                                <FontAwesomeIcon icon={faLock}/>
                                Confirmar Senha
                            </label>
                            <input
                                type={"password"}
                                placeholder={'Confirme sua senha'}
                                className='border-green-700 border-2 px-8 py-2 text-sm rounded-xl'
                                name="password_confirmation"
                                value={formik.values.password_confirmation}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
                                <div className="text-red-600 text-xs">{formik.errors.password_confirmation}</div>
                            ) : null}
                        </div>

                        <div className='mt-5'>
                            <button
                                type="submit"
                                className='text-white px-24 py-2 rounded-xl font-bold text-sm'
                                style={{backgroundColor: '#FEB132'}}
                            >
                                Cadastrar
                            </button>
                        </div>
                        <div className='mt-3 text-xs'>
                            <p>Já possui conta? <a href={route('login')}
                                                   className='text-green-700 font-bold cursor-pointer'>Login</a>
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
