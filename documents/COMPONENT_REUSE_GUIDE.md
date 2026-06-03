# Component Reuse Guide

## Mục tiêu tối ưu

Khi tạo page mới, không đặt toàn bộ UI, layout và data trực tiếp trong `page.tsx`.
`page.tsx` chỉ nên đóng vai trò lắp ghép:

- Import section component từ `components/sections`
- Import data tĩnh từ `data/`
- Truyền data vào section

## Rule bắt buộc cho website tĩnh

```txt
page.tsx
→ gọi section

section component
→ map data

card component
→ nhận props

data file
→ chứa nội dung tĩnh
```

Áp dụng:

- `page.tsx`: không `.map()` data list, không viết card markup trực tiếp.
- `components/sections`: nhận data list và `.map()` ra card.
- `components/common`: card nhận props đơn giản như `title`, `description`, `name`, `role`.
- `data/`: chứa toàn bộ nội dung tĩnh của page.

## Cấu trúc đang dùng

```txt
app/
  page.tsx
  about/
    page.tsx

components/
  common/
    CourseCard.tsx
    OverviewCard.tsx
    TeamMemberCard.tsx
  layout/
    SiteHeader.tsx
    SiteFooter.tsx
  sections/
    AboutHeroSection.tsx
    CourseSection.tsx
    GoalsSection.tsx
    HomeHeroSection.tsx
    TeamSection.tsx

data/
  site.ts
  home.ts
  about.ts
```

## Component dùng chung

### `components/layout/SiteHeader.tsx`

Dùng cho phần header ở mọi page.

Props chính:

- `brandCode`: mã hoặc tên ngắn của website
- `title`: tiêu đề page hiện tại
- `navLinks`: danh sách navigation
- `activeHref`: route đang active

Ví dụ:

```tsx
<SiteHeader
  activeHref="/about"
  brandCode={siteData.brandCode}
  navLinks={siteData.navLinks}
  title={aboutPageData.pageTitle}
/>
```

### `components/layout/SiteFooter.tsx`

Dùng cho footer ở mọi page.

Props chính:

- `title`: tên website hoặc module
- `description`: mô tả ngắn
- `copyright`: copyright
- `links`: link phụ, không bắt buộc

Ví dụ:

```tsx
<SiteFooter
  copyright={siteData.footer.copyright}
  description={siteData.footer.description}
  links={siteData.footer.links}
  title={siteData.footer.title}
/>
```

## Data tĩnh

### `data/site.ts`

Chứa dữ liệu dùng chung toàn site:

- Brand
- Navigation
- Footer

Không lặp lại những dữ liệu này trong từng page.

### `data/{page}.ts`

Mỗi page có file data riêng, ví dụ:

- `data/home.ts`
- `data/about.ts`

Chỉ đặt nội dung riêng của page trong file này: hero, danh sách card, thành viên, mục tiêu, v.v.

## Quy trình tạo page mới

1. Tạo route trong `app/{route}/page.tsx`.
2. Tạo file data tương ứng trong `data/{route}.ts`.
3. Tạo section trong `components/sections/{Route}Section.tsx`.
4. Nếu section render danh sách, tạo card trong `components/common/{Item}Card.tsx`.
5. Trong section, `.map()` data và truyền props xuống card.
6. Trong `page.tsx`, chỉ gọi section và layout component.
7. Dùng alias import `@/` thay vì relative import dài.

## Khi nào tách component mới

Tách component khi:

- Một block UI xuất hiện ở từ 2 page trở lên
- Component có nhiều class Tailwind làm page khó đọc
- Component nhận data qua props và có thể tái sử dụng
- Component đại diện cho layout chung như header, footer, page shell

Không cần tách khi:

- UI chỉ xuất hiện một lần
- Tách ra làm code khó đọc hơn
- Component chỉ bọc một thẻ HTML đơn giản

## Pattern đề xuất cho page

```tsx
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ExampleSection from "@/components/sections/ExampleSection";
import { pageData } from "@/data/example";
import { siteData } from "@/data/site";

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        activeHref="/example"
        brandCode={siteData.brandCode}
        navLinks={siteData.navLinks}
        title={pageData.pageTitle}
      />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <ExampleSection items={pageData.items} />
      </main>

      <SiteFooter
        copyright={siteData.footer.copyright}
        description={siteData.footer.description}
        title={siteData.footer.title}
      />
    </div>
  );
}
```

## Pattern đề xuất cho section

```tsx
import ExampleCard from "@/components/common/ExampleCard";

type ExampleSectionProps = {
  items: readonly {
    title: string;
    description: string;
  }[];
};

export default function ExampleSection({ items }: ExampleSectionProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <ExampleCard
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}
```

## Pattern đề xuất cho card

```tsx
type ExampleCardProps = {
  title: string;
  description: string;
};

export default function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
```

## Nguyên tắc duy trì

- Data không đặt trực tiếp trong `page.tsx` nếu có thể đưa vào `data/`.
- Không `.map()` danh sách trong `page.tsx`; hãy map trong section.
- Không viết card trực tiếp trong section nếu card có thể tách riêng.
- Header/footer không viết lại trong từng page.
- Component đặt đúng nhóm:
  - `components/layout`: layout dùng chung như header/footer
  - `components/common`: UI nhỏ dùng lại nhiều nơi
  - `components/sections`: section lớn dùng trong page
- Page nên ngắn, dễ đọc và thể hiện rõ luồng render.
