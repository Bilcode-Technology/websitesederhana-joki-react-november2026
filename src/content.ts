/**
 * ============================================================
 *  SEMUA KONTEN WEBSITE ADA DI FILE INI 💌
 *  ganti teks, foto, lagu & soal kuis cukup dari sini aja.
 *
 *  - foto taruh di  /public/photos/journey/1.jpg ... 11.jpg
 *                   /public/photos/wisuda/1.jpg ... dst
 *                   /public/photos/cover.jpg, /public/photos/kado.jpg
 *  - lagu taruh di  /public/music/lagu-1.mp3 & /public/music/lagu-2.mp3
 *  (kalau file belum ada, otomatis muncul placeholder cantik)
 * ============================================================
 */

export const config = {
  /** password halaman depan (format bebas, dicek apa adanya) */
  password: '1012',
  passwordHint: 'tanggal dan bulan jadian kitaa format nya mmdd yaa',
  /** lagu 1 — "sign of the times" (harry styles), diputar setelah password benar */
  song1: '/music/lagu-1.mp3',
  /** lagu 2 — "semua aku dirayakan" (nadin amizah), diputar setelah klik claim reward */
  song2: '/music/lagu-2.mp3',
}

export const names = {
  partner: 'mommy nanas',
  me: 'papoy',
  signature: 'kamil',
}

export const lock = {
  title: 'exclusive for mommy nanass 🍍💗',
  subtitle: 'masukin password dulu yaa sayangg biar bisa bukaa majalahnyaa 🥺✨',
  button: 'buka majalahnyaa 💌',
  wrong: 'eitss salah sayangg 😝 coba lagii yaa 💗',
}

export const hero = {
  magazineName: 'the nanas daily',
  edition: 'special edition',
  issue: 'special edition · 10 november 2026',
  headline: 'gadis paling cantik resmi wisuda & rayakan 11 bulan penuh cinta! 🎓💗✨',
  subHeadline: 'liputan eksklusif dari papoy buat sarjana paling gemes sedunia, mommy nanas 🍍👑🥺',
  coverPhoto: '/photos/cover.jpg',
  coverLines: [
    'the 11-month journey 🗓️💞',
    'surat cinta bulan ke-11 💌',
    'kuis: seberapa kenal kamu sama papoy? 🧠',
    'spesial wisuda 🎓🌷',
  ],
}

export type JourneyItem = {
  month: string
  title: string
  caption: string
  photo: string
}

/** 11 foto journey — urut dari bulan pertama sampai ke-11 */
export const journey: JourneyItem[] = Array.from({ length: 11 }, (_, i) => ({
  month: `bulan ke-${i + 1}`,
  title: `judul momen bulan ke-${i + 1} 💗`,
  caption:
    'caption momen ini nanti diisi yaa sayangg, ceritain kita lagi ngapain, ngerasain apa, dan kenapa momen ini spesial banget buat papoy 🥺✨🫂',
  photo: `/photos/journey/${i + 1}.jpg`,
}))

export const monthversaryLetter = {
  title: 'surat bulan kesebelas 💌',
  opening: 'selamat bulan kesebelas bidadari akuu, my honeyy, my bububb, mommyy kesayangan papoy 🥺💗💖✨',
  paragraphs: [
    'ini paragraf pertama long text monthversary nyaa yaa sayangg, nanti diganti sama tulisan aslinyaa 🫂💞',
    'ini paragraf kedua, boleh sepanjang apapun, bakal otomatis rapi kok tampilannya 🥰✨',
    'ini paragraf ketiga buat penutup sebelum tanda tangan 🤍💍',
  ],
  closing: 'i love you endlessly, duniaku! 🫂💖✨💍',
  signature: 'with love, kamil 🤍💍✨',
}

export type QuizQuestion = {
  question: string
  options: string[]
  /** index jawaban yang benar (mulai dari 0) */
  answer: number
}

