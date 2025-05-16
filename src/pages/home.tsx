import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <>
    <Header />
      <main
        className="flex flex-col items-center gap-4 p-10 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
      >
        <div className="w-[247px] h-[166px] rounded-[16px] border-1 border-white text-white">
          <img src="/img/girl.png" alt="" />
        </div>
        <div className="text-white flex flex-col items-center">
          <p>Veja aqui as musicas</p>
          <p>mais escutadas</p>
          <p>ao redor do mundo</p>
        </div>
        <button className="w-[247px] h-[61px] rounded-[16px] border-2 border-white text-white">
          Login
        </button>
        <section>
          <div></div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  );
};
