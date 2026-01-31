import { ClassSession } from "@/data/schedule";

export function ClassCard({ session }: { session: ClassSession }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
          {session.start}
        </p>
        <p className="text-xs text-white/60">{session.durationMin} min</p>
      </div>

      <h3 className="mt-2 text-xl font-black uppercase tracking-tight">
        {session.title}
      </h3>

      <div className="mt-2 flex flex-wrap gap-2 text-sm text-white/70">
        {session.coach && <span>👤 {session.coach}</span>}
        {session.location && <span>📍 {session.location}</span>}
      </div>

      {session.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {session.tags.map(t => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
