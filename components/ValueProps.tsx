"use client";
import { valueProps } from "@/lib/data";

export function ValueProps() {
  return (
    <section className="container-max py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {valueProps.map((v) => (
          <div key={v.title} className="card p-5">
            <v.icon className="h-5 w-5 mb-3 text-cyan-300" />
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-slate-300 mt-1">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
