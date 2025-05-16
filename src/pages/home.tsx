import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <>
      <main
        className="flex flex-col items-center gap-4 p-4 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
      >
        <div className="w-[247px] h-[61px] rounded-[16px] bg-white">
          <h1>Spotidados</h1>
        </div>
        <div>
          <img src="/img/girl.png" alt="" />
        </div>
        <div className="text-white">
          <p>Veja aqui as musicas</p>
          <p>mais escutadas</p>
          <p>ao redor do mundo</p>
        </div>
        <button>Login</button>
        <section>
          <div></div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  );
};
