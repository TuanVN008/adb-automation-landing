"use client";
import { Bot, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container-max py-3 flex flex-wrap items-center justify-between gap-2">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-500/30">
            <Bot className="h-5 w-5 text-cyan-300" />
          </span>
          <p className="font-semibold tracking-tight">ADB Automation Course</p>
        </div>

        {/* Actions: mobile = cột + full width; desktop = hàng ngang */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          <a href="#pricing" className="btn-secondary w-full sm:w-auto text-center">
            Bảng giá
          </a>

          <a
            href="https://zalo.me/0888103645"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ring-1 ring-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition w-full sm:w-auto"
            aria-label="Liên hệ Zalo 0888 103 645"
          >
            <MessageCircle className="h-4 w-4 text-cyan-300" />
            Zalo: 0888 103 645
          </a>
        </div>
      </div>
    </div>
  );
}
