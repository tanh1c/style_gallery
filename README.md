# style-gallery

`style-gallery` la mot thu vien tham khao UI style duoc xay dung bang React + TypeScript + Vite. Muc tieu cua du an la cho phep ban duyet nhanh nhieu visual direction khac nhau tren cung mot "product world" de so sanh style, prompt, metadata ky thuat va chat luong trinh bay trong mot giao dien gallery duy nhat.

## Du an nay dang lam gi

Thay vi chi liet ke ten style, app nay:

- Hien thi danh sach cac style UI co the tim kiem va loc.
- Dinh nghia metadata cho tung style: keywords, mau sac, performance, accessibility, mobile friendliness, do phuc tap, AI prompt, CSS keywords.
- Render preview cho tung style bang demo component rieng de ban thay duoc style do trong boi canh landing page, dashboard hoac giao dien san pham.
- Giu mot content universe kha dong nhat (`ViCode`) de viec so sanh giua cac style de dang hon, khong bi nhieu do noise tu content.

## Cau truc chinh

```text
src/
  App.tsx                     # state chinh, search/filter, layout tong
  data/styles.ts              # style catalog metadata
  components/
    Sidebar.tsx               # danh sach style, search, filter
    demoRegistry.ts           # lazy registry cho 67 demo preview
    StylePreview.tsx          # khung preview, details panel, suspense fallback
    demos/*.tsx               # preview rieng cho tung style
  index.css                   # Tailwind v4 theme tokens + base styles
```

## Nhom style hien co

Hien tai gallery dang bao gom 67 style, chia thanh 3 nhom chinh:

- `General`
- `Landing Page`
- `BI/Analytics`

Mot vai vi du tieu bieu:

- Minimalism & Swiss Style
- Hero-Centric Design
- Data-Dense Dashboard
- AI-Native UI
- Vintage Analog / Retro Film

## Cach no hoat dong

1. `src/data/styles.ts` chua metadata cua toan bo style library.
2. `src/App.tsx` quan ly style dang duoc chon cung search va filter.
3. `src/components/Sidebar.tsx` cho phep duyet thu vien theo tu khoa, light/dark support va type.
4. `src/components/demoRegistry.ts` map `style.no` sang demo component duoc lazy-load bang `import.meta.glob`.
5. `src/components/StylePreview.tsx` render demo tuong ung, fallback trong luc load va panel thong tin ky thuat cho style dang xem.
6. Moi file trong `src/components/demos/` la mot mockup/doc lap the hien visual language rieng.

## Tech stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- shadcn/base-nova
- Lucide React
- Geist Variable font

## Chay local

```bash
npm install
npm run dev
```

Mo `http://localhost:5173` trong trinh duyet.

## Build production

```bash
npm run build
```

Ban build se tao output trong thu muc `dist/`.

## Ghi chu ve TypeScript config

Project nay van giu `strict`, `noUnusedLocals` va `noUnusedParameters` o muc bat de tranh code demo bi tich tu import/state thua theo thoi gian.

Neu sau nay ban prototype nhanh mot nhom style moi, co the tam thoi noi rule trong luc sketching, nhung nen don lai truoc khi merge de giu build on dinh.

## Huong phat trien hop ly tiep theo

- Noi nut `Prompt`, `Open`, `Get System` voi logic that su.
- Can nhac gom cac micro-chunk icon/vendor neu ban muon toi uu hon nua cho network waterfall.
- Them screenshot thumbnail hoac cover image cho moi style trong sidebar.
- Viet README cho tung nhom style neu muon bien repo nay thanh design research library ro rang hon.
