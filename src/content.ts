/**
 * ============================================================
 *  SEMUA KONTEN WEBSITE ADA DI FILE INI 💌
 *  ganti teks, foto, lagu & soal kuis cukup dari sini aja.
 *
 *  - foto taruh di  /public/photos/journey/1.webp ... 11.webp (format webp)
 *                   /public/photos/wisuda/1.webp ... dst
 *                   /public/photos/kado/1.webp ... dst
 *                   /public/photos/cover.webp (cover majalah), /public/photos/lock.webp (halaman password)
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
  /** tanda tangan di akhir surat monthversary & surat wisuda */
  signature: 'your dearest and number one fans, kamil',
}

export const lock = {
  title: 'exclusive for mommy nanass 🍍💗',
  subtitle: 'masukin password dulu yaa sayangg biar bisa bukaa majalahnyaa 🥺✨',
  button: 'buka majalahnyaa 💌',
  wrong: 'eitss salah sayangg 😝 coba lagii yaa 💗',
  photo: '/photos/lock.webp',
}

export const hero = {
  magazineName: 'the nanas daily',
  edition: 'special edition',
  issue: 'special edition · 10 november 2026',
  headline: 'gadis paling cantik resmi wisuda & rayakan 11 bulan penuh cinta! 🎓💗✨',
  subHeadline: 'liputan eksklusif dari papoy buat wisudawati paling gemes sedunia, mommy nanas 🍍👑🥺',
  coverPhoto: '/photos/cover.webp',
  coverLines: [
    'the 11-month journey 🗓️💞',
    'surat cinta bulan ke-11 💌',
    'kuis: seberapa kenal kamu sama papoy? 🧠',
    'spesial wisuda 🎓🌷',
  ],
}

export type JourneyItem = {
  month: string
  caption: string
  photo: string
  /** rasio lebar/tinggi foto, biar bingkainya pas sama fotonya */
  ratio: number
}

/** 11 foto journey — urut dari bulan pertama sampai ke-11 */
export const journey: JourneyItem[] = [
  {
    month: 'januari',
    caption: 'bulan pertama yang kerasa magis. senyum malu malu pas first meet, tapi hati aku tau kalau aku udah nemu rumah yang tepat 🥺🤍',
    photo: '/photos/journey/1.webp',
    ratio: 1500 / 844,
  },
  {
    month: 'februari',
    caption: 'makin kenal, makin nyaman dan aku makin yakin untuk habisin semua momen hidup aku tiap kali bidadari ini ada di sebelah aku 🥰✨',
    photo: '/photos/journey/2.webp',
    ratio: 1440 / 1080,
  },
  {
    month: 'maret',
    caption: 'nemenin si paling tangguh di fakultas peternakan. ngeliat kamu berjuang buat masa depan bikin aku makin jatuh cinta 🐑💐🤍',
    photo: '/photos/journey/3.webp',
    ratio: 1125 / 1500,
  },
  {
    month: 'april',
    caption: 'nyimpen tawa kita di dalem selembar cetakan foto. momen momen kecil yang selalu berhasil bikin aku mleyot tiap ngingetnya 📸💗',
    photo: '/photos/journey/4.webp',
    ratio: 1000 / 1500,
  },
  {
    month: 'mei',
    caption: 'nemu partner yang bisa diajak absurd dan seru seruan bareng. ketawa kamu itu suara favorit aku di seluruh dunia 🤭🫶🏻',
    photo: '/photos/journey/5.webp',
    ratio: 853 / 1280,
  },
  {
    month: 'juni',
    caption: 'malam malam ldr yang cuma bisa ditemenin layar. biarpun jauh, tatapan mata kamu selalu sukses ngilangin semua cape aku sayanggg 🥺📱🤍',
    photo: '/photos/journey/6.webp',
    ratio: 540 / 1230,
  },
  {
    month: 'juli',
    caption: 'lagi cape capenya ngurusin tesis dan kurang tidur. gapapa duniaku, pundak aku selalu sedia buat nemenin kamu istirahat 🫂✨',
    photo: '/photos/journey/7.webp',
    ratio: 658 / 1500,
  },
  {
    month: 'agustus',
    caption: 'satu frame sama perempuan paling hebat. dunia aku rasanya utuh banget tiap kali bisa meluk kamu seerat ini 🥰🤍',
    photo: '/photos/journey/8.webp',
    ratio: 1000 / 1500,
  },
  {
    month: 'september',
    caption: 'ngabisin waktu berdua nyari pantulan kaca. hal-hal sederhana yang selalu kerasa mewah karena dilakuin bareng kesayangannya aku 🪞💗',
    photo: '/photos/journey/9.webp',
    ratio: 1125 / 1500,
  },
  {
    month: 'oktober',
    caption: 'semuaa masalah yang ada kita hadapin dengan sangat baik, oh to be loved and love like this🤍',
    photo: '/photos/journey/10.webp',
    ratio: 1500 / 1125,
  },
  {
    month: 'november',
    caption: 'tepat 11 bulan. bidadari aku akhirnya sampai di garis finish. selamat menyambut togamu, istrii masa depan akuu 🎓🥺🤍',
    photo: '/photos/journey/11.webp',
    ratio: 1000 / 1500,
  },
]

