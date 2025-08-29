"use client";
import { useEffect, useMemo, useState } from "react";
import { X, Timer, Phone, Banknote } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  plan: { tier: string; price: string; qrUrl: string } | null;
};

export default function PaymentModal({ open, onClose, plan }: Props) {
  const [remain, setRemain] = useState(20 * 60); // 20 phút

  useEffect(() => {
    if (!open) return;
    setRemain(20 * 60);
    const id = setInterval(() => setRemain((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [open]);

  const mmss = useMemo(() => {
    const m = Math.floor(remain / 60).toString().padStart(2, "0");
    const s = Math.floor(remain % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [remain]);

  if (!open || !plan) return null;

  const zaloPhone = process.env.NEXT_PUBLIC_ZALO_PHONE || "0888103645";
  const bank = process.env.NEXT_PUBLIC_BANK_NAME || "Vietcombank";
  const accName = process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME || "TRAN THE TUAN";
  const accNo = process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER || "0491000124453";

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4">
      {/* ↑ tăng rộng modal: max-w-4xl (trước là 2xl) */}
      <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-slate-950/90">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="text-lg font-semibold">
            Thanh toán gói <span className="text-cyan-300">{plan.tier}</span> – {plan.price}
          </div>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-white/10 transition" aria-label="Đóng">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body: tăng khoảng cách + tỉ lệ cột: QR chiếm 2 phần, info 1 phần */}
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6 p-6">
          {/* QR (x2 size) */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            {/* Giới hạn rộng QR ~720px để phóng to ~gấp đôi; vẫn responsive */}
            <div className="relative w-full max-w-[720px] mx-auto">
              <div className="aspect-square">
                <img
                  src={plan.qrUrl}
                  alt={`QR chuyển khoản ${plan.tier}`}
                  className="w-full h-full rounded-lg object-contain bg-white"
                />
              </div>
            </div>
            <div className="mt-3 text-sm text-slate-300">
              Quét QR để thanh toán. Nội dung chuyển khoản:{" "}
              <span className="font-semibold">"{plan.tier} - SĐT Zalo"</span>
            </div>
          </div>

          {/* Info + timer */}
          <div className="flex flex-col gap-3">
            <div className="card p-4">
              <div className="flex items-center gap-2 text-slate-200">
                <Banknote className="h-4 w-4 text-cyan-300" />
                <div className="font-semibold">Thông tin tài khoản</div>
              </div>
              <div className="mt-2 text-sm text-slate-300">
                <div>Ngân hàng: <b>{bank}</b></div>
                <div>Chủ tài khoản: <b>{accName}</b></div>
                <div>Số tài khoản: <b>{accNo}</b></div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-2 text-slate-200">
                <Timer className="h-4 w-4 text-cyan-300" />
                <div className="font-semibold">Thời gian chờ thanh toán</div>
              </div>
              <div className="mt-2 text-3xl font-bold tracking-wider">{mmss}</div>
              <p className="mt-1 text-xs text-slate-400">
                Hết {remain === 0 ? "thời gian" : "20 phút"}? Liên hệ Zalo để được hỗ trợ.
              </p>
            </div>

            <a
              href={`https://zalo.me/${zaloPhone.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              <Phone className="h-4 w-4" />
              Zalo: {zaloPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
