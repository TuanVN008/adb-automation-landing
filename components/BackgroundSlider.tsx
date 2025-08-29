"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Src = string | StaticImageData;

type Props = {
  images: Src[];
  interval?: number;         // ms, mặc định 3000
  className?: string;
  blur?: number;             // px, ví dụ 2, 4
  darken?: number;           // 0..1, ví dụ 0.45
};

export default function BackgroundSlider({
  images,
  interval = 3000,
  className,
  blur = 0,
  darken = 0
}: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images?.length) return null;

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className ?? ""}`} aria-hidden>
      {images.map((src, i) => (
        <Image
          key={(typeof src === "string" ? src : src.src) + i}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          /* blur ảnh + scale nhẹ để tránh viền mờ */
          style={{ filter: blur ? `blur(${blur}px)` : undefined, transform: blur ? "scale(1.02)" : undefined }}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* lớp tối để nổi chữ */}
      {darken > 0 && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${Math.min(Math.max(darken, 0), 1)})` }}
        />
      )}

      {/* Grid overlay mờ giữ style cũ (tuỳ thích) */}
      <div className="absolute inset-0 opacity-20 bg-grid-tech [background-size:20px_20px]" />
    </div>
  );
}
