import { useNavigate } from "react-router-dom";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { artists } from "../data/artistis";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <Header />

      <main className="flex flex-col items-center gap-4 p-10 text-white">
        <div className="w-[247px] h-[166px] rounded-[16px] border border-white overflow-hidden">
          <img
            src="/img/girl.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p>Veja aqui as músicas</p>
          <p>mais escutadas</p>
          <p>ao redor do mundo</p>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="w-[247px] h-[61px] rounded-[16px] border-2 border-white text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 transition cursor-pointer"
        >
          Login
        </button>

        <section className="grid grid-cols-2 gap-15 p-6">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="w-40 h-56 bg-neutral-900 text-white rounded-xl p-3 hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-sm font-semibold">{artist.name}</h3>
              <p className="text-xs text-neutral-400">Artista</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};
