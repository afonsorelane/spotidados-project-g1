import { useState } from "react";
import {
  startOfMonth,
  addMonths,
  addDays,
  format,
  isSameWeek,
  startOfWeek,
} from "date-fns";

export const WeeklyHistory = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedWeekStart, setSelectedWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );

  const monthStart = startOfMonth(currentMonth);

  const weeks = Array.from({ length: 4 }).map((_, i) =>
    addDays(startOfWeek(monthStart, { weekStartsOn: 0 }), i * 7)
  );

  const getWeekDays = (weekStart: Date) =>
    Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  const songs = [
    { weekDay: "Domingo", title: "Abana", artist: "Dama do Bling", plays: 20 },
    { weekDay: "Segunda-feira", title: "Shape of You", artist: "Ed Sheeran", plays: 18 },
    { weekDay: "Terça-feira", title: "Jerusalema", artist: "Master KG", plays: 15 },
    { weekDay: "Quarta-feira", title: "Ni Txati Mina", artist: "Lizha James", plays: 13 },
    { weekDay: "Quinta-feira", title: "Falling", artist: "Harry Styles", plays: 12 },
    { weekDay: "Sexta-feira", title: "Vão Ter Que Aguentar", artist: "Laylizzy", plays: 10 },
    { weekDay: "Sábado", title: "Senhor Incrível", artist: "Deejay Telio", plays: 9 },
  ];

  return (
    <div className="p-4 space-y-6 text-white font-sans max-w-3xl mx-auto">

      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-purple-100">Histórico Semanal</h1>
      </div>


      <div className="space-y-1 bg-opacity-20 backdrop-blur-md p-1">
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => setCurrentMonth((prev) => addMonths(prev, -1))}
            className="text-sm bg-white/10 px-2 py-1 rounded hover:bg-white/20 text-gray-300"
          >
            ← Mês anterior
          </button>
          <p className="font-semibold text-gray-400 text-sm">
            {format(currentMonth, "MMMM, yyyy")}
          </p>
          <button
            onClick={() => setCurrentMonth((prev) => addMonths(prev, 1))}
            className="text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 text-gray-300"
          >
            Próximo mês →
          </button>
        </div>

       
        <div className="flex justify-between text-sm text-gray-400 px-1">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day) => (
            <div key={day} className="text-center w-10">
              {day}
            </div>
          ))}
        </div>


        {weeks.map((weekStart, index) => {
          const days = getWeekDays(weekStart);
          const isSelected = isSameWeek(weekStart, selectedWeekStart, { weekStartsOn: 0 });

          return (
            <div
              key={index}
              onClick={() => setSelectedWeekStart(weekStart)}
              className={`flex justify-between text-sm rounded-lg px-1 py-1 cursor-pointer ${
                isSelected
                  ? "bg-white text-purple-800 font-bold shadow"
                  : "text-gray-500 hover:bg-white/10"
              }`}
            >
              {days.map((day) => (
                <div key={day.toISOString()} className="text-center w-10">
                  <p>{format(day, "d")}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>


      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl space-y-1 text-sm text-gray-600 border-2 border-purple-300">
        <p className="font-semibold text-purple-700 text-lg">Resumo</p>
        <p>Total de tempo de escuta: <span className="font-semibold text-purple-700">14h50min</span></p>
        <p>Total de artistas ouvidos: <span className="font-semibold text-purple-700">12</span></p>
        <p>Total de músicas escutadas: <span className="font-semibold text-purple-700">64</span></p>
        <p>Música mais ouvida: <span className="font-semibold text-purple-700">Abana - Dama do Bling</span></p>
      </div>


      <div className="space-y-2">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-xl border-2 border-purple-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-purple-700 font-bold">
                ♫
              </div>
              <div>
                <p className="font-semibold text-purple-700 text-sm">
                  {song.title}
                </p>
                <p className="text-xs text-gray-500">
                  {song.artist} — {song.weekDay}
                </p>
              </div>
            </div>
            <div className="bg-white text-purple-800 px-3 py-1 rounded-md font-bold">
              {song.plays}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
