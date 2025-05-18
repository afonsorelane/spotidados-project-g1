export const DailyHistory = () => {
  const songs = [
    { title: "Abana", artist: "Dama do Bling", plays: 20 },
    { title: "Falling", artist: "Harry Styles", plays: 12 },
    { title: "Senhor Incrível", artist: "Deejay Telio", plays: 9 },
    { title: "  Attention", artist: "Charlie Puth", plays: 4 },
  ];


  return (
    <div className="p-4 space-y-6 text-white font-sans">
      {/* titulo */}
      <div className="flex justify-center">
        <h1 className="bg-white text-purple-800 font-bold px-6 py-2 rounded-md">
          Diário
        </h1>
      </div>

      {/* Lista de músicas */}
      <div className="space-y-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl border-2 border-purple-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-purple-700 font-bold">
                ♫
              </div>
              <div>
                <p className="font-semibold text-purple-700  text-sm">{song.title}</p>
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
