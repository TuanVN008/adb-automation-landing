import type { LucideIcon } from "lucide-react";
import { Terminal, MousePointerClick, Rocket, ShieldCheck } from "lucide-react";

export type ValueProp = { title: string; desc: string; icon: LucideIcon };

export const valueProps: ValueProp[] = [
  { title: "Mã nguồn base tinh gọn", desc: "Plug & play, tách core rõ ràng, dễ mở rộng.", icon: Terminal },
  { title: "Nhận diện hình ảnh chuẩn", desc: "Click đúng nút dù UI thay đổi nhẹ.", icon: MousePointerClick },
  { title: "Đa luồng mượt nhiều thiết bị", desc: "Điều phối, log riêng, không nghẽn.", icon: Rocket },
  { title: "Bảo hành cập nhật", desc: "Theo kịp ADB/giả lập.", icon: ShieldCheck }
];

export const deliverables = [
  "Mã nguồn base kiến trúc chuẩn (ADB, image, scheduler, logging)",
  "Thư viện hàm: tap, swipe, type, waitFor, retry, findImage, ...",
  "Học online 1:1 + kho video bài giảng python cơ bản",
  "Case thực chiến nhiều kịch bản",
  "Phục vụ tự động hóa cho game, mobile app, các nền tảng MXH",
  "Sản xuất kho phần mềm automation, cho thuê theo license key"
];

// 👇 Thêm thuộc tính featured + badge để làm nổi bật Module 5
export type CurriculumItem = {
  title: string;
  points: string[];
  featured?: boolean;
  badge?: string;
};

export const curriculum: CurriculumItem[] = [
  {
    title: "Module 0 — Khởi động",
    points: ["Tổng quan ADB & giả lập", "Cài đặt ADB, PATH, adb devices", "Kết nối LDPlayer/BlueStacks/Boxphone"]
  },
  {
    title: "Module 1 — Hàm cốt lõi",
    points: ["tap(x,y), swipe, type(text)", "back, home, openApp, killApp", "waitFor, sleep, retry"]
  },
  {
    title: "Module 2 — Tìm ảnh & click",
    points: ["Template matching & threshold", "Chụp màn, ROI, đa độ phân giải", "findImage(template).click() & fallback"]
  },
  {
    title: "Module 3 — Vòng lặp & kịch bản",
    points: ["Loop an toàn, guard, break/continue", "Re-attach khi lag/disconnect", "Kịch bản đa bước + lập lịch"]
  },
  {
    title: "Module 4 — Đa phiên & điều phối",
    points: ["Quản lý deviceId/port", "Pool & throttle", "Logging tập trung"]
  },
  {
    title: "Module 5 — Đóng gói exe & tạo license key",
    points: [
      "Đóng gói file cài đặt .exe cho người dùng",
      "Tạo key kích hoạt phần mềm",
      "Bán phần mềm và quản lý khách hàng"
    ],
    featured: true,         // ⭐ làm nổi bật
    badge: "HOT"            // Huy hiệu hiển thị trên card
  }
];

export const pricing = [
  {
    id: "starter",
    tier: "Starter",
    price: "4.986.000đ",
    originalPrice: "10.000.000đ",
    highlights: [
      "Mã nguồn cơ sở + Full Module",
      "Học online 1:1",
      "Cam kết sau 2 giờ: tự viết được chương trình cho người chưa biết gì về code",
      "Hướng dẫn dùng ChatGPT để viết/chỉnh sửa chương trình phức tạp",
      "Hỗ trợ trọn đời"
    ],
    cta: "Mua Starter"
  },
  {
    id: "pro",
    tier: "Pro",
    price: "9.968.000đ",
    originalPrice: "20.000.000đ",
    highlights: [
      "Mã nguồn cơ sở + Full Module",
      "Học online 1:1",
      "Cam kết sau 2 giờ: tự viết được chương trình cho người chưa biết gì về code",
      "Hướng dẫn dùng ChatGPT để viết/chỉnh sửa chương trình phức tạp",
      "Được hỗ trợ trực tiếp làm dự án",
      "Hỗ trợ trọn đời"
    ],
    cta: "Mua Pro",
    recommended: true
  }
];

export const faq = [
  { q: "Cần máy cấu hình thế nào?", a: "CPU 6C/12T trở lên, RAM 16GB+, SSD. Chạy đa phiên sẽ lợi nếu có iGPU/dGPU." },
  { q: "Hỗ trợ giả lập nào?", a: "LDPlayer, BlueStacks, Andoroid Boxphone. Thêm giả lập khác có thể mở rộng theo port/deviceId." }
];

// Video demo (YouTube)
export type DemoVideo = { title: string; url: string };
export const demoVideos: DemoVideo[] = [
  { title: "LDPlayer Demo Video", url: "https://youtu.be/jdRlm7WvSYo" },
  { title: "Boxphone Demo Video", url: "https://youtu.be/mHmF2ognKX0" }
];

// ===== Nội dung học & Cam kết =====
export const learningContent: string[] = [
  "Học cách sử dụng các module & hàm cốt lõi (tap, swipe, type, waitFor, retry, findImage, ...)",
  "Cách thêm tính năng vào giao diện phần mềm: nút, form, hiển thị trạng thái, log",
  "Lắp ghép các hàm để tạo ra một chương trình đơn giản hoàn chỉnh"
];

export const commitments: string[] = [
  "Sau 2 tiếng: tự viết được một chương trình auto đơn giản hoàn chỉnh",
  "Được hướng dẫn sử dụng ChatGPT để viết/chỉnh sửa chương trình phức tạp"
];
