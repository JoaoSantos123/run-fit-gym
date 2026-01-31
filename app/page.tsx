import {ScheduleToday} from "@/components/schedule/ScheduleToday";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero/hero-poster.jpg"
        >
          <source src="/hero/hero.webm" type="video/webm" />
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-black italic uppercase tracking-tight md:text-7xl">
              ULTRAPASSA OS TEUS LIMITES
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
              Treino funcional e corrida de alta performance — com acompanhamento
              e comunidade.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/horarios"
                className="rounded-lg bg-brand-yellow px-6 py-4 text-center font-bold text-brand-black transition-transform hover:scale-[1.01]"
              >
                Ver horários
              </a>
              <a
                href="#contactos"
                className="rounded-lg border border-white/20 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust bullets */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-widest text-white/70">
              <span>Aulas diárias</span>
              <span>Foco em corrida</span>
              <span>Eventos mensais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections (já deixo estrutura) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-black uppercase tracking-tight">Próximos eventos</h2>
        <p className="mt-2 text-white/70">
          (A seguir ligamos isto ao calendário com countdown.)
        </p>
      </section>
      
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Horários</h2>
            <p className="mt-2 text-white/70">Hoje</p>
          </div>
          <a href="/horarios" className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Ver completos →
          </a>
        </div>

        <ScheduleToday limit={4} />
      </section>

      <section id="contactos" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl font-black uppercase tracking-tight">Contactos</h2>
        <p className="mt-2 text-white/70">
          (WhatsApp + Instagram + mapa.)
        </p>
      </section>
    </main>
  );
}
