export const WeeklyHistory = () => {
  const songs = [
    { weekDay: "Segunda-feira", track: "Abana - Dama do Bling", plays: 22 },
    { weekDay: "Terça-feira", track: "Senhor Incrível - Telio", plays: 17 },
    { weekDay: "Quarta-feira",track: "Falling - Harry Styles", plays: 4 },
    { weekDay: "Quinta-feira",track: "Attention - Charlie Puth", plays: 4 },
  ];

  return (
    <div className="p-4 space-y-6 text-white font-sans">
      {/* titulo */}
      <div className="flex justify-center">
        <h1 className="bg-white text-purple-800 font-bold px-6 py-2 rounded-md">Semanal</h1>
      </div>

      {/* Lista de músicas */}
      <div className="space-y-4">
        {songs.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl border-2 border-purple-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-purple-700 font-bold">
                ♫
              </div>
              <div>
                <p className="font-semibold text-purple-700 text-sm">{item.track}</p>
                <p className="text-xs text-gray-500">{item.weekDay}</p>
              </div>
            </div>
            <div className="bg-white text-purple-800 px-3 py-1 rounded-md font-bold">
              {item.plays}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
