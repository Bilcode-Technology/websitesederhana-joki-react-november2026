import { useState, type FormEvent } from 'react'
import { config, hero, lock } from '../content'
import { playWrong, unlockAudio } from '../lib/sfx'

export function Lock({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [shakeKey, setShakeKey] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    unlockAudio()
    if (value.trim() === config.password) {
      setLeaving(true)
      onUnlock() // dipanggil langsung di event klik biar autoplay lagu ga diblok browser
      return
    }
    setError(true)
    setShakeKey((k) => k + 1)
    playWrong()
  }

  return (
    <div
      className={`fixed inset-0 z-overlay flex flex-col bg-nanas px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] ${
        leaving ? 'lock-exit pointer-events-none' : 'lock'
      }`}
    >
      <div className="flex items-baseline justify-between border-b-2 border-leaf pb-2 text-xs font-semibold">
        <span>security check 🔐</span>
        <span>{hero.issue}</span>
      </div>

      <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center text-center">
        <h1 className="font-display leading-[0.85] font-black tracking-[-0.03em]">
          <span className="block text-3xl italic">the</span>
          <span className="block text-[clamp(3.2rem,17vw,5.5rem)]">nanas daily</span>
        </h1>
        <p className="mt-3 font-display text-lg italic">— {hero.edition} —</p>

        <p className="mt-10 font-hand text-[1.9rem] leading-none text-raspberry -rotate-2">{lock.title}</p>
        <p className="mx-auto mt-3 max-w-[32ch] text-base leading-relaxed">{lock.subtitle}</p>

        <form onSubmit={submit} className="mt-7" noValidate>
          <label htmlFor="pw" className="sr-only">
            password
          </label>
          <div key={shakeKey} className={error ? 'animate-shake' : ''}>
            <input
              id="pw"
              type="password"
              inputMode="numeric"
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setError(false)
              }}
              placeholder="ketik password di sini"
              aria-invalid={error}
              aria-describedby="pw-msg"
              className={`h-14 w-full rounded-full border-2 bg-sheet px-5 text-center text-lg text-leaf outline-none transition-colors duration-200 placeholder:text-base placeholder:text-leaf/70 focus:border-raspberry ${
                error ? 'border-raspberry' : 'border-leaf'
              }`}
            />
          </div>
          <p id="pw-msg" aria-live="polite" className="mt-2 min-h-6 text-sm font-semibold text-raspberry-deep">
            {error ? lock.wrong : ''}
          </p>
          <button
            type="submit"
            className="mt-1 h-14 w-full rounded-full bg-leaf text-base font-bold text-nanas transition-[transform,background-color] duration-200 ease-out-quart hover:bg-leaf-deep active:scale-[0.97]"
          >
            {lock.button}
          </button>
          <p className="mt-5 font-hand text-2xl leading-tight">psst, {config.passwordHint}</p>
        </form>
      </div>
    </div>
  )
}
