import { useState } from "react"

import { HistoricFilter } from "../components/historicFilter"
import { DailyHistory } from "../components/dailyHistory"
import { MonthlyHistory } from "../components/monthlyHistoric"
import { WeeklyHistory } from "../components/weeklyHistory"


export const UserHistoric = () => {

    const[selectedFilter, setSelectedFilter] = useState<"day"|"week"|"month">("day")
      
    let historicFilterComponent
     switch (selectedFilter) {
            case "day":
                historicFilterComponent = <DailyHistory />;
                break
        
            case "week":
                historicFilterComponent = <WeeklyHistory/>;
                break

            case "month":
                historicFilterComponent = <MonthlyHistory/>;
        }

       return(
        <>
        <h1 className="text-2xl font bold text-cyan-700 mb-4">Histórico do Usuário</h1>
        <HistoricFilter selected={selectedFilter} onchange={setSelectedFilter}/>
        {historicFilterComponent}
        
       
        </>
    )
}