export const monthversaryLetter = {
  title: 'the most beautiful chapter 🎓🤍',
  opening:
    'selamat bulan kesebelas bidadari cantiknya aku, my honeyy, my bububb, my darling, my partner, my beautiful future wife, my sweetheart, my babyy, my everything, my world, my universe, my queen, my princess, my precious nanass, bidadari aku, istri hebatkuu, mommyy kesayangan akuu tersayangkuu ♥️💗💖💕💓💞💘❤️‍🔥❤️‍🩹🫶🏻✨💍👩‍❤️‍👨💏🥰😘😍🤏🏻🫰🏻💋🤍',
  paragraphs: [
    'gila ya sayang, beneran ga kerasa roda waktu berputar dan kita udah berhasil ngelewatin 11 bulan bareng dalam hubungan inii 🤗💗 bulan ini tuh rasanya beneran kayak roller coaster banget yaa buat kita? penuh dengan ujian hubungan, ujian kedewasaan, tawa, air mata, pelukan anget, sampe kebahagiaan yang tumpah tumpah 🎢🥺💞 tapi dari semua badai dan ujian itu, sumpah demi apapun hati aku makin yakin dan makin dalam banget sayangnya sama kamu, duniaku 🥹🤍🫰🏻🏡✨',
    'kamuu beneran jadi rumah paling nyaman tempat aku pulang, tempat di mana aku bisa jadi diri sendiri seutuhnya tanpa takut dihakimi, tempat aku ngadu pas cape sama kerjaan pabrik yang bikin pusing 🥺🏡✨',
    'di bulan yang penuh ujian kedewasaan ini, dari lubuk hati aku yang paling dalem, aku mau minta maaf sambil sujud sama kamu yaa sayangku 🥺🙇🏻‍♂️ maafin kamil yang sebulan ini masih sering banget banyak kurangnya, banyak bikin kamu sakit hati, masih suka egois, baperan ga jelas, moody, rewel, dan gampang kepancing emosi. maafin aku juga kemarin kelakuan aku sempet parah banget, pake acara spamming chat pas kamu lagi keluar rumah main sama muti buat urus ttd tesis dan ambil toga wisuda kamu 😭💔 padahal harusnya aku bisa lebih dewasa, ngertiin kamu yang lagi repot, bukannya malah nambahin beban pikiran kamu yang udah numpuk. aku beneran nyesel dan merasa bersalah banget bidadariku, aku janji gamau hal" nyebelin kayak gitu terulang lagi di hidup kita 🥺🤍',
    'maafin papoy yaa bidadariku yang paling sabar dan baik hati di dunia 🥺🤍 terima kasih yaa udah selalu punya maaf, punya kebesaran hati, dan pelukan seluas samudera buat tetep nenangin aku pas aku rewel, padahal beban di pundak kamu sendiri saat itu jauh, jauhh lebih berat daripada aku 🩹🫂🤗💗✨',
    'tapi masyaallah, di balik semua kerempongan, capee, dan roller coaster hubungan kita, aku saksi hidup yang benerann kagum setengah mati sama cara kamu bangkit dan ngadepin semuanya. aku liat sendiri gimana kamu mempersiapkan hari spesial kamu dengan sangat luar biasa teliti dan sabar 🥹🥹🤍🤍 detail banget nyiapin dari mulai booking MUA terbaik, nyari fotografer buat mengabadikan momen, milih kebaya yang super cantik, nambahin payet biar makin stunning, nyari aksesoris yang pas, sampe milih heels ternyaman buat kamu pakai nanti 👗👠💄✨ sumpah, ngeliat antusiasme dan kemandirian kamu prepare itu semua sendirian bikin aku makin bangga dan makin ga sabar pengen cepetan liat wujud bidadari aku pas hari-H nanti! kamu beneran perempuan terhebat yang pernah aku kenal sayangg 🙆🏻😘😍❤️♥️💋',
    'kebaya kamu nantii, hasil makee up, heels, dan hijab model bagaimanapun yang nanti melekat di badan kamu, aku tahu persis kamu bakal jadi perempuan paling mempesona, cantik paripurna, dan bersinar terang benderang yang bikin aku ga bakal bisa kedipin mata sedetik pun karena terpesona sama ratu aku 😍💋🤤🔥💖💓❣️❤️‍🔥',
    'aku juga mau negasin sekali lagi, aku bangga setengah mati sama kamu yang masih terus bertahan, kuat, dan survive di tengah tekanan rumah yang sering bikin kamu sesak napas 🥺🥺🤍🤍 aku tau itu sama sekali bukan hal yang gampang. tapi mental baja kamu, ketangguhan kamu, dan cara kamu tetap berjuang menyelesaikan pendidikan di tengah toxic environment itu beneran bikin aku hormat sekaligus jatuh cinta berlipat lipat ganda 🫂💪🏼✨💖',
    'kamu adalah perempuan paling cerdas, mandiri, dan luar biasa hebat di muka bumi ini! 🫰🏻🫰🏻♥️♥️',
    'oiyaa! di bulan ke-11 yang spesial ini kita juga ngerayain ulang tahun kamuu yaa sayangkuu 🎂🥳🎉 jujur aku sempet sedih dan mau minta maaf banget karena tahun ini ulang tahun kamu kita cuma bisa merayakannya via LDR, cuma bisa saling tatap dari layar HP huhu 🥺😭 maafin papoy yaa kesayangan belum bisa ngasih yang lebih di hari lahir kamu... tapi aku janji, tahun depan pas kamu ulang tahun, aku bakal ajak kamu fine dining mewah ngerayainnya berdua secara langsung tanpa jarak! pokoknya tahun depan bakal aku ratukan banget bidadari aku ini, aku bayar semua hari-hari LDR kita kemarin 🥂🥩🍷✨',
    'aku pengen banget cepet" hari selasa datang, meluk kamu seerat eratnya, nyium kening kamu, dan ngerayain semua hasil keringet, air mata, lelah, serta perjuangan panjang kamu sampe titik sarjana ini 🫂🎓🎉 aku mau jadi orang paling berisik yang neriaking nama kamu paling kenceng, bangga banget nunjukin ke semua orang kalau perempuan hebat itu adalah milik aku 🗣️💖',
    'terima kasih yaa sayangku udah bertahan sejauh ini, udah mau berjuang bareng aku, dan ga pernah menyerah sama keadaan sesulit apapun itu 🥺✨ aku janji di sisa waktu kita ke depan, aku bakal terus belajar jadi cowok yang jauh lebih dewasa, jadi pelindung, rumah, dan perisai terdepan buat kamu, dan bakal bawa kamu keluar dari semua rasa lelah serta lingkungan yang bikin kamu penat secepatnya, biar kamu bisa hidup tenang, bahagia, dan penuh senyum bersama aku selamanya 🏡💍✨',
    'kamu berhak dapet semua kebaikan, cinta, dan kedamaian di dunia ini, mommy. you deserve the absolute best 🫶🏻✨',
  ],
  closing:
    'i love you endlessly and infinitely more, my future wife, my gorgeous bride, my absolute everything, duniaku! 🫂💖🥂✨💍🌹💕💞🩷🫶🏻🎀❤️‍🔥😍👩‍❤️‍👨😻😘💗💋🤤🔥💯',
  signature: names.signature,
}

