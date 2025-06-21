import { useState } from "react";
import { addDays, format, isSameDay, startOfWeek } from "date-fns";

import { songs } from "../data/songs";
import { listeningHistory } from "../data/userSongs";

type Props = {
  userId: number;
};

export const DailyHistory = ({ userId }: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });

  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    addDays(weekStart, i)
  );

  const entries = listeningHistory.filter(
    (entry) =>
      entry.userId === userId &&
      isSameDay(new Date(entry.playedAt), selectedDate)
  );

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
  const mostPlayed = rankedSongs[0]?.title ?? "-";


  return (
    <div className="p-4 space-y-6 text-white font-sans">
      <div className="flex justify-between items-center bg-opacity-20 backdrop-blur-md p-2">
        <p className="font-semibold text-gray-400 text-lg mb-2">
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
                    : "text-gray-400 hover:bg-white/10"
                }`}
              >
                <p>{format(day, "EEE")}</p>
                <p>{format(day, "d")}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl mb-6 space-y-1 text-gray-600 text-sm border-2 border-purple-300">
        <p className="font-semibold text-purple-700 text-lg">Resumo</p>
        <p>
          Tempo total de escuta:{" "}
          <span className="font-semibold text-purple-700">
            {Math.floor(totalTime / 60)}h{totalTime % 60}min
          </span>
        </p>
        <p>
         Total de artistas ouvidos:{" "}
          <span className="font-semibold text-purple-700">{uniqueArtists}</span>
        </p>
        <p>
          Total de músicas ouvidas:{" "}
          <span className="font-semibold text-purple-700">
            {detailedSongs.length}
          </span>
        </p>
        <p>
         Música mais ouvida:{" "}
          <span className="font-semibold text-purple-700">{mostPlayed}</span>
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
                <p className="font-semibold text-purple-700  text-sm">{song.title}</p>

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
