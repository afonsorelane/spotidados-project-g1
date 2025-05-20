export interface FilterProps {
  active: "day" | "week" | "month";
  setActive: (filter: "day" | "week" | "month") => void;
}

export const HistoricFilter = ({ active, setActive }: FilterProps) => {
  const filterStyle = (isActive: boolean) =>
    `px-4 py-2 text-purple-800 rounded-xl font-semibold ${
      isActive ? "bg-purple-800 text-white" : "bg-white text-gray-500"
    }`;

  return (
    <div className="px-2 py-6 flex justify-center gap-4 mb-4">
      <button
        className={filterStyle(active === "day")}
        onClick={() => setActive("day")}
      >
        Diário
      </button>
      <button
        className={filterStyle(active === "week")}
        onClick={() => setActive("week")}
      >
        Semanal
      </button>
      <button
        className={filterStyle(active === "month")}
        onClick={() => setActive("month")}
      >
        Mensal
      </button>
    </div>
  );
};

