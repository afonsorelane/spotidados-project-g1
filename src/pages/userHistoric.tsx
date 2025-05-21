import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { users } from "../data/users";
import { HistoricFilter } from "../components/historicFilter";
import { DailyHistory } from "../components/dailyHistory";
import { WeeklyHistory } from "../components/weeklyHistory";
import { FooterUser } from "../components/footerUser";
import { MonthlyHistory } from "../components/monthlyHistoric";

export const UserHistoric = () => {
  const [active, setActive] = useState<"day" | "week" | "month">("day");
  const [userId, setUserId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("loggedUserId");
    if (storedUserId) {
      const id = parseInt(storedUserId);
      setUserId(id);

      const user = users.find((u) => u.id === id);
      if (user) setUserName(user.name);
    } else {
      navigate("/login");
    }
  }, []);

  if (!userId) {
    return (
      <p className="text-white text-center mt-10">Autenticação necessária.</p>
    );
  }

  let historicFilterComponent;
  switch (active) {
    case "day":
      historicFilterComponent = <DailyHistory userId={userId} />;
      break;
    case "week":
      historicFilterComponent = <WeeklyHistory userId={userId} />;
      break;
    case "month":
      historicFilterComponent = <MonthlyHistory userId={userId} />;
      break;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    >
      <main>
        <h1 className="px-2 py-5 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-purple-100 mb-6">
          Histórico de {userName ?? "Usuário"}
        </h1>

        <HistoricFilter active={active} setActive={setActive} />
        {historicFilterComponent}
      </main>

      <FooterUser />
    </div>
  );
};
