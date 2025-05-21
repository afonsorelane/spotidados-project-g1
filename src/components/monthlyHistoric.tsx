import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  isWithinInterval,
  setMonth,
  setYear,
} from "date-fns";

import { songs } from "../data/songs";
import { listeningHistory } from "../data/userSongs";

type Props = {
  userId: number;
};

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const MonthlyHistory = ({ userId }: Props) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const monthStart = startOfMonth(setMonth(setYear(new Date(), selectedYear), selectedMonth));
  const monthEnd = endOfMonth(monthStart);

  const entries = listeningHistory.filter((entry) => {
    const date = new Date(entry.playedAt);
    return (
      entry.userId === userId &&
      isWithinInterval(date, { start: monthStart, end: monthEnd })
    );
  });

  const detailedSongs = entries
    .map((entry) => {
      const song = songs.find((s) => s.id === entry.songId);
      return song ? { ...song, playedAt: entry.playedAt } : null;
    })
    .filter(Boolean) as ((typeof songs)[0] & { playedAt: string })[];

  const songCount: Record<string, number> = {};
  detailedSongs.forEach((song) => {
    songCount[song.title] = (songCount[song.title] || 0) + 1;
  });

  const rankedSongs = Object.entries(songCount)
    .sort((a, b) => b[1] - a[1])
    .map(([title, plays]) => {
      const song = detailedSongs.find((s) => s.title === title)!;
      return {
        title,
        artist: song.artist,
        plays,
      };
    });

  const totalTime = detailedSongs.reduce((acc, song) => acc + song.duration, 0);
  const uniqueArtists = new Set(detailedSongs.map((s) => s.artist)).size;
  const mostPlayed = rankedSongs[0];

  return (
    <div className="p-4 space-y-6 text-white font-sans">
   
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-100">Histórico Mensal</h1>
      </div>

      
      <div className="flex justify-center gap-1 items-center">
        <button
          onClick={() => setSelectedYear((prev) => prev - 1)}
          className="text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 text-gray-300"
        >
          ← Ano anterior
        </button>
        <span className="text-white font-semibold">{selectedYear}</span>
        <button
          onClick={() => setSelectedYear((prev) => prev + 1)}
          className="text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 text-gray-300"
        >
          Próximo ano →
        </button>
      </div>

     
      <div className="grid grid-cols-4 gap-1 bg-opacity-20 backdrop-blur-md p-1 rounded-xl">
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
        <p className="font-semibold text-purple-700 text-lg">
          Resumo de {months[selectedMonth]} {selectedYear}
        </p>
        <p>
          Total de tempo de escuta:{" "}
          <span className="font-semibold text-purple-700">
            {Math.floor(totalTime / 60)}h{totalTime % 60}min
          </span>
        </p>
        <p>
          Total de artistas ouvidos:{" "}
          <span className="font-semibold text-purple-700">{uniqueArtists}</span>
        </p>
        <p>
          Total de músicas escutadas:{" "}
          <span className="font-semibold text-purple-700">{detailedSongs.length}</span>
        </p>
        <p>
          Música mais ouvida:{" "}
          <span className="font-semibold text-purple-700">
            {mostPlayed ? `${mostPlayed.title} - ${mostPlayed.artist}` : "-"}
          </span>
        </p>
      </div>

   
      <div className="space-y-2">
        {rankedSongs.map((song, index) => (
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
