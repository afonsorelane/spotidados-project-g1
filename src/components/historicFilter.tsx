 export interface TabProps{
    selected: "day" | "week" | "month";
    onchange: (tab:"day" | "week" | "month") => void;
}

export const HistoricTabs = ({selected, onchange}: TabProps) =>{
    const tabStyle = (isActive:boolean) =>
        `px-4 py-2 roundend-md font mediun ${isActive ? "bg-cyan-700 text-white" : "BG-gray text-gray-700"}`;

return(
    <div className=" flex gap-4 mb-6">;
<button className={tabStyle(selected==="day")} onClick={() => onchange("day")}>Diário</button>;
<button className={tabStyle(selected==="week")} onClick={() => onchange("week")}> semanal</button>;
<button className={tabStyle(selected==="month")} onClick={() => onchange("month")}>Mensal</button>;
    </div>
);
};

