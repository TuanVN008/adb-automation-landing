"use client";
import { useEffect, useState } from "react";
import PaymentModal from "@/components/PaymentModal";
import { pricing } from "@/lib/data";

const PROMO_KEY = "promo_deadline_v2";
const PROMO_DAY_KEY = "promo_day_v2";

function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function usePromoCountdown() {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const today = localDateKey();
    const savedDay = localStorage.getItem(PROMO_DAY_KEY);
    const savedDeadline = localStorage.getItem(PROMO_KEY);
    let d = savedDeadline ? Number(savedDeadline) : NaN;

    if (!savedDay || savedDay !== today) {
      d = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(PROMO_DAY_KEY, today);
      localStorage.setItem(PROMO_KEY, String(d));
    } else if (!Number.isFinite(d)) {
      d = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(PROMO_KEY, String(d));
    }

    setDeadline(d);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remainMs = Math.max(0, (deadline ?? 0) - now);
  const hh = Math.floor(remainMs / 1000 / 60 / 60);
  const mm = Math.floor((remainMs / 1000 / 60) % 60);
  const ss = Math.floor((remainMs / 1000) % 60);
  const hhmmss = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  const expired = remainMs <= 0;

  return { hhmmss, expired };
}

export function Pricing() {
  const { hhmmss, expired } = usePromoCountdown();

  // đọc QR từ env — có thể thay bằng URL trực tiếp nếu bạn muốn
  const QR_STARTER = process.env.NEXT_PUBLIC_QR_STARTER || "/qr-starter.png";
  const QR_PRO = process.env.NEXT_PUBLIC_QR_PRO || "/qr-pro.png";

  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<{ tier: string; price: string; qrUrl: string } | null>(null);

  const showModal = (tier: string, price: string, qrUrl: string) => {
    setPlan({ tier, price, qrUrl });
    setOpen(true);
  };

  return (
    <section id="pricing" className="container-max py-12 sm:py-16">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-2xl font-semibold">Chọn gói phù hợp</h2>

        <div className="text-sm">
          {expired ? (
            <span className="badge bg-white/10 ring-white/20 text-slate-300">Hết thời gian khuyến mại</span>
          ) : (
            <span className="badge bg-cyan-500/15 ring-cyan-400/30 text-cyan-200">
              Khuyến mại còn: <b className="ml-1 font-semibold tracking-widest">{hhmmss}</b>
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {pricing.map((p) => {
          const qrUrl = p.id === "starter" ? QR_STARTER : QR_PRO;
          return (
            <div key={p.tier} className={`card p-6 ${p.recommended ? "ring-1 ring-cyan-400/40" : ""}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.tier}</h3>
                {"recommended" in p && (p as any).recommended && <span className="badge">Khuyên dùng</span>}
              </div>

              <div className="mt-2 flex items-baseline gap-3">
                <div className="text-3xl font-bold">{p.price}</div>
                {"originalPrice" in p && (p as any).originalPrice && (
                  <div className="text-sm line-through text-slate-400">{(p as any).originalPrice}</div>
                )}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex gap-2">
                    <span className="kbd">✔</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled={expired}
                onClick={() => showModal(p.tier, p.price, qrUrl)}
                className="btn-primary mt-6 w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {expired ? "Hết khuyến mại" : p.cta}
              </button>
            </div>
          );
        })}
      </div>

      <PaymentModal open={open} onClose={() => setOpen(false)} plan={plan} />
    </section>
  );
}
