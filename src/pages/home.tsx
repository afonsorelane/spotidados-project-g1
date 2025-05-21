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

      <main className="flex flex-col items-center text-white px-4 py-8">
        {/* Imagem central */}
        <div className="w-[247px] h-[166px] rounded-2xl border border-white overflow-hidden mb-4">
          <img
            src="/img/girl.png"
            alt="Girl listening to music"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Frase de chamada */}
        <div className="text-center mb-6">
          <p className="text-lg font-medium">Veja aqui as músicas</p>
          <p className="text-lg font-medium">mais escutadas</p>
          <p className="text-lg font-medium">ao redor do mundo</p>
        </div>

        {/* Botão de login */}
        <button
          onClick={() => navigate("/login")}
          className="w-[247px] h-[61px] rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 transition mb-10"
        >
          Login
        </button>

        {/* Galeria de artistas */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="w-40 h-56 bg-purple-800 text-white rounded-xl p-3 shadow-lg hover:scale-105 transition-transform"
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
