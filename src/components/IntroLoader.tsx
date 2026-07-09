import { useEffect, useState } from 'react'
import './IntroLoader.css'

interface IntroLoaderProps {
  onDone: () => void
}

type Phase = 'in' | 'word' | 'expand' | 'roll' | 'done'

const LETTERS = [
  { ch: 'T', color: '#000000' },
  { ch: 'S', color: '#000000' },
  { ch: 'C', color: '#5271ff' },
  { ch: 'S', color: '#5271ff' },
  { ch: 'C', color: '#000000' },
]

// 每個字母從四周飛入的起始偏移（4 個方向輪替）
const ORIGIN = [
  { x: -360, y: -260 },
  { x: -300, y: 220 },
  { x: 320, y: -240 },
  { x: 280, y: 240 },
  { x: 0, y: -320 },
]

export default function IntroLoader({ onDone }: IntroLoaderProps) {
  const [phase, setPhase] = useState<Phase>('in')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase('word'), 400)
    const t2 = window.setTimeout(() => setPhase('expand'), 500)
    const t3 = window.setTimeout(() => setPhase('roll'), 1900)
    const t4 = window.setTimeout(() => {
      setHidden(true)
      setPhase('done')
      onDone()
    }, 2300)
    return () => {
      ;[t1, t2, t3, t4].forEach(window.clearTimeout)
    }
  }, [onDone])

  if (phase === 'done') return null

  return (
    <div className={`intro ${hidden ? 'hide' : ''} ${phase}`}>
      <div className="intro-stage">
        <div className="intro-letters">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="intro-letter"
              style={
                {
                  '--ox': `${ORIGIN[i].x}px`,
                  '--oy': `${ORIGIN[i].y}px`,
                  '--c': l.color,
                  '--i': i,
                } as React.CSSProperties
              }
            >
              {l.ch}
            </span>
          ))}
        </div>

        <div className="intro-lines">
          <div className="intro-line intro-line-a">TSchool</div>
          <div className="intro-line intro-line-b">Computer Science</div>
          <div className="intro-line intro-line-c">Club</div>
        </div>

        <div className="intro-ball" aria-hidden="true" />
      </div>
    </div>
  )
}
