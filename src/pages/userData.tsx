import { useEffect, useState } from "react";
import { users } from "../data/users";
import { FooterUser } from "../components/FooterUser";

export const UserData = () => {
  const [user, setUser] = useState<null | (typeof users)[0]>(null);

  useEffect(() => {
    const userId = localStorage.getItem("loggedUserId");
    if (userId) {
      const foundUser = users.find((u) => u.id === Number(userId));
      setUser(foundUser || null);
    }
  }, []);

  if (!user) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
      >
        <p className="text-red-500 text-lg font-semibold bg-opacity-70 px-4 py-2 rounded shadow">
          Usuário não encontrado ou não logado.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center px-4 sm:px-6 lg:px-8"
         style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <main className="flex-grow flex items-center justify-center py-10">
        <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-purple-800 mb-4 text-center">
            Meu Perfil
          </h1>
          <div className="space-y-2 text-gray-700 text-base">
            <p>
              <strong>Nome:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Telefone:</strong> {user.phone}
            </p>
          </div>
        </div>
      </main>
      <FooterUser />
    </div>
  );
};
