import { useState } from "react";
//import {CaretLeftIcon } from "@phosphor-icons/react";
import { startOfWeek, addDays, format, isSameDay } from "date-fns";

export const DailyStats = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });

  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    addDays(weekStart, i)
  );


    const songs = [
    { title: "Abana", artist: "Dama do Bling", plays: 20 },
    { title: "Falling", artist: "Harry Styles", plays: 12 },
    { title: "Senhor Incrível", artist: "Deejay Telio", plays: 9 },
  ];

  return (
    // <div
    //   className="min-h-screen px-4 py-6 text-white"
    //   style={{
    //     backgroundImage: "linear-gradient(to bottom, #6d28d9, #a855f7)",
    //   }}
    // >
    //  <div
    //   className="min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
    //   style={{ backgroundImage: `url('/img/backgroud-img.jpg')` }}
    // >


     <div className="p-4 space-y-6 text-gray-500 font-sans">
      {/* <div className="flex justify-center">
        <h1 className="text-xl font-bold">Histórico Diário</h1>
      </div> */}

    
       <div className="flex justify-center py-4">
        <h1 className="text-xl font-bold">Histórico Diário</h1>
      </div>

      
      <div className="bg-white bg-opacity-10 p-4 rounded-xl mb-6">
        <p className="font-semibold  text-gray-500 text-lg mb-2">
          {format(selectedDate, "MMMM, yyyy")}
        </p>
        <div className="flex justify-between text-sm">
          {weekDays.map((day) => {
            const isActive = isSameDay(day, selectedDate);
            return (
              <div
                key={day.toISOString()}
                onClick={() => setSelectedDate(day)}
                className={`cursor-pointer text-center w-10 py-2 rounded-lg ${
                  isActive
                    ? "bg-white text-purple-800 font-bold shadow"
                    : " text-gray-500 hover:bg-white/20"
                }`}
              >
                <p>{format(day, "EEE")}</p>
                <p>{format(day, "d")}</p>
              </div>
            );
          })}
        </div>
      </div>

    
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl mb-6 space-y-1   text-gray-500 text-sm">
        <p>
          Tempo total de escuta:{" "}
          <span className="font-bold text-purple-700">2h43min</span>
        </p>
        <p>
         Total de artistas ouvidos: <span className="font-bold text-purple-700">8</span>
        </p>
        <p>
          Total de músicas ouvidas: <span className="font-bold text-purple-700">31</span>
        </p>
        <p>
          Most listened song:{" "}
          <span className="font-bold text-purple-700">Mc Roger / Patrao</span>
        </p>
   
      </div>


      <div className="space-y-2">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-xl border-2 border-purple-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-purple-700 font-bold">
                ♫
              </div>
              <div>
                <p className="font-semibold text-purple-700 text-sm">
                  {song.title}
                </p>
                <p className="text-xs text-gray-500">{song.artist}</p>
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