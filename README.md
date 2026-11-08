# the nanas daily — special edition 🍍💌

React + Vite + TypeScript + Tailwind v4.

## jalanin
```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil di folder dist/ (siap upload ke netlify)
```

## ganti konten
Semua teks, password, soal kuis (11 soal), caption journey, surat monthversary & wisuda ada di **`src/content.ts`**.

## taruh file
| file | lokasi |
|---|---|
| foto cover | `public/photos/cover.jpg` |
| 11 foto journey | `public/photos/journey/1.jpg` … `11.jpg` |
| foto wisuda | `public/photos/wisuda/1.jpg` … `8.jpg` (jumlah bisa diubah di content.ts) |
| foto kado | `public/photos/kado.jpg` |
| lagu 1 "sign of the times" (setelah password) | `public/music/lagu-1.mp3` |
| lagu 2 "semua aku dirayakan" (setelah claim reward) | `public/music/lagu-2.mp3` |

Kalau foto belum ada, otomatis muncul placeholder.

## alur
password → lagu 1 → cover majalah → 11-month journey (slider) → surat monthversary → kuis 11 soal
(salah = getar + bunyi bzzt, benar = bunyi ting) → benar semua: tombol claim reward → lagu 1 stop, lagu 2 play + confetti + kebuka rubrik gosip, galeri wisuda, surat wisuda & foto kado.

## mode cek tampilan (khusus `npm run dev`)
- `?skip` → langsung masuk tanpa password
- `?done` → langsung masuk + kuis dianggap selesai (semua section kebuka)

flag ini otomatis hilang di hasil `npm run build`.
