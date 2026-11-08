import { insideJokes, sections, wisudaGallery, wisudaLetter } from '../content'
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
          <p className="font-hand text-2xl leading-none text-nanas">breaking news 🚨</p>
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
        {wisudaGallery.photos.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 80} className="mb-3 break-inside-avoid">
            <Photo
              src={src}
              alt={`foto wisuda ${i + 1}`}
              label={`foto wisuda ${i + 1} 🎓`}
              className={`w-full ${['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[2/3]'][i % 4]}`}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function WisudaLetter() {
  return (
    <>
      <Letter tone="nanas" note={sections.wisuda.note} title={wisudaLetter.title} paragraphs={wisudaLetter.paragraphs} signature={wisudaLetter.signature} />
      <section className="bg-nanas">
        <div className="mx-auto max-w-3xl px-5 pb-[clamp(4rem,12vw,7rem)]">
          <Reveal>
            <figure className="mx-auto max-w-xs rotate-2 bg-sheet p-3 pb-4 shadow-[0_24px_40px_-20px_oklch(0.25_0.06_152/0.6)]">
              <Photo src={wisudaLetter.giftPhoto} alt="foto kado wisuda" label="foto kado 🎁" className="aspect-square w-full" />
              <figcaption className="mt-3 text-center font-hand text-[1.75rem] leading-tight text-raspberry">{wisudaLetter.giftCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function HiddenSections() {
  return (
    <div id="hidden">
      <InsideJokes />
      <WisudaGallery />
      <WisudaLetter />
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
