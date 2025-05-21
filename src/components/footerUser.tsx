import { House, User, MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const FooterUser = () => {
  const navigate = useNavigate();

  return (
    <footer className=" text-white flex justify-around py-2 border-t border-purple-900 shadow-inner">
      <button
        className="flex flex-col items-center text-sm hover:text-purple-200"
        onClick={() => navigate("/userHistoric")}
      >
        <House size={28} weight="bold" />
        Início
      </button>

      <button
        className="flex flex-col items-center text-sm hover:text-purple-200"
        onClick={() => navigate("/userData")}
      >
        <User size={28} weight="bold" />
        Perfil
      </button>

      <button
        className="flex flex-col items-center text-sm hover:text-purple-200"
        onClick={() => navigate("/search")}
      >
        <MagnifyingGlass size={28} weight="bold" />
        Pesquisar
      </button>
    </footer>
  );
};
