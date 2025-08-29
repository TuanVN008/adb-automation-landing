"use client";
import { curriculum } from "@/lib/data";

export function Curriculum() {
  return (
    <section className="container-max py-12 sm:py-16">
      <h2 className="text-2xl font-semibold">Chương trình huấn luyện</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {curriculum.map((m) => {
          const isFeatured = m.featured === true;
          return (
            <div
              key={m.title}
              className={
                isFeatured
                  ? // Viền gradient + glow
                    "relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_24px_rgba(168,85,247,.35)]"
                  : ""
              }
            >
              <div className={`card p-5 ${isFeatured ? "bg-black/60" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={
                      isFeatured
                        ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300"
                        : "font-semibold"
                    }
                  >
                    {m.title}
                  </h3>
                  {isFeatured && m.badge && (
                    <span className="badge bg-fuchsia-500/20 ring-fuchsia-400/50 text-fuchsia-200">
                      {m.badge}
                    </span>
                  )}
                </div>
                <ul className={`mt-2 list-disc pl-5 text-sm ${isFeatured ? "text-slate-200" : "text-slate-300"}`}>
                  {m.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* Vòng sáng nhịp nhàng */}
              {isFeatured && (
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl glow-ring" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
