import { Reveal, Section, SectionHead, type Tone } from './ui'

type LetterProps = {
  title: string
  note?: string
  opening?: string
  paragraphs: string[]
  closing?: string
  signature: string
  tone?: Tone
}

/** surat — dipakai buat surat monthversary & surat wisuda */
export function Letter({ title, note, opening, paragraphs, closing, signature, tone = 'nanas' }: LetterProps) {
  return (
    <Section tone={tone}>
      <SectionHead tone={tone} note={note} title={title} />
      <Reveal>
        <article className="relative mx-auto max-w-[38rem] bg-sheet px-6 py-10 text-leaf shadow-[0_30px_50px_-30px_oklch(0.25_0.06_152/0.6)] sm:px-12 sm:py-14">
          {/* selotip */}
          <span
            className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 bg-raspberry/25 backdrop-blur-[1px]"
            aria-hidden
          />
          {opening && <p className="mb-6 font-display text-xl leading-snug font-bold italic sm:text-2xl">{opening}</p>}
          <div className="space-y-5 text-[17px] leading-[1.8]">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:font-black first-letter:text-raspberry'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
          {closing && <p className="mt-8 font-display text-xl leading-snug font-bold italic">{closing}</p>}
          <p className="mt-8 -rotate-2 text-right font-hand text-[2.1rem] leading-none text-raspberry">{signature}</p>
        </article>
      </Reveal>
    </Section>
  )
}
