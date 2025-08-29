"use client";
import { demoVideos } from "@/lib/data";

/** Nhận cả link YouTube đầy đủ hoặc chỉ ID */
function getYouTubeEmbed(u: string) {
  const m = u.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  const id = m ? m[1] : u;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
}

export function Showcase() {
  // Lấy 2 video đầu trong data.ts (đổi thứ tự ở data.ts nếu muốn video nào hiện)
  const videos = demoVideos.slice(0, 2);
  if (videos.length === 0) return null;

  return (
    <section id="showcase" className="container-max py-12 sm:py-16">
      <div className={`grid gap-6 ${videos.length > 1 ? "md:grid-cols-2" : ""}`}>
        {videos.map((v) => (
          <div key={v.title} className="card p-0 overflow-hidden">
            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full"
                src={getYouTubeEmbed(v.url)}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="px-5 py-4 text-sm text-slate-300">{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
