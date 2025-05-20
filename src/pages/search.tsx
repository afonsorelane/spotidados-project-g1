import { MagnifyingGlass } from "phosphor-react";

import { FooterUser } from "../components/footer-user";

export const Search = () => {
  return (
    <div
      className="flex-col min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <main className="h-screen w-full py-10">
        <div className="flex items-center justify-between px-6 h-[61px] rounded-[16px] border text-lg font-semibold text-white">
          <p>Pesquisar....</p>
          <MagnifyingGlass size={32} />
        </div>
      </main>
      <FooterUser />
    </div>
  );
};



<div>
  <p>
    
  </p>
</div>