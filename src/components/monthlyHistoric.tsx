export const MonthlyHistory = () => {
  const songs = [
    { week: "1ª Semana", track: "Abana - Dama do Bling", plays: 64 },
    { week: "2ª Semana", track: "Senhor Incrível - Telio", plays: 72 },
    { week: "3ª Semana", track: "Attention - Charlie Puth", plays: 85 },
    { week: "4ª Semana", track: "Falling - Harry Styles", plays: 60 },
  ];

  return (
    <div className="p-4 space-y-6 text-white font-sans">
      {/* Titulo */}
      <div className="flex justify-center">
        <h1 className="bg-white text-purple-800 font-bold px-6 py-2 rounded-md">Mensal</h1>
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
                <div>
                <p className="font-semibold text-purple-700 text-sm">{item.track}</p>
                <p className="text-xs text-gray-500">{item.week}</p>
              </div>
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
