import type { NavLink } from "@/components/layout/SiteHeader";

export const siteData = {
  brandCode: "MLN131",
  navLinks: [
    {
      href: "/",
      label: "Trang chủ",
    },
    {
      href: "/about",
      label: "About Us",
    },
  ] satisfies NavLink[],
  footer: {
    title: "MLN131 Triết học",
    description: "Hỗ trợ sinh viên học tập, nghiên cứu và thảo luận triết học.",
    copyright: "© 2026 MLN - SPST. Mọi quyền được bảo lưu.",
    links: [
      {
        href: "/",
        label: "Về trang chủ",
      },
    ],
  },
} as const;
