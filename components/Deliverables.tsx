"use client";
import { deliverables } from "@/lib/data";

export function Deliverables() {
  return (
    <section className="container-max py-12 sm:py-16">
      <div className="card p-6">
        <h2 className="text-2xl font-semibold">Bạn nhận được gì?</h2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-200">
          {deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span className="kbd mt-1">✔</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
