export interface FilterProps {
  active: "day" | "week" | "month";
  setActive: (filter: "day" | "week" | "month") => void;
}

export const HistoricFilter = ({ active, setActive }: FilterProps) => {
  const filterStyle = (isActive: boolean) =>
    `px-4 py-2 rounded-xl font-semibold ${
      isActive ? "bg-purple-800 text-white" : "bg-white text-gray-500"
    }`;

  return (
    <nav
      aria-label="Filtro de Histórico"
      className="px-2 py-4 flex justify-center gap-4 mb-4"
    >
      <button
        type="button"
        className={filterStyle(active === "day")}
        aria-pressed={active === "day"}
        onClick={() => setActive("day")}
      >
        Diário
      </button>
      <button
        type="button"
        className={filterStyle(active === "week")}
        aria-pressed={active === "week"}
        onClick={() => setActive("week")}
      >
        Semanal
      </button>
      <button
        type="button"
        className={filterStyle(active === "month")}
        aria-pressed={active === "month"}
        onClick={() => setActive("month")}
      >
        Mensal
      </button>
    </nav>
  );
};
