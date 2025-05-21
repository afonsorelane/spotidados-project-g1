 import{MagnifyingGlass}from "phosphor-react";
<<<<<<< HEAD
import { FooterUser } from "../components/footerUser";

=======
import { FooterUser } from "../components/FooterUser";
import { useState } from "react";
import { users } from "../data/users";
>>>>>>> origin/CN7

export const Search = () => {
    const [search,setSearch]=useState("");
    
    const usersFilt = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div
      className="flex-col min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <main className="h-screen w-full py-10">
<<<<<<< HEAD
        <div className="flex items-center justify-between px-6 h-[61px] rounded-[16px] border text-lg font-semibold text-white">
          <p>Pesquisar....</p>
          <MagnifyingGlass size={32} />
=======
        <div className="relative w-full max-w-md">
       <input type="search" value={search} onChange={(ev)=>{setSearch(ev.target.value)}} placeholder="Pesquisar" className="flex items-center justify-between px-6 h-[61px] rounded-[16px] border text-lg font-semibold text-white w-full"/>
          <MagnifyingGlass size={32} className="absolute right-5 top-1/2 -translate-y-1/2 text-white" />
>>>>>>> origin/CN7
        </div>
        <ul className="mt-4">
            {search !== "" && usersFilt.length===0 &&(
                <li className="text-red-500">Nenhum usuario encontrado </li>
            )}
            {search !=="" &&
            usersFilt.map((user)=>(
                <li className="text-white" key={user.name}>
                    {user.name}
                </li>
            ))}

        </ul>
      </main>
      <FooterUser />
    </div>
  );
};




