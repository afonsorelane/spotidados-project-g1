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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Usuário não encontrado ou não logado.</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <main
        className="fex-1 min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
      >
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4">Meu Perfil</h1>
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
      </main>
      <FooterUser />
    </div>
  );
};
