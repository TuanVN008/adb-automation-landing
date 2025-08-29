"use client";

const snippet = `#tìm ảnh & click vào màn hình giả lập hoặc điện thoại thật boxphone
anh_can_click = self.gui.check_any(ImagePathAndProps.ANH_CAN_CLICK.value)[2]
if anh_can_click:
    self.tap(anh_can_click[0], anh_can_click[1], 2)

#vuốt màn hình
self.swipe(x0, y0, x1, y1, số lần, tốc độ)

#vòng lặp: why True, while line, for in, ...
`.trim();

export function CodeTeaser() {
  return (
    <section className="container-max py-12 sm:py-16">
      <div className="card p-6">
        <h2 className="text-2xl font-semibold">Các hàm cốt lõi để tạo ra scrip</h2>
        <pre className="mt-4 rounded-xl bg-black/60 ring-1 ring-white/10 p-4 overflow-x-auto text-sm text-slate-200">
{snippet}
        </pre>
      </div>
    </section>
  );
}
