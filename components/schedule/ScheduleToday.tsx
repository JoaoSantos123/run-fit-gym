import schedule from "@/content/schedule.json";
const SCHEDULE = schedule.sessions;
import { ClassCard } from "./ClassCard";

export function ScheduleToday({ limit = 4 }: { limit?: number }) {

  if (SCHEDULE.length === 0) {
    return <p className="mt-4 text-white/70">Hoje não há aulas marcadas.</p>;
  }

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {SCHEDULE.map(s => <ClassCard key={s.id} session={s} />)}
    </div>
  );
}
