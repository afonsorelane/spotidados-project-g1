 export interface FilterProps{
    selected: "day" | "week" | "month";
    onchange: (filter:"day" | "week" | "month") => void;
}
// className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-2xl border-2 border-purple-300"

export const HistoricFilter = ({selected, onchange}: FilterProps) =>{
    const filterStyle = (isActive:boolean) =>
        `px-4 py-2  text-purple-800 roundend-md rounded-xl font-semibold  ${isActive ? "bg-purple-800  text-white  rounded-xl " : "bg-white text-gray-500"}`;

return(
    <div className=" px-2 py-6 flex justify-center gap-4 mb-4">
<button className={filterStyle(selected==="day")} onClick={() => onchange("day")}>Diário</button>
<button className={filterStyle(selected==="week")} onClick={() => onchange("week")}> semanal</button>
<button className={filterStyle(selected==="month")} onClick={() => onchange("month")}>Mensal</button>
    </div>
);
};


