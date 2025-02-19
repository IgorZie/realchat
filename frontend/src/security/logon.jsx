import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FaArrowCircleLeft } from 'react-icons/fa'

export function Logon() {

    const [signIn, setSignIn] = useState(true)
    const [forgotPass, setForgotPass] = useState(false)

    return (
        <>
            <div className="bg-white rounded-lg shadow-2xl relative overflow-hidden w-[678px] max-w-full min-h-[400px]">
                <div
                    className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-1 
                        ${!signIn ? "transform translate-x-full opacity-100 z-5" : ""}
                    `}
                >
                    <form className="bg-white text-black flex items-center justify-center flex-col p-0 md:p-[0_50px] h-full text-center">
                        <h1 className="font-bold text-2xl m-0 text-[#26447F]">Criar Conta</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            autoComplete="false"
                            className="bg-gray-200 outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            autoComplete="false"
                            className="bg-gray-200 outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                            required
                        />
                        <input
                            placeholder="Telefone/Celular"
                            className="bg-gray-200 outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="false"
                            className="bg-gray-200 outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                            required
                        />
                        <button className="rounded-full border border-[#5686C9] bg-[#26447F] text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition-transform duration-80 ease-in active:scale-95 focus:outline-none">
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2 ${!signIn ? "transform translate-x-full" : ""}`}>
                    <AnimatePresence>
                        {
                            forgotPass ? (
                                <motion.form
                                    key="forgotPasswordForm" // Adicione uma chave única
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="bg-white text-black flex items-center justify-center flex-col gap-6 p-0 md:p-[0_50px] h-full text-center"
                                >
                                    <div className="flex flex-row items-start justify-start w-full">
                                        <FaArrowCircleLeft 
                                            className="text-[#26447F] cursor-pointer transition-all duration-75 hover:text-[#5686C9]" 
                                            onClick={() => setForgotPass(false)}
                                        />
                                    </div>
                                    <p className="text-[#5686C9]">Você receberá um e-mail. Confira sua caixa de entrada, lixeira ou spam.</p>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-gray-200 outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                                        required
                                    />
                                    <button className="rounded-full border border-[#5686C9] bg-[#26447F] text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition-transform duration-80 ease-in active:scale-95 focus:outline-none">
                                        Enviar
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="signInForm" // Adicione uma chave única
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="bg-white text-black flex items-center justify-center flex-col p-0 md:p-[0_50px] h-full text-center"
                                >
                                    <h1 className="font-bold text-2xl m-0 text-[#26447F]">Sign in</h1>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-gray-200 text-black outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-gray-200 outline-none focus:border-1 focus:border-blue-300 h-10 p-3 my-2 w-full rounded-md"
                                        required
                                    />
                                    <a href="#" className="text-gray-700 text-sm no-underline my-4" onClick={() => setForgotPass(true)}>
                                        Esqueceu sua senha?
                                    </a>
                                    <button className="rounded-full border border-[#5686C9] bg-[#26447F] text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition-transform duration-80 ease-in active:scale-95 focus:outline-none">
                                        Acessar
                                    </button>
                                </motion.form>
                            )
                        }
                    </AnimatePresence>
                </div>
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100 
                        ${!signIn ? "transform -translate-x-full" : ""}
                    `}
                >
                    <div
                        className={`bg-gradient-to-r from-[#5686C9] to-[#26447F] bg-no-repeat bg-cover bg-left text-white relative left-[-100%] h-full w-[200%] transform 
                            transition-transform duration-600 ease-in-out ${!signIn ? "transform translate-x-1/2" : ""}
                        `}
                    >
                        <div
                            className={`absolute flex items-center justify-center flex-col p-0 md:p-[0_40px] text-center top-0 h-full w-1/2 transform 
                                transition-transform duration-600 ease-in-out ${!signIn ? "transform translate-x-0" : "transform -translate-x-1/5"}
                            `}
                        >
                            <h1 className="font-bold text-2xl m-0">Bem vindo de volta!</h1>
                            <p className="text-sm font-thin leading-5 tracking-wide my-5">
                                Para se manter conectado conosco, faça login com suas informações pessoais
                            </p>
                            <button
                                onClick={() => setSignIn(true)}
                                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition-transform duration-80 ease-in active:scale-95 focus:outline-none"
                            >
                                Sign In
                            </button>
                        </div>
                        <div
                            className={`absolute flex items-center justify-center flex-col p-0 md:p-[0_40px] text-center top-0 h-full w-1/2 right-0 
                                transform transition-transform duration-600 ease-in-out ${!signIn ? "transform translate-x-1/5" : "transform translate-x-0"}
                            `}
                        >
                            <h1 className="font-bold text-2xl m-0">Olá, Amigo!</h1>
                            <p className="text-sm font-thin leading-5 tracking-wide my-5">
                                Insira seus dados pessoais e comece sua jornada conosco
                            </p>
                            <button
                                onClick={() => setSignIn(false)}
                                className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-11 uppercase tracking-wide transition-transform duration-80 ease-in active:scale-95 focus:outline-none"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}