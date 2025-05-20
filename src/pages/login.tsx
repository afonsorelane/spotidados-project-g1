import { useState } from "react";
import { ArrowLeft, Lock, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { users } from "../data/users";

export const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        (user.email === identifier || user.phone === identifier) &&
        user.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedUserId", String(foundUser.id));
      navigate("/userHistoric", { state: { userName: foundUser.name } });
    } else {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <div>
        <div>
          <header className="text-white flex justify-between mb-4">
            <button
              className="flex items-center gap-1"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={20} />
            </button>
            <a href="/register" className="hover:underline">
              Sign up
            </a>
          </header>
        </div>

        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl text-white font-bold text-center mb-6">
            Login
          </h1>

          <div className="mb-4">
            <label className="flex items-center text-gray-300 text-sm mb-1">
              <User className="mr-2" />
              Email ou Número
            </label>
            <input
              className="w-full bg-transparent border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="text"
              placeholder="Email /Numero"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center text-white text-sm mb-1">
              <Lock className="mr-2" />
              Senha
            </label>
            <input
              className="w-full bg-transparent border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center mb-6 text-sm text-white">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Lembre-me
            </label>
            <a href="#" className="text-white hover:underline">
              Esqueceu sua senha?
            </a>
          </div>

          {error && (
            <div className="text-red-400 text-sm mb-3 text-center">{error}</div>
          )}

          {loggedInUser && (
            <div className="text-green-400 text-sm mb-3 text-center">
              Bem-vindo(a), {loggedInUser}!
            </div>
          )}

          <button
            className="w-full text-white text-lg font-semibold py-2 mb-4 rounded bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 transition cursor-pointer"
            type="submit"
          >
            Log In
          </button>

          <div className="text-center mb-4 text-white">ou</div>

          <button
            type="button"
            className="w-full py-2 border text-white border-gray-50 rounded hover:bg-gray-100 hover:text-black transition"
          >
            Entrar com Facebook
          </button>

          <p className="text-center mt-6 text-sm text-white">
            Ainda não tem conta?{" "}
            <a href="/register" className="text-violet-400 hover:underline">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
    )
}