 export interface FilterProps{
    selected: "day" | "week" | "month";
    onchange: (filter:"day" | "week" | "month") => void;
}

export const HistoricFilter = ({selected, onchange}: FilterProps) =>{
    const filterStyle = (isActive:boolean) =>
        `px-4 py-2 roundend-md font mediun ${isActive ? "bg-cyan-700 text-white" : "BG-gray text-gray-700"}`;

return(
    <div className=" flex gap-4 mb-6">
<button className={filterStyle(selected==="day")} onClick={() => onchange("day")}>Diário</button>
<button className={filterStyle(selected==="week")} onClick={() => onchange("week")}> semanal</button>
<button className={filterStyle(selected==="month")} onClick={() => onchange("month")}>Mensal</button>
    </div>
);
};

