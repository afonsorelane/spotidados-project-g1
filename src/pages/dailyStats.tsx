// import { useState } from "react";
// import {CaretLeftIcon } from "@phosphor-icons/react";
// import { startOfWeek, addDays, format, isSameDay } from "date-fns";

// export const DailyStats = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });

//   const weekDays = Array.from({ length: 7 }).map((_, i) =>
//     addDays(weekStart, i)
//   );

//   const topListeners = [
//     { name: "João Massango", plays: 127 },
//     { name: "Nome do Usuário", plays: 115 },
//     { name: "Nome do Usuário", plays: 108 },
//     { name: "Nome do Usuário", plays: 99 },
//     { name: "Nome do Usuário", plays: 93 },
//     { name: "Nome do Usuário", plays: 88 },
//     { name: "Nome do Usuário", plays: 84 },
//     { name: "Nome do Usuário", plays: 81 },
//     { name: "Nome do Usuário", plays: 76 },
//   ];

//   return (
//     <div
//       className="min-h-screen px-4 py-6 text-white"
//       style={{
//         backgroundImage: "linear-gradient(to bottom, #6d28d9, #a855f7)",
//       }}
//     >
//       {/* Cabeçalho */}
//       <div className="flex items-center gap-2 mb-6">
//         <CaretLeftIcon size={24} className="cursor-pointer" />
//         <h1 className="text-xl font-bold">Daily Stats</h1>
//       </div>

//       {/* Navegação de datas */}
//       <div className="bg-white bg-opacity-10 p-4 rounded-xl mb-6">
//         <p className="font-semibold text-lg mb-2">
//           {format(selectedDate, "MMMM, yyyy")}
//         </p>
//         <div className="flex justify-between text-sm">
//           {weekDays.map((day) => {
//             const isActive = isSameDay(day, selectedDate);
//             return (
//               <div
//                 key={day.toISOString()}
//                 onClick={() => setSelectedDate(day)}
//                 className={`cursor-pointer text-center w-10 py-2 rounded-lg ${
//                   isActive
//                     ? "bg-white text-purple-800 font-bold shadow"
//                     : "text-white hover:bg-white/20"
//                 }`}
//               >
//                 <p>{format(day, "EEE")}</p>
//                 <p>{format(day, "d")}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Bloco estatístico */}
//       <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl mb-6 space-y-1 text-sm">
//         <p>
//           Total listening time:{" "}
//           <span className="font-bold text-white">2h43min</span>
//         </p>
//         <p>
//           Total listened artists: <span className="font-bold text-white">8</span>
//         </p>
//         <p>
//           Total listened songs: <span className="font-bold text-white">31</span>
//         </p>
//         <p>
//           Most listened song:{" "}
//           <span className="font-bold text-white">Mc Roger / Patrao</span>
//         </p>
//         <button className="text-sm mt-2 underline text-purple-100 hover:text-white">
//           Expand
//         </button>
//       </div>

//       {/* Ranking de usuários */}
//       <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl">
//         <h2 className="font-bold mb-3">Top Ouvintes</h2>
//         {topListeners.map((user, index) => (
//           <div key={index} className="flex justify-between py-1 text-sm">
//             <p className="flex items-center gap-2">
//               <span className="w-4">{index + 1}º</span> {user.name}
//             </p>
//             <span className="text-purple-200 font-semibold">{user.plays}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
