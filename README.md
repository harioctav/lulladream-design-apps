# LullaDream — Responsive Web App (demo)

Static web app (HTML + CSS + vanilla JS, no build step). Layouts:
- **Desktop ≥ 1200px**: 248px sidebar, 12-column fluid grid
- **Tablet / iPad / foldable 768–1199px**: 88px navigation rail, two-pane player in landscape
- **Mobile < 768px**: bottom navigation

All data is stored in the browser (localStorage). It never connects to the real LullaDream API.

## Device switcher
Tombol **Tampilan** (kanan bawah) untuk melihat app sebagai Desktop, Tablet Landscape, Tablet Portrait / Foldable, atau Mobile — tanpa resize browser. Pilih **Auto** untuk kembali ke ukuran layar asli.

## Features (CRUD)
- **My Story**: create (6-step wizard), read (player + reader), update (edit), delete (with Undo), public/private
- **Voice Recordings**: create (records the microphone if allowed), rename, set default, preview, delete
- **Favorites**, **Recent Activity**, **Notifications**: add / remove / clear
- **Profile**: edit name, child name, email, language (EN / ID), plan, top up coins
- Library: live search, filters (category, country, duration, age), sorting, grid/list view

## Deploy to Vercel
Option A — dashboard: open https://vercel.com/new → "Deploy without Git" / drag the folder (or push this folder to GitHub and import). Framework preset: **Other**. No build command, output directory: `.` (root).

Option B — CLI:
```
npm i -g vercel
cd lulladream-app
vercel        # preview
vercel --prod # production
```

## Run locally
```
npx serve .     # or: python3 -m http.server
```
