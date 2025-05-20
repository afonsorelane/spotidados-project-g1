// import { startOfWeek, addDays, format, isSameDay } from "date-fns";

// interface CalendarWeekProps {
//   selectedDate: Date;
//   onChange: (date: Date) => void;
// }

// export const CalendarWeek = ({ selectedDate, onChange }: CalendarWeekProps) => {
//   const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 }); // começa domingo
//   const days = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

//   return (
//     <div className="bg-white bg-opacity-10 p-4 rounded-xl mb-6">
//       <p className="font-semibold text-lg mb-2 text-purple-100">
//         {format(selectedDate, "MMMM, yyyy")}
//       </p>
//       <div className="flex justify-between text-sm text-white">
//         {days.map((day) => {
//           const isActive = isSameDay(day, selectedDate);
//           return (
//             <div
//               key={day.toISOString()}
//               onClick={() => onChange(day)}
//               className={`cursor-pointer text-center w-10 py-2 rounded-lg transition-all ${
//                 isActive
//                   ? "bg-white text-purple-800 font-bold shadow-md"
//                   : "text-white hover:bg-white/20"
//               }`}
//             >
//               <p>{format(day, "EEE")}</p>
//               <p>{format(day, "d")}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

