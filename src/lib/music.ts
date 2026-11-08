import { useCallback, useEffect, useRef, useState } from 'react'

/** pemutar lagu latar: lagu 1 setelah password, ganti ke lagu 2 setelah kuis */
export function useMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    const a = new Audio()
    a.loop = true
    a.preload = 'auto'
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    audioRef.current = a
    return () => {
      a.pause()
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
    }
  }, [])

  const play = useCallback((src: string) => {
    const a = audioRef.current
    if (!a) return
    a.pause()
    a.src = src
    a.currentTime = 0
    a.volume = 0
    a.play()
      .then(() => {
        setAvailable(true)
        // fade in pelan-pelan
        let v = 0
        const id = window.setInterval(() => {
          v = Math.min(1, v + 0.05)
          a.volume = v
          if (v >= 1) window.clearInterval(id)
        }, 80)
      })
      .catch(() => setAvailable(false)) // file lagu belum ada / diblok browser
  }, [])

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (!a?.src) return
    if (a.paused) void a.play()
    else a.pause()
  }, [])

  /** stop total + reset ke awal (dipakai tombol "ulangi dari awal") */
  const stop = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    a.pause()
    a.currentTime = 0
    setAvailable(false)
  }, [])

  return { play, toggle, stop, playing, available }
}
