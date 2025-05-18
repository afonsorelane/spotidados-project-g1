import { useState } from "react"

//import { Header } from "../components/header"
//
// import { Footer } from "../components/footer"
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
    <div
       className="min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
        {/* <Header /> */}

        <main>
        <h1 className=" px-2 py-18 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-purple-100 mb-6">
          Histórico do Usuário
        </h1>
        <HistoricFilter selected={selectedFilter} onchange={setSelectedFilter}/>
        {historicFilterComponent}
        </main>
        
       {/* <Footer /> */}

    </div>
    )
}