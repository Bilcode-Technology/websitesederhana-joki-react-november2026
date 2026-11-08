import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

export type Tone = 'nanas' | 'leaf' | 'raspberry' | 'sheet'

const toneClass: Record<Tone, string> = {
  nanas: 'bg-nanas text-leaf',
  leaf: 'bg-leaf-deep text-sheet',
  raspberry: 'bg-raspberry text-sheet',
  sheet: 'bg-sheet text-leaf',
}

/** warna coretan pena papoy, disesuaikan sama background section */
const noteClass: Record<Tone, string> = {
  nanas: 'text-raspberry',
  leaf: 'text-nanas',
  raspberry: 'text-nanas',
  sheet: 'text-raspberry',
}

/** foto dengan placeholder kalau filenya belum ada */
export function Photo({
  src,
  alt,
  className = '',
  label,
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  label?: string
  eager?: boolean
}) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-1 bg-nanas-deep text-center text-leaf ${className}`}
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in oklch, var(--color-leaf) 7%, transparent) 14px 28px)',
        }}
      >
        <span className="text-4xl" aria-hidden>
          🍍
        </span>
        <span className="px-4 font-hand text-2xl leading-none">{label ?? 'foto nyusul yaa 💗'}</span>
        <span className="px-2 font-sans text-xs opacity-75">{src}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}

/**
 * muncul pelan-pelan waktu di-scroll.
 * default-nya kelihatan; cuma elemen yang masih di bawah layar yang disembunyikan dulu.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return
    el.classList.add('reveal-pending')
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        el.classList.add('reveal-run')
        el.style.transitionDelay = `${delay}ms`
        el.classList.remove('reveal-pending')
        io.disconnect()
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

/** judul rubrik: headline bodoni + coretan pena papoy */
export function SectionHead({
  title,
  note,
  sub,
  tone = 'nanas',
  align = 'center',
}: {
  title: string
  note?: string
  sub?: string
  tone?: Tone
  align?: 'center' | 'left'
}) {
  return (
    <Reveal className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      {note && (
        <p className={`mb-1 -rotate-2 font-hand text-3xl leading-none ${noteClass[tone]}`} aria-hidden>
          {note}
        </p>
      )}
      <h2 className="font-display text-[clamp(2.1rem,9vw,3.5rem)] leading-[1.05] font-black tracking-[-0.02em]">{title}</h2>
      {sub && <p className={`mt-4 max-w-[46ch] text-base leading-relaxed opacity-90 ${align === 'center' ? 'mx-auto' : ''}`}>{sub}</p>}
    </Reveal>
  )
}

export function Section({
  id,
  children,
  tone = 'nanas',
  className = '',
  inner = '',
}: {
  id?: string
  children: ReactNode
  tone?: Tone
  className?: string
  inner?: string
}) {
  return (
    <section id={id} className={`${toneClass[tone]} ${className}`}>
      <div className={`mx-auto w-full max-w-3xl px-5 py-[clamp(4rem,12vw,7rem)] ${inner}`}>{children}</div>
    </section>
  )
}
