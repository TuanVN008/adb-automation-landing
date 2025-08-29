"use client";
import React from "react";

export function StickyCTA() {
  const goPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // phòng khi section chưa mount (fallback)
      window.location.hash = "pricing";
    }
  };

  return (
    <div className="sticky bottom-3 z-40">
      <div className="container-max">
        <div className="card px-4 py-3 flex items-center justify-between">
          <div className="text-sm text-slate-300">
            Sẵn sàng tự động hóa? Nhận mã nguồn và học ngay hôm nay.
          </div>
          <a href="#pricing" onClick={goPricing} className="btn-primary">
            Mua ngay
          </a>
        </div>
      </div>
    </div>
  );
}
