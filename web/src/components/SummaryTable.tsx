import { generateDateFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDate = generateDateFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7 //18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDate.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center" key={`${weekDay}-${index}`}>
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDate.map(date => {
          return (
            <HabitDay key={date.toString()} />
          );
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => {
          return (
            <div
              key={index}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          );
        })}
      </div>
    </div >
  );
}