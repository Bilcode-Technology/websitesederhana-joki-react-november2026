import { useEffect, useRef, useState } from 'react'
import { journey, sections } from '../content'
import { Photo, SectionHead } from './ui'

/** bingkai ngikutin bentuk foto, tapi dibatasi biar ga kepanjangan / kelebaran */
const frameRatio = (r: number) => Math.min(4 / 3, Math.max(3 / 4, r))

export function Journey() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const slides = Array.from(track.children) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(slides.indexOf(e.target as HTMLElement))
        })
      },
      { root: track, threshold: 0.6 },
    )
    slides.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const go = (i: number) => {
    const track = trackRef.current
    const target = track?.children[Math.max(0, Math.min(journey.length - 1, i))] as HTMLElement | undefined
    if (track && target) track.scrollTo({ left: target.offsetLeft - (track.clientWidth - target.clientWidth) / 2, behavior: 'smooth' })
  }

  return (
    <section id="journey" className="bg-leaf-deep text-sheet" aria-roledescription="carousel" aria-label="perjalanan 11 bulan">
      <div className="mx-auto max-w-3xl px-5 pt-[clamp(4rem,12vw,7rem)]">
        <SectionHead tone="leaf" note={sections.journey.note} title={sections.journey.title} sub={sections.journey.sub} />
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mx-auto flex max-w-3xl snap-x snap-mandatory items-center gap-5 overflow-x-auto px-[10%] pt-2 pb-8"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(active + 1)
          if (e.key === 'ArrowLeft') go(active - 1)
        }}
      >
        {journey.map((item, i) => (
          <article
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${journey.length}`}
            className={`w-[80%] shrink-0 snap-center transition-[opacity,transform] duration-500 ease-out-quart sm:w-[68%] ${
              active === i ? 'opacity-100' : 'scale-[0.94] opacity-55'
            }`}
          >
            <div className="bg-sheet p-3 pb-5 text-leaf shadow-[0_24px_40px_-20px_black]" style={{ rotate: `${i % 2 ? 1.2 : -1.2}deg` }}>
              <Photo
                src={item.photo}
                alt={`momen kita di bulan ${item.month}`}
                label={`foto ${item.month} 💗`}
                className="w-full"
                style={{ aspectRatio: frameRatio(item.ratio) }}
              />
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-4xl leading-none font-black text-raspberry">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl leading-none font-bold italic">{item.month}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-5 pb-[clamp(4rem,12vw,7rem)]">
        <button
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="momen sebelumnya"
          className="size-12 shrink-0 rounded-full border-2 border-nanas text-lg font-bold text-nanas transition-colors duration-200 hover:bg-nanas hover:text-leaf-deep disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-nanas"
        >
          ←
        </button>
        <div className="flex flex-wrap justify-center">
          {journey.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`ke bulan ${i + 1}`} aria-current={active === i} className="grid h-8 min-w-5 place-items-center">
              <span className={`block h-2 rounded-full transition-all duration-300 ease-out-quart ${active === i ? 'w-6 bg-nanas' : 'w-2 bg-sheet/40'}`} />
            </button>
          ))}
        </div>
        <button
          onClick={() => go(active + 1)}
          disabled={active === journey.length - 1}
          aria-label="momen selanjutnya"
          className="size-12 shrink-0 rounded-full border-2 border-nanas text-lg font-bold text-nanas transition-colors duration-200 hover:bg-nanas hover:text-leaf-deep disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-nanas"
        >
          →
        </button>
      </div>
    </section>
  )
}
