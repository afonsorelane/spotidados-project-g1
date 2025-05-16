import { List, Headphones, ChartBar } from 'phosphor-react';

export const Header = () => {
  return (
    <header>
      <div className="w-[247px] h-[61px] rounded-[16px] bg-white flex items-center justify-center">
         <div className="relative w-12 h-12">
      <Headphones
        size={48}
        className="text-black absolute inset-0"
      />
      <ChartBar
        size={20}
        className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
        <h1>Spotidados</h1>
      </div>
      <div>
        <List size={32} color="black" weight="fill" />
      </div>
    </header>
  );
};
