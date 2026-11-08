import type { CSSProperties } from 'react'
import { hero, names } from '../content'
import { Photo } from './ui'

const MAST = 'nanas daily'

export function Hero() {
  return (
    <header className="bg-nanas">
      <div className="mx-auto w-full max-w-3xl px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-12">
        {/* running header */}
        <div className="flex items-baseline justify-between border-b-2 border-leaf pb-2 text-xs font-semibold">
          <span>vol. 11 · no. 1</span>
          <span>{hero.issue}</span>
        </div>

        {/* masthead */}
        <h1 className="pt-4 text-center font-display leading-[0.82] font-black tracking-[-0.035em]" aria-label={hero.magazineName}>
          <span className="mast-letter block text-[clamp(1.6rem,7vw,2.6rem)] italic" aria-hidden>
            the
          </span>
          <span className="block text-[clamp(3rem,16.5vw,6rem)] whitespace-nowrap" aria-hidden>
            {MAST.split('').map((ch, i) => (
              <span key={i} className="mast-letter" style={{ animationDelay: `${80 + i * 45}ms` }}>
                {ch === ' ' ? '\u00a0' : ch}
              </span>
            ))}
          </span>
        </h1>
        <p className="mt-2 mb-5 text-center font-display text-lg italic">— {hero.edition} —</p>

        {/* cover */}
        <div className="cover-in relative overflow-hidden rounded-[3px] bg-leaf-deep shadow-[0_30px_60px_-30px_oklch(0.25_0.06_152/0.7)]">
          <Photo src={hero.coverPhoto} alt={`${names.partner} di cover majalah`} label="foto cover utama 👑" eager className="aspect-[3/4] w-full" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.2_0.05_152/0.92),oklch(0.2_0.05_152/0.15)_55%,transparent)]" />

          {/* cover lines ditempel ala tabloid */}
          <ul className="absolute top-4 left-4 flex max-w-[62%] flex-col items-start gap-2 sm:top-6 sm:left-6">
            {hero.coverLines.map((line, i) => {
              const r = `${i % 2 ? 1.5 : -1.5}deg`
              return (
                <li
                  key={line}
                  className="slap-in bg-sheet px-2.5 py-1 text-[13px] leading-snug font-bold text-leaf shadow-md sm:text-sm"
                  style={{ '--r': r, transform: `rotate(${r})`, animationDelay: `${700 + i * 110}ms` } as CSSProperties}
                >
                  {line}
                </li>
              )
            })}
          </ul>

          <div className="stamp-in absolute top-4 right-4 flex size-[5.5rem] rotate-12 flex-col items-center justify-center rounded-full bg-raspberry text-center font-display leading-none font-black text-sheet shadow-lg sm:size-28">
            <span className="text-4xl sm:text-5xl">11</span>
            <span className="text-xs italic sm:text-sm">bulan 💍</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 text-sheet sm:p-8">
            <h2 className="font-display text-[clamp(1.75rem,7.5vw,3.25rem)] leading-[1.02] font-black italic">{hero.headline}</h2>
            <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed sm:text-base">{hero.subHeadline}</p>
          </div>
        </div>

        <a
          href="#journey"
          className="mx-auto mt-8 flex min-h-11 w-fit items-center gap-2 rounded-full px-4 font-hand text-2xl transition-transform duration-200 hover:translate-y-0.5"
        >
          scroll ke bawah yaa sayangg <span className="animate-drift inline-block">👇🏻</span>
        </a>
      </div>
    </header>
  )
}
