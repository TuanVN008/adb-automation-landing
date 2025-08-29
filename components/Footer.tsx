"use client";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-max py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} ADB Automation Course</div>
        <div className="flex gap-4">
          <a href="#">Điều khoản</a>
          <a href="#">Chính sách</a>
          <a href="#">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
}
