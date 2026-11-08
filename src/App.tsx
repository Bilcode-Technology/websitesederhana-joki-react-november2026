import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Hero } from './components/Hero'
import { HiddenSections, LockedTeaser } from './components/Hidden'
import { Journey } from './components/Journey'
import { Letter } from './components/Letter'
import { Lock } from './components/Lock'
import { Quiz } from './components/Quiz'
import { config, footer, monthversaryLetter, sections } from './content'
import { useMusic } from './lib/music'

// khusus mode dev: ?skip = lewati password, ?done = kuis dianggap selesai (buat ngecek tampilan)
const devFlags = import.meta.env.DEV ? new URLSearchParams(window.location.search) : null

function celebrate() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 }, ticks: 120, disableForReducedMotion: false })
    return
  }
  const colors = ['#f2d64b', '#d23a64', '#2f5a3e', '#fffbea']
  const end = Date.now() + 2200
  ;(function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0, y: 0.75 }, colors })
    confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1, y: 0.75 }, colors })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
  confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors, scalar: 1.1 })
}

export default function App() {
  const [unlocked, setUnlocked] = useState(() => devFlags?.has('skip') || devFlags?.has('done') || false)
  const [quizDone, setQuizDone] = useState(() => devFlags?.has('done') ?? false)
  const music = useMusic()

  const handleUnlock = () => {
    music.play(config.song1)
    window.setTimeout(() => setUnlocked(true), 700)
  }

  const handleQuizDone = () => {
    music.play(config.song2) // lagu 1 otomatis di-stop dulu di dalam play()
    celebrate()
    setQuizDone(true)
  }

  return (
    <>
      {!unlocked && <Lock onUnlock={handleUnlock} />}

      {unlocked && (
        <main className="overflow-x-clip">
          <Hero />
          <Journey />
          <Letter
            tone="nanas"
            note={sections.monthversary.note}
            title={monthversaryLetter.title}
            opening={monthversaryLetter.opening}
            paragraphs={monthversaryLetter.paragraphs}
            closing={monthversaryLetter.closing}
            signature={monthversaryLetter.signature}
          />
          <Quiz onComplete={handleQuizDone} />
          {quizDone ? <HiddenSections /> : <LockedTeaser />}

          <footer className="bg-leaf-deep text-sheet">
            <div className="mx-auto max-w-3xl px-5 pt-10 pb-[max(6rem,calc(env(safe-area-inset-bottom)+5rem))] text-center">
              <p className="font-display text-3xl leading-none font-black tracking-[-0.03em]">
                <span className="italic">the</span> nanas daily
              </p>
              <p className="mx-auto mt-3 max-w-[40ch] text-sm leading-relaxed">{footer}</p>
            </div>
          </footer>
        </main>
      )}

      {unlocked && music.available && (
        <button
          onClick={music.toggle}
          aria-label={music.playing ? 'jeda lagu' : 'putar lagu'}
          aria-pressed={music.playing}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-float flex h-12 items-center gap-2 rounded-full bg-leaf-deep pr-4 pl-3 text-sm font-semibold text-nanas shadow-[0_10px_24px_-8px_black] transition-transform duration-150 active:scale-95"
        >
          <span className={`text-xl ${music.playing ? 'animate-spin [animation-duration:3s]' : ''}`} aria-hidden>
            💿
          </span>
          {music.playing ? 'lagi muter' : 'putar lagi'}
        </button>
      )}
    </>
  )
}
