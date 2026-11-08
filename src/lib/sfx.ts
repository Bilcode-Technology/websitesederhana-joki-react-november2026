// sound effect dibikin langsung pakai Web Audio, jadi ga butuh file mp3 tambahan

let ctx: AudioContext | null = null

function audio(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return null
  ctx ??= new Ctor()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

function tone(freq: number, start: number, dur: number, type: OscillatorType, vol: number, slideTo?: number) {
  const ac = audio()
  if (!ac) return
  const t = ac.currentTime + start
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t)
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(vol, t + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  osc.connect(gain).connect(ac.destination)
  osc.start(t)
  osc.stop(t + dur + 0.02)
}

/** bunyi "bzzt bzzt" waktu jawaban salah + getar hp (android) */
export function playWrong() {
  tone(180, 0, 0.16, 'sawtooth', 0.18, 120)
  tone(150, 0.18, 0.22, 'sawtooth', 0.18, 90)
  navigator.vibrate?.([90, 50, 120])
}

/** bunyi "ting!" waktu jawaban benar */
export function playRight() {
  tone(880, 0, 0.18, 'sine', 0.2)
  tone(1320, 0.09, 0.28, 'sine', 0.16)
}

/** fanfare kecil waktu kuis selesai */
export function playFanfare() {
  ;[523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.35, 'triangle', 0.16))
}

/** dipanggil saat user klik pertama kali biar audio context ke-unlock di iOS */
export function unlockAudio() {
  audio()
}
