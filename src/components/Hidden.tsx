import { insideJokes, restart, sections, wisudaGallery, wisudaLetter } from '../content'
import { Letter } from './Letter'
import { Photo, Reveal, Section, SectionHead } from './ui'

/** rubrik gosip ala tabloid — ukuran tiap item dibikin beda biar ga kaya grid kartu */
export function InsideJokes() {
  const [lead, ...rest] = insideJokes.items
  return (
    <Section tone="raspberry">
      <SectionHead tone="raspberry" note={sections.gossip.note} title={insideJokes.title} sub={insideJokes.kicker} />

      {lead && (
        <Reveal className="border-y-2 border-sheet py-6">
          <p className="font-hand text-2xl leading-none text-nanas">berita utama 📰</p>
          <h3 className="mt-2 font-display text-[clamp(2rem,8vw,3rem)] leading-[1] font-black italic">{lead.headline}</h3>
          <p className="mt-3 max-w-[50ch] text-[17px] leading-relaxed">{lead.body}</p>
        </Reveal>
      )}

      <div className="mt-2 grid sm:grid-cols-2 sm:gap-x-8">
        {rest.map((item, i) => (
          <Reveal key={i} delay={i * 70} className="border-b border-sheet/50 py-5">
            <h3 className="font-display text-2xl leading-tight font-bold">{item.headline}</h3>
            <p className="mt-2 text-base leading-relaxed">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function WisudaGallery() {
  return (
    <Section tone="sheet">
      <SectionHead tone="sheet" note={sections.gallery.note} title={wisudaGallery.title} sub={wisudaGallery.subtitle} />
      {/* masonry pakai css columns */}
      <div className="columns-2 gap-3 sm:columns-3">
        {wisudaGallery.photos.map((photo, i) => (
          <Reveal key={photo.src} delay={(i % 3) * 80} className="mb-3 break-inside-avoid">
            <Photo
              src={photo.src}
              alt={`mommy nanas pakai toga, foto wisuda ${i + 1}`}
              label={`foto wisuda ${i + 1} 🎓`}
              className="w-full"
              style={{ aspectRatio: photo.ratio }}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function WisudaLetter({ onRestart }: { onRestart: () => void }) {
  return (
    <>
      <Letter tone="nanas" note={sections.wisuda.note} title={wisudaLetter.title}
        opening={wisudaLetter.opening}
        paragraphs={wisudaLetter.paragraphs}
        poem={wisudaLetter.poem}
        closing={wisudaLetter.closing}
        signature={wisudaLetter.signature}
      />
      <section className="bg-nanas">
        <div className="mx-auto max-w-3xl px-5 pb-[clamp(4rem,12vw,7rem)]">
          <p className="mb-8 -rotate-2 text-center font-hand text-[2rem] leading-tight text-raspberry">{wisudaLetter.giftTitle}</p>
          {/* polaroid kado disebar kayak ditaruh di meja */}
          <div className="flex items-start justify-center">
            {wisudaLetter.gifts.map((gift, i) => (
              <Reveal
                key={gift.src}
                delay={i * 120}
                className="relative w-[33%] max-w-[200px] shrink-0 -mx-1.5 first:mt-6 last:mt-10"
                style={{ zIndex: i === 1 ? 2 : 1 }}
              >
                <figure className="bg-sheet p-2 pb-3 shadow-[0_20px_30px_-16px_oklch(0.25_0.06_152/0.7)]" style={{ rotate: `${[-6, 2, 7][i % 3]}deg` }}>
                  <Photo src={gift.src} alt={gift.alt} label={`kado ${i + 1} 🎁`} className="w-full" style={{ aspectRatio: 3 / 5 }} />
                  <figcaption className="mt-2 text-center font-hand text-xl leading-none">kado {i + 1} 🎁</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="-rotate-2 font-hand text-[2rem] leading-none text-raspberry">{restart.note}</p>
            <p className="mx-auto mt-3 max-w-[36ch] text-base leading-relaxed">{restart.sub}</p>
            <button
              onClick={onRestart}
              className="mt-6 inline-flex h-14 items-center rounded-full bg-leaf px-8 text-base font-bold text-nanas shadow-[0_6px_0_var(--color-leaf-deep)] transition-[transform,box-shadow] duration-150 ease-out-quart hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_var(--color-leaf-deep)]"
            >
              {restart.button}
            </button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function HiddenSections({ onRestart }: { onRestart: () => void }) {
  return (
    <div id="hidden">
      <InsideJokes />
      <WisudaGallery />
      <WisudaLetter onRestart={onRestart} />
    </div>
  )
}

export function LockedTeaser() {
  return (
    <section className="bg-leaf-deep text-sheet">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-6xl" aria-hidden>
          🔐
        </p>
        <p className="mx-auto mt-5 max-w-[24ch] font-display text-2xl leading-snug font-bold">halaman selanjutnya masih dikunci sayangg 🤫</p>
        <p className="mx-auto mt-3 max-w-[40ch] text-base leading-relaxed">
          selesaiin kuis di atas dulu yaa biar kebukaa, ada gosip, galeri wisuda & surat spesial 🎓💌✨
        </p>
      </div>
    </section>
  )
}