/** 11 soal kuis */
export const quiz: QuizQuestion[] = Array.from({ length: 11 }, (_, i) => ({
  question: `pertanyaan nomor ${i + 1} nanti diisi yaa sayangg 🤔💭`,
  options: ['pilihan a 🍍', 'pilihan b 💗', 'pilihan c ✨', 'pilihan d 🥺'],
  answer: 0,
}))

export const quizCopy = {
  title: 'seberapa kenal kamu sama papoy? 🧠💘',
  intro: 'jawab 11 pertanyaan ini yaa sayangg, kalau salah nanti hp nya ngambek 😤📳 kalau bener semua ada hadiah rahasiaa 🎁✨',
  wrong: ['ihh salahh 😤💔', 'masa lupa sihh sayangg 🥺', 'coba lagii bububb 😝', 'yahh bukan ituu 🙈'],
  right: ['pinter bangett 😍✨', 'yeayy bener sayangg 🥳💗', 'emang paling kenal papoy 🫶🏻', 'nah gituu dongg 😘'],
  allCorrect: 'yeayyy semua jawaban bener sayangg 🥳🎉💯 ada hadiah buat kamuu, klik tombolnya yaa 🤫🎁',
  claimButton: 'claim reward 🎁✨',
  claimed: 'hadiahnya udah kebuka sayangg 🥳 scroll ke bawah yaa, ada kejutan buat kamuu 👇🏻💗',
}

export const insideJokes = {
  title: 'gosip hangat minggu ini 🗞️☕',
  kicker: 'kolom lifestyle · tabloid edition',
  items: [
    { headline: 'judul gosip 1 😭', body: 'isi candaan internal kita nanti diisi di sinii yaa sayangg 🤭' },
    { headline: 'judul gosip 2 🤣', body: 'isi candaan internal kita nanti diisi di sinii yaa sayangg 🙈' },
    { headline: 'judul gosip 3 🫠', body: 'isi candaan internal kita nanti diisi di sinii yaa sayangg 😝' },
    { headline: 'judul gosip 4 🍍', body: 'isi candaan internal kita nanti diisi di sinii yaa sayangg 💗' },
  ],
}

export const wisudaGallery = {
  title: 'galeri wisuda 🎓🌷',
  subtitle: 'the most gorgeous graduate in the whole universe 😍👑✨',
  photos: Array.from({ length: 8 }, (_, i) => `/photos/wisuda/${i + 1}.jpg`),
}

export const wisudaLetter = {
  title: 'selamat wisuda, sarjana kesayangan papoy 🎓💖',
  paragraphs: [
    'ini paragraf pertama long text wisuda nyaa yaa sayangg, nanti diganti sama tulisan aslinyaa 🥺🎉',
    'ini paragraf kedua, ceritain perjuangan kamu sampai akhirnya bisa pakai toga 😭👏🏼✨',
    'ini paragraf ketiga buat penutup 🫂🎓💍',
  ],
  signature: 'bangga selalu, kamil 🤍🎓',
  giftPhoto: '/photos/kado.jpg',
  giftCaption: 'kado kecil buat sarjana kesayangan papoy 🎁💗',
}

export const footer = 'made with too much love by papoy for mommy nanas 🍍💗 · 11 bulan & selamanya ✨'

/** judul tiap rubrik + coretan pena papoy di atasnya */
export const sections = {
  journey: {
    note: 'cover story ✍🏻',
    title: 'the 11-month journey 🗓️💞',
    sub: 'geser ke samping yaa sayangg, ini perjalanan kitaa dari bulan pertama sampai sekarang 🥺✨',
  },
  monthversary: { note: 'baca pelan-pelan yaa 🥺' },
  quiz: { note: 'jangan nyontek 😤' },
  gossip: { note: 'sstt rahasia 🤫' },
  gallery: { note: 'cantik bangett 😍' },
  wisuda: { note: 'bangga bangett 🎓' },
}
