import { MagnifyingGlass } from "phosphor-react";
import { FooterUser } from "../components/footerUser";
import { useState } from "react";
import { users } from "../data/users";

export const Search = () => {
  const [search, setSearch] = useState("");

  const usersFilt = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="flex-col min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <main className="w-full py-10">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              placeholder="Pesquisar usuário..."
              className="w-full px-5 py-4 pr-12 rounded-[16px] border text-lg font-semibold text-white bg-transparent placeholder-white"
            />
            <MagnifyingGlass
              size={24}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            />
          </div>
        </div>

        <ul className="mt-6 px-4">
          {search !== "" && usersFilt.length === 0 && (
            <li className="text-red-500">Nenhum usuário encontrado.</li>
          )}
          {search !== "" &&
            usersFilt.map((user) => (
              <li className="text-white" key={user.id}>
                {user.name}
              </li>
            ))}
        </ul>
      </main>
      <FooterUser />
    </div>
  );
};
