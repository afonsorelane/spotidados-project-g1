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


        <h1 className="  px-2 py-5  flex justify-center text-2xl font bold text-purple-800 mb-4">Histórico do Usuário</h1>
        <HistoricFilter selected={selectedFilter} onchange={setSelectedFilter}/>
        {historicFilterComponent}
        
       
        </>
    )
}