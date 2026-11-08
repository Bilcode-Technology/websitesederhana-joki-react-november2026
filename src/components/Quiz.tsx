import { useEffect, useRef, useState } from 'react'
import { quiz, quizCopy, sections } from '../content'
import { playFanfare, playRight, playWrong } from '../lib/sfx'
import { Reveal, Section, SectionHead } from './ui'

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

export function Quiz({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)
  const [wrongPicks, setWrongPicks] = useState<number[]>([])
  const [correctPick, setCorrectPick] = useState<number | null>(null)
  const [feedback, setFeedback] = useState('')
  const [shakeKey, setShakeKey] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [allCorrect, setAllCorrect] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const questionRef = useRef<HTMLHeadingElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const q = quiz[index]

  const choose = (i: number) => {
    if (correctPick !== null || wrongPicks.includes(i)) return

    if (i !== q.answer) {
      setWrongPicks((w) => [...w, i])
      setFeedback(pick(quizCopy.wrong))
      setShakeKey((k) => k + 1)
      setMistakes((m) => m + 1)
      playWrong()
      return
    }

    setCorrectPick(i)
    setFeedback(pick(quizCopy.right))
    playRight()

    timer.current = window.setTimeout(() => {
      if (index === quiz.length - 1) {
        setAllCorrect(true)
        return
      }
      setIndex((n) => n + 1)
      setWrongPicks([])
      setCorrectPick(null)
      setFeedback('')
      questionRef.current?.focus({ preventScroll: true })
    }, 900)
  }

  const claim = () => {
    if (claimed) return
    setClaimed(true)
    playFanfare()
    // dipanggil langsung di event klik biar lagu ke-2 boleh autoplay
    onComplete()
  }

  const progress = ((index + (correctPick !== null ? 1 : 0)) / quiz.length) * 100

  return (
    <Section id="quiz" tone="nanas">
      <SectionHead note={sections.quiz.note} title={quizCopy.title} sub={quizCopy.intro} />

      <Reveal>
        {allCorrect ? (
          <div className="animate-pop mx-auto max-w-[34rem] bg-leaf-deep px-6 py-10 text-center text-sheet shadow-[0_30px_50px_-30px_oklch(0.25_0.06_152/0.8)]">
            <div className={`text-7xl ${claimed ? '' : 'animate-drift'}`} aria-hidden>
              {claimed ? '🏆' : '🎁'}
            </div>
            <p className="mx-auto mt-5 max-w-[30ch] font-display text-2xl leading-snug font-bold">
              {claimed ? quizCopy.claimed : quizCopy.allCorrect}
            </p>
            <p className="mt-3 text-sm opacity-85">
              total salah: {mistakes}x {mistakes === 0 ? '😍 sempurnaa' : '🤭 gapapa yang penting lulus'}
            </p>
            {claimed ? (
              <a
                href="#hidden"
                className="mt-7 inline-flex h-12 items-center rounded-full border-2 border-nanas px-6 font-bold text-nanas transition-colors duration-200 hover:bg-nanas hover:text-leaf-deep"
              >
                lihat kejutannyaa 👇🏻💗
              </a>
            ) : (
              <button
                onClick={claim}
                className="mt-7 inline-flex h-14 items-center rounded-full bg-raspberry px-9 text-lg font-bold text-sheet shadow-[0_6px_0_var(--color-raspberry-deep)] transition-[transform,box-shadow] duration-150 ease-out-quart hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_var(--color-raspberry-deep)]"
              >
                {quizCopy.claimButton}
              </button>
            )}
          </div>
        ) : (
          <div
            key={shakeKey}
            className={`mx-auto max-w-[34rem] bg-sheet px-5 py-7 shadow-[0_30px_50px_-30px_oklch(0.25_0.06_152/0.6)] sm:px-8 ${shakeKey ? 'animate-shake' : ''}`}
          >
            <div className="flex items-baseline justify-between">
              <p className="font-display text-lg font-bold">
                <span className="text-4xl font-black text-raspberry">{index + 1}</span>
                <span className="opacity-70"> / {quiz.length}</span>
              </p>
              <p className="text-sm">salah: {mistakes} 🙈</p>
            </div>
            <div
              className="mt-3 h-1.5 overflow-hidden rounded-full bg-leaf/15"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="progres kuis"
            >
              <div className="h-full rounded-full bg-raspberry transition-[width] duration-500 ease-out-quart" style={{ width: `${progress}%` }} />
            </div>

            <h3 ref={questionRef} tabIndex={-1} className="mt-6 font-display text-[1.45rem] leading-snug font-bold outline-none sm:text-2xl">
              {q.question}
            </h3>

            <div className="mt-6 grid gap-3">
              {q.options.map((opt, i) => {
                const isWrong = wrongPicks.includes(i)
                const isRight = correctPick === i
                return (
                  <button
                    key={`${index}-${i}`}
                    onClick={() => choose(i)}
                    disabled={isWrong || correctPick !== null}
                    aria-label={`${opt}${isWrong ? ', salah' : isRight ? ', benar' : ''}`}
                    className={`flex min-h-14 items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-[transform,background-color,border-color] duration-200 ease-out-quart active:scale-[0.98] ${
                      isRight
                        ? 'animate-pop border-ok bg-ok/10'
                        : isWrong
                          ? 'border-raspberry/50 bg-raspberry/8 text-leaf/60'
                          : correctPick !== null
                            ? 'border-leaf/15 opacity-60'
                            : 'border-leaf/25 hover:border-leaf hover:bg-nanas/30'
                    }`}
                  >
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        isRight ? 'bg-ok text-sheet' : isWrong ? 'bg-raspberry text-sheet' : 'bg-leaf/10'
                      }`}
                      aria-hidden
                    >
                      {isRight ? '✓' : isWrong ? '✕' : String.fromCharCode(97 + i)}
                    </span>
                    <span className={`text-base font-medium ${isWrong ? 'line-through decoration-raspberry decoration-2' : ''}`}>{opt}</span>
                  </button>
                )
              })}
            </div>

            <p aria-live="polite" className={`mt-4 min-h-8 text-center font-hand text-[1.9rem] leading-none ${correctPick !== null ? 'text-ok' : 'text-raspberry'}`}>
              {feedback}
            </p>
          </div>
        )}
      </Reveal>
    </Section>
  )
}
