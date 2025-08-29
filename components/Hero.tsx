"use client";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Video } from "lucide-react";
import BackgroundSlider from "@/components/BackgroundSlider";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85svh] lg:min-h-[100vh] flex items-center">
      {/* Nền slide ảnh 3s/lần */}
      <BackgroundSlider
        images={[
          "/hero/bg1.png",
          "/hero/bg2.jpg",
          "/hero/bg3.jpg"
        ]}
        interval={3000}
        blur={0}         // độ mờ nền
        darken={0.8}    // tối nền để chữ nổi hơn
      />

      <div className="container-max py-20 sm:py-28">
        <div className="max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-extrabold tracking-tight leading-[1.05]
                      text-[clamp(2.25rem,4.2vw+1rem,5.2rem)]
                      sm:text-[clamp(3rem,3.8vw+1rem,6.2rem)]
                      space-y-2 sm:space-y-3 lg:space-y-4"
          >
            <span className="block">Tự động hóa mọi thao tác</span>
            <span className="block">
              trên giả lập với{" "}
              <span className="text-gradient-shimmer text-glow stroke-subtle whitespace-nowrap">
                5GEN ADB AUTOMATION
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-slate-300 max-w-2xl"
          >
            Học online 1:1 kèm <b>mã nguồn base</b> + <b>thư viện hàm</b> +{" "}
            <b>case thực chiến</b> cho LDPlayer/BlueStacks/Boxphone và nhiều dạng giả lập khác.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400"
          >
            <span className="badge"><ShieldCheck className="h-3.5 w-3.5" /> Hỗ trợ trọn đời</span>
            <span className="badge">🎥 Học online 1:1</span>
            <span className="badge">🔗 Chạy nhiều thiết bị cùng lúc</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