export type QuizQuestion = {
  question: string
  options: string[]
  /** index jawaban yang benar (mulai dari 0) */
  answer: number
}

/** 11 soal kuis */
// answer: 0 = a, 1 = b, 2 = c, 3 = d
export const quiz: QuizQuestion[] = [
  {
    question: 'tanggal berapa momen paling bersejarah di mana bidadari cantik ini resmi lulus dan ngerayain 11 bulan bareng papoy?',
    options: ['9 november', '10 desember', '10 november 🎓✨', 'semua jawaban salah'],
    answer: 2,
  },
  {
    question: 'hewan apa yang jadi "saingan" papoy karena bikin bidadari pusing ngurusin nutrisi tesisnyaa?',
    options: ['sapi perah', 'domba priangan 🐑', 'alpaca', 'semua jawaban benar'],
    answer: 1,
  },
  {
    question: 'di mana lokasi paling absurd bin ajaib pas kita berdua lagi asyik nge date tapi malah diserang vampir?',
    options: ['alam mimpii akuu xixii 🧽', 'kost gading serpong', 'fakultas peternakan', 'semua jawaban salah'],
    answer: 0,
  },
  {
    question: 'waktu bidadari lagi heboh menang war oleh-oleh di singapore, barang apa yang disisihin khusus buat papoy?',
    options: [
      'gunting kuku biruww yang estetik 💅🏼',
      'coklat matcha yang pait tapi tetep bikin lidah mleyot 🍵',
      'baju malaysia 👕',
      'jawaban a dan b yang benerr hehee 🥰',
    ],
    answer: 3,
  },
  {
    question: 'pas papoy lagi kangen-kangennya pengen mimpiin bidadari, eh papoy malah mimpiin hal absurd ini gara" dihantui pekerjaan. mimpiin apa tuh?',
    options: ['nyetrika baju wisuda', 'bongkar pompa sama perpipaan pabrik 🔧😭', 'ketinggalan travel buat ke bandung', 'semua jawaban salah'],
    answer: 1,
  },
  {
    question: 'saksi bisu kebucinan papoy yang selalu setia nganterin bolak-balik tangerang-bandung tiap dapet jatah libur adalah...',
    options: ['cititrans 🚐', 'grab', 'angkot', 'jawaban a dan b benar 💨🤍'],
    answer: 3,
  },
  {
    question: 'kelakuan random papoy yang sempet bikin bidadari harus ngelus dada pas lagi repot-repotnya persiapan wisuda kemarin adalah...',
    options: [
      'nyasar di jalan pas mau ke kampus',
      'nyebelin dan kurang ngertiin kamu 💥 huhu maafin aku yaa sayangg',
      'lupa bawa kado buat bidadari',
      'semua jawaban salah',
    ],
    answer: 1,
  },
  {
    question: 'salah satu jajanan atau tempat makan yang pernah nemenin date kita dan sukses bikin hati sama perut kenyang adalah...',
    options: ['mokopi garden 🥟', 'genki sushi 🍣', 'pusing milih karena doyan mam semua', 'semua jawaban benar 🤤🥢'],
    answer: 3,
  },
  {
    question: 'alasan paling jujur kenapa papoy bela-belain bikin website bucin buat bububb?',
    options: [
      'karena papoyy mau ngerasa kamu disayangg dan kasih surprise buat bububb',
      'karena papoy sayang bangett sama mommyyy',
      'karena papoy pengen ngasih apresiasi terbaik buat bidadari yang lagi wisuda 🥰',
      'semua jawaban bener bangettt! 💯🤍',
    ],
    answer: 3,
  },
  {
    question: 'siapakah perempuan paling cantik, paling tangguh, dan paling pantes dapet semua hal baik di dunia ini?',
    options: [
      'najwa (nanasnya papoy) 👸🏻🤍',
      'calon istrinya papoy dunia akhirat 💍',
      'bidadari pemegang gelar sarjana peternakan 🎓',
      'semua jawaban 1000% benerrr! 😘💗',
    ],
    answer: 3,
  },
  {
    question: 'sebelum kuis ini berakhir dan lagunya ganti, papoy cuma mau nanya satu hal: seberapa sayang sih papoy sama nanas?',
    options: [
      'biasa aja',
      'lumayan sayang',
      'semua jawaban salah ❌',
      'sayang bangettt, i love you so so so much more, most, and endlessly till forever! ♾️🤍🫂',
    ],
    answer: 3,
  },
]

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
  /** item pertama tampil paling gede sebagai berita utama */
  items: [
    {
      headline: 'tips jitu menghadapi cowok tantrum perkara cucian 👕💥',
      body: 'siapa sangka di balik sosok kakak kamu yang introver, ternyata ada sisi rewel, patrirarki, dan tantrum yaa kalau udah urusan tentang pakaian dia. bidadari harap selalu sedia elus dada dan bersabar ya ngadepin bocah aneh satu itu! 🥺🤏🏼',
    },
    {
      headline: 'breaking news: tragedi nyasar di bikini bottom & invasi vampir! 🧛‍♂️🧽',
      body: 'warga gempar! sepasang kekasih dilaporkan tiba" nyasar harus bertahan hidup dari serangan vampir di alam mimpi. untung papoy selalu siap siaga jadi pahlawannya bidadari hihihi 🤭🤍 pun jangann nyasar lagi yaa bububb masa di bikin bottom sii🤍🤏🏼',
    },
    {
      headline: 'skandal alam mimpi: bidadari cantik malah digantiin sama... pipa air?! 🔧😭',
      body: 'parah banget! niatnya pengen mimpiin ayang yang manis manis berduaan, eh otak papoy malah konslet mimpiin kerjaan bongkar pompa sama perpipaan pabrik. bener-bener definisi budak korporat pabriksejati yang dihantui kerjaan 🥺👎🏼 maapin papoy ya sayang!',
    },
    {
      headline: 'cinta segitiga: papoy, bidadari, dan domba priangan 🐑💔',
      body: 'kisah nyata ter-epik tahun ini! 11 bulan ldr tangerang-bandung, papoy ternyata harus rela saingan sama domba priangan itu demi dapet perhatian bidadarinya yang lagi pusing ngurus tannin dan hal lainnya buat tesis. tapi gapapa, yang penting sekarang bidadari aku udah mau pake toga! 🥰🎓',
    },
    {
      headline: 'review hasil war oleh oleh singapore 💅🏼🔥',
      body: 'perjuangan keras bidadari rebutan oleh-oleh akhirnya membuahkan hasil manis: sebuah gunting kuku biruww yang sangat estetik buat papoy, dan coklat matcha yang katanya pait tapi tetep bikin lidah mleyot! 🤤🤍 effort nya itu loh yang bikin papoy makin cinta!🥰🤍',
    },
    {
      headline: 'cititrans jadi saksi bisu kebucinan 🚐💨',
      body: 'kalau kursi travel tangerang-bandung bisa ngomong, mereka pasti udah capek dengerin detak jantung papoy yang ga bisa diem saking excitednya mau ketemu bidadari cantiknya tiap dapet jatah libur. resepsionis nya sampe hafal muka papoy saking seringnya bolak balik demi ayang 🤭🫶🏻',
    },
  ],
}

