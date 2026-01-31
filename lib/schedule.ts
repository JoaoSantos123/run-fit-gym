import { ClassSession } from "@/data/schedule";

export function getTodayDowLisbon(): number {
  const now = new Date();
  // Em PT: Date.getDay() já é 0..6 (Dom..Sáb)
  return now.getDay();
}

export function sortByStart(a: ClassSession, b: ClassSession) {
  return a.start.localeCompare(b.start);
}

export function getTodaySessions(schedule: ClassSession[], dow: number) {
  return schedule.filter(s => s.dow === dow).sort(sortByStart);
}

export function groupByDow(schedule: ClassSession[]) {
  const map = new Map<number, ClassSession[]>();
  for (const s of schedule) {
    const arr = map.get(s.dow) ?? [];
    arr.push(s);
    map.set(s.dow, arr);
  }
  for (const [k, arr] of map.entries()) {
    map.set(k, arr.sort(sortByStart));
  }
  return map;
}
