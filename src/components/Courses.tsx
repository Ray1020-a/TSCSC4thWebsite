import { useEffect, useRef } from 'react'
import './Courses.css'

interface Course {
  title: string
  subtitle: string
  desc: string
  tags: string[]
  img: string
}

const COURSES: Course[] = [
  {
    title: '資訊安全',
    subtitle: 'Information Security',
    desc: '認識密碼學、網路安全、滲透測試等，學會保護自己與他人的系統，培養資安思維與實戰能力。',
    tags: ['密碼學', 'Web 安全', 'CTF'],
    img: '/courses/1.jpg',
  },
  {
    title: '程式設計',
    subtitle: 'Programming',
    desc: '從語法基礎到資料結構、演算法，搭配實作專題循序漸進，打造紮實的程式能力與解題思維。',
    tags: ['Python', 'C++', '演算法'],
    img: '/courses/2.jpg',
  },
  {
    title: '人工智慧',
    subtitle: 'Artificial Intelligence',
    desc: '從機器學習、深度學習到生成式 AI，探索 AI 背後原理；透過 Vibe Coding 將抽象想法轉化為可運作的產品、工具與創意應用。',
    tags: ['ML', 'LLM', 'Vibe Coding'],
    img: '/courses/3.jpg',
  },
]

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current
      if (!sec) return
      const rect = sec.getBoundingClientRect()
      const vh = window.innerHeight
      // progress: 0 when section enters, 1 when section leaves
      const total = rect.height + vh
      const scrolled = Math.min(Math.max(vh - rect.top, 0), total)
      const progress = scrolled / total
      itemsRef.current.forEach((_, i) => {
        const dir = i % 2 === 0 ? 1 : -1
        const px = (progress - 0.5) * dir * 40
        const el = itemsRef.current[i]
        if (el) el.style.setProperty('--shift', `${px}px`)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="courses" ref={sectionRef} className="courses">
      <div className="container courses-head">
        <span className="section-label">Courses</span>
        <h2 className="section-title">社課簡介</h2>
        <p className="section-subtitle">
          內容規劃包括但不限於三大主軸，涵蓋基礎知識培養、實務能力訓練與多元探索等面向，讓社團成員能夠在資訊領域中全面發展，並為未來的學習與職涯奠定堅實基礎。
        </p>
      </div>

      <div className="courses-list">
        {COURSES.map((c, i) => (
          <article
            key={c.title}
            className="course-row"
            style={{ '--shift': '0px' } as React.CSSProperties}
            ref={(el) => {
              if (el) itemsRef.current[i] = el
            }}
          >
            <img src={c.img} alt="" loading="lazy" />
            <div className="course-overlay" />
            <div className="course-content">
              <span className="course-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>
                {c.title}
                <em>{c.subtitle}</em>
              </h3>
              <p>{c.desc}</p>
              <ul className="course-tags">
                {c.tags.map((t) => (
                  <li key={t}>#{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
