export type ClassSession = {
  id: string;
  title: string;
  coach?: string;
  dow: number; // 0=Sun ... 6=Sat
  start: string; // "19:00"
  durationMin: number;
  location?: string;
  tags?: string[]; // ["corrida", "iniciante"]
};

export const SCHEDULE: ClassSession[] = [
  { id: "mon-corrida-1900", title: "Corrida (Técnica)", coach: "Rui", dow: 5, start: "19:00", durationMin: 60, tags: ["corrida"] },
  { id: "tue-funcional-1830", title: "Funcional", coach: "Ana", dow: 5, start: "18:30", durationMin: 60, tags: ["funcional"] },
  { id: "wed-corrida-0700", title: "Corrida (Intervalos)", coach: "Rui", dow: 5, start: "07:00", durationMin: 60, tags: ["corrida"] },
];
