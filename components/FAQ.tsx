"use client";
import { faq } from "@/lib/data";

export function FAQ() {
  return (
    <section className="container-max py-12 sm:py-16">
      <h2 className="text-2xl font-semibold">FAQ</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {faq.map((f) => (
          <div key={f.q} className="card p-5">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-sm text-slate-300 mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
