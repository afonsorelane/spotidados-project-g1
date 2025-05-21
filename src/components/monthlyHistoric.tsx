import { useState } from "react";

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const MonthlyHistory = () => {
  const currentMonthIndex = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);


  const songs = [
    { title: "Abana", artist: "Dama do Bling", plays: 42 },
    { title: "Shape of You", artist: "Ed Sheeran", plays: 35 },
    { title: "Ni Txati Mina", artist: "Lizha James", plays: 40 },
    { title: "Falling", artist: "Harry Styles", plays: 32 },
    { title: "Vão Ter Que Aguentar", artist: "Laylizzy", plays: 38 },
    { title: "Senhor Incrível", artist: "Deejay Telio", plays: 29 },
    { title: "Jerusalema", artist: "Master KG", plays: 41 },
    { title: "Attention", artist: "Charlie Puth", plays: 30 },
  ];

  const mostPlayed = songs.reduce((top, song) => song.plays > top.plays ? song : top, songs[0]);

  return (
    <div className="p-4 space-y-6 text-white font-sans">

      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-100">Histórico Mensal</h1>
      </div>

  
      <div className="grid grid-cols-3 gap-2 bg-opacity-20 backdrop-blur-md p-2 rounded-xl">
        
        {months.map((month, index) => {
          const isActive = index === selectedMonth;
          return (
            <div
              key={month}
              onClick={() => setSelectedMonth(index)}
              className={`cursor-pointer text-center py-2 rounded-lg text-sm ${
                isActive
                  ? "bg-white text-purple-800 font-bold shadow"
                  : "text-gray-400 hover:bg-white/10"
              }`}
            >
              {month}
            </div>
          );
        })}
      </div>

   
      
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl space-y-1 text-sm text-gray-600 border-2 border-purple-300">
        <p className="font-semibold text-purple-700 text-lg">Resumo de {months[selectedMonth]}</p>
        <p>Total de tempo de escuta: <span className="font-semibold text-purple-700">72h35min</span></p>
        <p>Total de artistas ouvidos: <span className="font-semibold text-purple-700">30</span></p>
        <p>Total de músicas escutadas: <span className="font-semibold text-purple-700">{songs.length}</span></p>
        <p>Música mais ouvida: <span className="font-semibold text-purple-700">
          {mostPlayed.title} - {mostPlayed.artist}
        </span></p>
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
                <p className="font-semibold text-purple-700 text-sm">{song.title}</p>
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
