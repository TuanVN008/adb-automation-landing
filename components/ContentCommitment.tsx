"use client";
import { BookOpenText, ShieldCheck, Wand2 } from "lucide-react";
import { learningContent, commitments } from "@/lib/data";

export function ContentCommitment() {
  return (
    <section className="container-max py-12 sm:py-16">
      <h2 className="text-2xl font-semibold">Nội dung học & Cam kết</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {/* Nội dung học */}
        <div className="card p-6">
          <div className="flex items-center gap-2">
            <BookOpenText className="h-5 w-5 text-cyan-300" />
            <h3 className="font-semibold">Nội dung học</h3>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {learningContent.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="kbd mt-0.5">✔</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cam kết */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400">
          <div className="rounded-[14px] bg-black/60 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-fuchsia-300" />
              <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300">
                Cam kết kết quả
              </h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {commitments.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="kbd mt-0.5">★</span>
                  <span>{t}</span>
                </li>
              ))}
              <li className="flex gap-2">
                <Wand2 className="h-4 w-4 mt-0.5 text-purple-300" />
                <span>
                  Hướng dẫn dùng <b>ChatGPT</b> để phân rã yêu cầu, thiết kế thuật toán, sinh code và refactor chương trình
                  phức tạp.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
