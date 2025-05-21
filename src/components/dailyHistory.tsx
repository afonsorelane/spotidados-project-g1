import { useState } from "react";
import { startOfWeek, addDays, format, isSameDay } from "date-fns";
  
   export const DailyHistory = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });
  
    const weekDays = Array.from({ length: 7 }).map((_, i) =>
      addDays(weekStart, i)
    );

      const songs = [
        { title: "Abana", artist: "Dama do Bling", plays: 20 },
        { title: "Shape of You", artist: "Ed Sheeran", plays: 18 },
        { title: "Jerusalema", artist: "Master KG", plays: 15 },
        { title: "Ni Txati Mina", artist: "Lizha James", plays: 13 },
        { title: "Falling", artist: "Harry Styles", plays: 12 },
        { title: "Vão Ter Que Aguentar", artist: "Laylizzy", plays: 10 },
        { title: "Senhor Incrível", artist: "Deejay Telio", plays: 9 },
        { title: "Attention", artist: "Charlie Puth", plays: 7 },
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
  
  
        <div className="p-4 space-y-6 text-white font-sans">
     
  
        {/* Cabeçalho */}
        <div className="flex justify-center">
        <h1 className="text-2xl  font-bold">Histórico Diário</h1>
      </div>
  
        {/* Navegação de datas */}
         {/* <div className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-xl border-2 border-purple-300"> */}
        <div className="flex justify-between items-center  bg-opacity-20 backdrop-blur-md p-2 ">
          <p className="font-semibold  text-gray-400 text-lg mb-2">
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
                      : " text-gray-400 hover:bg-white/10"
                  }`}
                >
                  <p>{format(day, "EEE")}</p>
                  <p>{format(day, "d")}</p>
                </div>
              );
            })}
          </div>
        </div>
  

  
        {/* resume */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl mb-6 space-y-1   text-gray-600 text-sm border-2 border-purple-300">
            <p className="font-semibold text-purple-700 text-lg">
            Resume
          </p>
          <p>
            Total listening time:{" "}
            <span className="font-semibold text-purple-700">2h43min</span>
          </p>
          <p>
            Total listened artists: <span className="font-semibold text-purple-700">8</span>
          </p>
          <p>
            Total listened songs: <span className="font-semibold text-purple-700">31</span>
          </p>
          <p>
            Most listened song:{" "}
            <span className="font-semibold text-purple-700">Mc Roger / Patrao</span>
          </p>
     
        </div>
  
        {/* Ranking das musicas */}
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
  