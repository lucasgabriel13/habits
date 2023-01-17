import { Habit } from "./components/Habit";

export function App() {
  return (
    <div className="w-screen h-screen bg-violet-800 flex items-center justify-center gap-1">
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
    </div>
  )
}
