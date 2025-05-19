import { Headphones, ChartBar } from "phosphor-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-10">
      <div className="flex-1 flex justify-center">
        <div className="w-[247px] h-[61px] rounded-[16px] bg-white flex items-center justify-center">
          <h1 className="ml-2 font-bold text-black text-lg">Spotidados</h1>
          <div className="relative w-12 h-12">
            <Headphones size={48} className="text-black absolute inset-0" />
            <ChartBar
              size={20}
              className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
