import { useNavigate } from "react-router-dom";
import{
    ArrowLeft,
}from "phosphor-react";

export const Register = () => {
    const navigate = useNavigate();
       return(
        
            <div className=" flex justify-between items-center min-h-screen bg-cover bg-center" style=
                {{ backgroundImage: `url('/img/backgroud-img.jpg')` }}>

                <div className=" rounded-md p-8 w-full max-w-md">
                    
                    <div><button className=" flex justify-self-start text-gray-100 cursor-pointer"onClick={() => navigate("/Login")}><ArrowLeft /></button></div>

                    <div>
                        <h1 className = "font-bold text-2xl mt-18 text-gray-100">inscrever-se</h1>
                        <p className="font-normal text-lg mt-4 text-gray-100">Já tem uma conta?  
                            <a href="/login" target="_blank" className="font-medium">
                           <span> faça-login</span></a>
                        </p>
                    </div>

                    <form className="mt-8">
                        <input className="w-full rounded-xl p-6 bg-transparent text-white border mt-5"
                            type="text" placeholder="Primeiro Nome" required/>
                        <input className="w-full rounded-xl p-6 bg-transparent text-white border mt-5"
                            type="text" placeholder="Sobrenome" />
                        <input className="w-full rounded-xl p-6 bg-transparent text-white border mt-5"
                            type="text" placeholder="País" />
                        <input className="w-full rounded-xl p-6 bg-transparent text-white border mt-5"
                            type="email" placeholder="Email ou telefone" />
                        <input className="w-full rounded-xl p-6 bg-transparent text-gray-100 border mt-5"
                            type="password" placeholder="Senha" required/>
                    </form>

                    <div>
                        {/* <button className="w-full bg-gray-900 rounded-xl p-6 mt-4 text-gray-100 text-xl "> */}
                        <button className="w-full rounded-xl p-6 mt-4 text-gray-100 text-lg font-semibold bg-gradient-to-r from-indigo-600 via-purple-500 to-purple-600 hover:brightness-110 transition cursor-pointer">
                          <span> Já tem uma conta?</span>  
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-gray-400 mt-4" >
                           Termos de Uso | Política de Privacidade
                        </p>
                    </div>                    
                </div>
                
            </div>
    
    )
}