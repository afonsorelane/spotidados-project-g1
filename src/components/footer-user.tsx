import { House, User, MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const FooterUser = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-purple-800  text-white flex justify-between">
      <button className="" onClick={() => navigate("/userHistoric")}>
        <House size={32} />
        Início
      </button>
      <button onClick={() => navigate("/userData")}>
        <User size={32} />
        Casa
      </button>
      <button className="flex-col gap-1" onClick={() => navigate("/search")}>
        <MagnifyingGlass size={32} />
        Pesquisar
      </button>
    </footer>
  );
};