export const wisudaGallery = {
  title: 'galeri wisuda 🎓🌷',
  subtitle: 'the most gorgeous graduate in the whole universe 😍👑✨',
  /** ratio = lebar/tinggi foto */
  photos: [
    { src: '/photos/wisuda/1.webp', ratio: 3 / 4 },
    { src: '/photos/wisuda/2.webp', ratio: 3 / 4 },
    { src: '/photos/wisuda/3.webp', ratio: 3 / 4 },
    { src: '/photos/wisuda/4.webp', ratio: 4 / 3 },
    { src: '/photos/wisuda/5.webp', ratio: 3 / 4 },
    { src: '/photos/wisuda/6.webp', ratio: 3 / 4 },
    { src: '/photos/wisuda/7.webp', ratio: 3 / 4 },
    { src: '/photos/wisuda/8.webp', ratio: 4 / 3 },
    { src: '/photos/wisuda/9.webp', ratio: 3 / 4 },
  ],
}

export type Poem = { title: string; stanzas: string[][] }

export const wisudaLetter = {
  title: 'the most beautiful chapter 🎓🤍',
  opening:
    'selamat wisuda, my most beautiful angel, my future wife! 💖🎓✨ selamat yaaaa, sayangkuuu, cintakuuu, duniakuuu, my princess, my gorgeous girl, my sweetest angel, my beautiful queen, dan bidadari paling hebat yang pernah tuhan hadirkan di kehidupan aku! 🥺😭💗💗💗❤️‍🔥❤️‍🔥❤️‍🔥😘💋🫂🎓🤍✨',
  paragraphs: [
    'hari ini, tanggal 10 november, akhirnya tiba juga di titik yang selama ini kita tunggu-tunggu, kita doain, kita sering impi impikan, dan kita perjuangin bareng-bareng. hari yang dulu mungkin cuma bisa kita bayangin sambil ngobrolin masa depan, sekarang beneran ada di depan mata. hari ketika kamu akhirnya berdiri dengan penuh kebanggaan pake kebaya wisuda dan toga kebanggaan kamu. hari ketika nama kamu dipanggil, dan satu gelar yang selama ini kamu perjuangkan akhirnya resmi jadi bagian dari perjalanan hidup kamu. SAYANGGGG, YOU DID IT!!! 😭😭😭🎓🎓🎓💖💖💖❤️❤️❤️',
    'jujur ya, pas liat kamu berdiri di sana pake senyum paling manis yang pernah aku liat, rasanya dada aku penuh banget sama rasa bangga, bahagia, haru, and syukur yang bahkan susah dijelasin pake kata-kata. kalau boleh jujur, aku mungkin udah hampir nangis berkali kali karena liat perempuan yang selama ini aku cintai akhirnya berhasil sampe di titik ini. aku pengen banget ngestop waktu sebentar, supaya aku bisa nikmatin tiap detik liat kamu senyum, liat mata kamu berbinar, and nyadar kalau perempuan yang ada di hadapan aku ini adalah perempuan yang udah ngelewatin begitu banyak hal berat buat sampe di hari istimewanya 🥹🥹🥹💗💗💗🫂🫂🫂❤️‍🩹🤍💍',
    'my love, kalau aku boleh ngulang waktu dan nengok lagi ke perjalanan panjang kamu dari awal, aku beneran ga tau gimana caranya ngungkapin rasa kagum aku ke kamu. aku masih inget banget gimana semuanya mulai. dari hari-hari ketika kamu harus pusing berkutat sama proposal, begadang sampe malem banget, mikirin banyak hal, benerin tulisan, baca jurnal, nyusun penelitian, sampe kadang bingung harus mulai dari mana lagi. ada hari ketika kamu lagi semangat semangatnya, tapi ada juga hari ketika kamu benean kehabisan tenaga and cuma pengen semuanya cepet seelsai. tapi liat kan diri kamu sekarang, myy sweetheart. kamu berhasil ngelewatin semuanya! 🥺📚💻📝☕💗❤️‍🔥❤️‍🔥🫶🏻',
    'aku tau banget perjuangan kamu bukan cuma duduk manis depan laptop terus ngetik beberapa halaman. aku tau ada sejuta cerita di balik tiap lembar tulisan kamu. ada perjalanan bolak balik kampus pas panas panasan, nahan lapar, nahan cape, nunggu dosen yang kadang ngaret dan susah banget dihubungin, ngejar ngejar ttd, nunggu kabar bimbingan, sampe ngadepin revisian yang rasanya ga ada habisnya. belum lagi pas ngerasa satu bagian beres, eh ternyata ada lagi bagian lain yang harus dibenerin. rasanya kayak ga ada garis finish nya. tapi kamu tetep jalan, tetep usaha, and nyelesaiin satu satu tanggung jawab kamu. my brave girl nanas sayangg, aku tau itu sama sekali ga gampang. aku tau kamu udah ngorbanin banyak waktu, tenaga, pikiran, bahkan perasaan kamu buat semua ini 🥺😭💗🫂❤️‍🩹📖✨',
    'and gimana mungkin bisa aku lupa perjuangan kamu pas ngerjain penelitian nutrisi domba Priangan sama suplementasi tannin itu, sayanggg? 🐑🌿😭❤️ HAHAHA. penelitian yang mungkin di telinga orang lain kedengerannya cuma kayak topik biasa, tapi buat aku, di balik topik itu ada jutaan perjuangan yang kamu jalanin sendiri. ada proses panjang yang harus kamu pahamin, ada data yang harus dipelajarin, penelitian yang harus dikerjain teliti, dan tanggung jawab besar yang harus tuntas. kamu harus pontang-panting ngadepin berbagai kendala di lapangan, mastiin semuanya jalan, dan tetep ngasih hasil terbaik meskipun keadaan kadang ga dukung. aku bangga banget liat kamu tetep bertahan sampe beres. siapa sangka perempuan cantik kesayangan aku ini bisa setangguh itu pas ngadepin dunia peternakan HAHAHA. my little scientist, my smart girl, my future amazing woman! 🥺🐑💗💗💗🔬🌱🫶🏻❤️‍🔥',
    'belum beres sampe di situ, perjuangan kamu masih harus lanjut ngejar target publikasi jurnal ilmiah yang akhirnya beneran PUBLISHED! AAAAAA SAYANGGGG, THAT IS ANOTHER BIG ACHIEVEMENT!!! 😭😭😭👏🏻👏🏻👏🏻💯💯💯💗💗💗 aku tau banget dapetin publikasi itu bukan hal gampang. ada proses nulis, nyempurnain naskah, nyesuaiin format, baca referensi segambreng, benerin sana-sini, and nunggu hasil yang bikin jantungan. aku tau gimana kamu pinter pinter bagi waktu biar tetep fokus meskipun banyak hal lain yang numpuk di kepala. dan sekarang, semua keringet itu terbayar lunas. jurnal kamu berhasil terbit, sayang! itu bukti nyata kalau kamu emang secerdas itu. aku harap kamu ga pernah ngecilin pencapaian hebat ini ya, my intelligent princess, I\'m beyond proud of you! 🥹💗📚🏆🎓❤️‍🔥💖💖💖',
    'satu hal lagi yang mau aku sampein, sayang. aku tau perjalanan kamu ga selalu mulus di rumah, ga selalu di-upport sama lingkungan yang bikin tenang. ada masa-masa di mana keadaan rumah beneran bikin kamu sesak napas, nguras emosi, padahal harusnya energi itu bisa dipake buat fokus ke diri sendiri dan masa depan kamu. ada hari di mana kamu cuma pengen rebahan tenang tapi keadaannya ga ngizinin. aku mungkin ga bisa ngerasain 100% cape nya di posisi kamu, tapi aku liat sendiri gimana gigihnya kamu tetep bertahan di tengah badai itu. hari ini, aku mau kamu tahu bahwa kamu ga harus selalu jadi perempuan kuat setiap saat. kamu boleh cape, boleh nangis, boleh ngeluh, boleh istirahat. kamu ga perlu ngebuktiin apa-apa ke orang rumah buat bikin diri kamu pantes disayang. because you are already worthy, my love. you deserve peace, happiness, kindness, and a beautiful life 🥺😭🫂💗❤️‍🩹🤍💐💍',
    'makasih ya udah bertahan sejauh ini, my strongest girl. makasih udah ga nyerah meskipun banyak banget alasan buat ngeluh. makasih udah tetep melangkah meskipun jalannya keriting. aku berharap nanti kalau kamu nengok lagi ke belakang, kamu sadar betapa hebatnya perempuan yang udah ngelewatin semua ini. you deserve every single bit of happiness that comes your way, my darling. 🥹💗💗💗🫂🫂❤️‍🩹🌷🌹✨',
    'dan ngomong-ngomong soal hari wisuda, HAHAHAHA, aku juga hapal banget gimana excited nya kamu nyiapin semua ini dari jauh-jauh hari. mulai dari booking MUA terbaik, nyari fotografer, milih kebaya yang paling pas, mikirin detail payet biar makin stunning, milih aksesoris, sampe nyari heels ternyaman biar kamu bisa jalan dengan pede. semua detail kecil itu kamu perhatiin banget karena kamu pengen hari ini jadi momen yang paling dikenang seumur hidup. and sekarang, liat kan, semua kerja kerasnya terbayar! 😭💄👗👠💅🏻📸🎀💗💗💗',
    'MY GOD, NANAS, YOU LOOK SO BEAUTIFUL!!! 😭😍😍😍❤️‍🔥❤️‍🔥❤️‍🔥💋💋💋 kalau ada satu hal yang pengen aku omongin berkali-kali hari ini, itu adalah sumpah, kamu cantik banget! kebaya yang kamu pake, makeup nya, senyum manis kamu, cara kamu berdiri, semuanya keliatan sempurna. kamu bukan cuma cantik karena bajunya, tapi karena ada kebahagiaan tulus yang terpancar dari muka kamu. senyum perempuan yang akhirnya sukses ngelewatin salah satu perjuangan paling gila di hidupnya. sumpah, kamu beneran bersinar banget hari ini. my gorgeous queen, my prettiest princess, my one and only beautiful girl. kalau boleh, aku pengen liat senyum itu tiap hari tanpa jeda. 😭💗💗💗💗💗👑🌹💍😘🫶🏻',
    'aku juga mau minta maaf ya, my sweetheart, kalau selama perjalanan menuju hari bahagia ini aku masih sering rewel, banyak nanya, baperan, egois, atau malah sempet bikin kamu kesel pas kamu lagi ribet ribetnya ngurus toga kemaren. aku sadar pas kamu lagi pusing ngurusin banyak hal, harusnya aku bisa jauh lebih dewasa, lebih sabar, and jadi penenang buat kamu, bukan malah nambah beban pikiran. aku masih banyak kurangnya, sayang, tapi aku bakal terus belajar jadi cowok yang lebih baik buat kamu. thank you for loving me even on my difficult days, my love. 🥺🙏🏻💗🫂❤️‍🩹😘💋🤍',
    'aku pengen kamu tau kalau aku amat sangat ngehargai hal-hal kecil yang selalu kamu lakuin buat kita. waktu kamu, perhatian kamu, kesabaran kamu, pelukan hangat kamu, cara kamu dengerin cerita aku, semuanya berharga banget. di tengah ribuan kesibukan kamu, kamu tetep usaha jadi partner yang terbaik buat aku. you are my favorite person, my safe place, my happiness, my best friend, and my forever love 🥹💗💗💗🫂🫂🫂💍❤️‍🔥🌹',
    'mulai hari ini, sayangku, lembaran baru resmi dibuka. gelar Magister Peternakan yang keren banget itu sekarang resmi jadi milik kamu! gelar itu bukan cuma pajangan di belakang nama, tapi bukti nyata dari begadang kamumu, revisian kamu, penelitian kamu, jurnal kamu, dan mental baja kamu. you earned it, baby. you worked for it. and you absolutely deserve it! 😭🎓🏅💗💗💗❤️‍🔥🥂✨',
    'tapi inget ya, wisuda ini bukan akhir, justru ini garis start buat petualangan baru di luar sana. abis ini bakal ada kerjaan, karier, mimpi-mimpi lain yang lebih gede, dan hal seru menanti. nikmatin prosesnya, jangan buru-buru, and jangan pernahbandingin jalan hidup kamu sama orang lain. your journey is yours, and I hope you will always be proud of it. 🥺🌷💗🌸🦋✨🤍',
    'buat masa depan kita, my future wife, aku punya banyak banget impian. aku pengen kita terus tumbuh bareng, saling menguatkan, and jadi tempat pulang paling nyaman. aku pengen bawa kamu keluar dari lingkungan yang bikin kamu penat secepatnya, biar kamu bisa hidup tenang, bahagia, dan ketawa terus bareng aku selamanya. kita bakal raih semua mimpi-mimpi kita berdua, termasuk janji fine dining buat gantiin ultah kamu taun depan! 🏡💍🥂✨',
    'dan untuk kamu, bidadariku, ada sedikit puisi yang ingin aku persembahkan 🥺💌💗',
  ],
  poem: {
    title: 'Untuk Nanas, Perempuan yang Aku Banggakan',
    stanzas: [
      [
        'Di antara ribuan langkah yang pernah kau tempuh,',
        'Ada lelah yang tak selalu sempat kau keluh.',
        'Ada air mata yang diam-diam jatuh,',
        'Ada doa yang kau simpan agar tak pernah runtuh.',
      ],
      [
        'Hari ini toga menghiasi kepalamu,',
        'Senyum bahagia terpancar dari wajahmu.',
        'Bukan sekadar gelar yang kini menjadi milikmu,',
        'Tetapi seluruh perjuangan yang mengantarkanmu.',
      ],
      [
        'Aku melihatmu, wahai perempuan hebatku,',
        'Melewati hari sulit dengan segala kuatmu.',
        'Jika dunia terkadang terlalu keras untukmu,',
        'Izinkan aku menjadi tempat beristirahat untukmu.',
      ],
      [
        'Jika kelak langkahmu terasa berat,',
        'Ingatlah bahwa kamu tidak harus selalu kuat.',
        'Jika suatu hari langitmu kehilangan cahaya,',
        'Aku berharap bisa menemanimu menemukan bahagia.',
      ],
      [
        'Dan jika waktu terus berjalan tanpa henti,',
        'Aku ingin tetap berada di sisimu hingga nanti.',
        'Bukan hanya saat mahkota keberhasilan kau kenakan,',
        'Tetapi juga saat hidup menguji setiap harapan.',
      ],
      [
        'Sebab bagiku, kamu bukan hanya perempuan yang berhasil hari ini,',
        'Kamu adalah perempuan yang ingin aku cintai setiap hari.',
        'Dari hari pertama hingga waktu yang tak terhitung lagi,',
        'My love, my angel, my forever, my one and only. ❤️',
      ],
    ],
  } satisfies Poem,
  closing:
    'I love you so much, nanas sayangggg more than words could ever explain. aku bangga sama kamu hari ini, besok, lusa, dan selamanya. you did it, baby. you made it! 🥹😭💗💗💗💗💗❤️❤️❤️❤️❤️💍💍💍🫂🫂🫂🌹🌹🌹😘😘😘💋💋💋🎓🎓🎓✨✨✨',
  signature: names.signature,
  giftTitle: 'kado kecil buat wisudawati kesayangan papoy 🎁💗',
  gifts: [
    { src: '/photos/kado/1.webp', ratio: 508 / 1100, alt: 'kado pertama buat mommy nanas' },
    { src: '/photos/kado/2.webp', ratio: 619 / 1100, alt: 'kado kedua buat mommy nanas' },
    { src: '/photos/kado/3.webp', ratio: 619 / 1100, alt: 'kado ketiga buat mommy nanas' },
  ],
}

/** tombol di paling bawah (setelah kado) buat ngulang semuanya dari halaman password */
export const restart = {
  note: 'mau ngulang dari awal lagi? 🥺',
  sub: 'balik ke halaman password, lagunya muter lagi dari awal, kuisnya juga bisa dimainin lagi yaa sayangg 🍍💗',
  button: 'ulangi dari awal 🔁',
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
