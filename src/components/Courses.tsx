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
  const itemsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      itemsRef.current.forEach((el) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > vh) return
        // -1 when the card is at the bottom of the viewport, 1 at the top
        const progress = 1 - (rect.top + rect.height / 2) / (vh / 2)
        el.style.setProperty('--shift', `${(progress * 24).toFixed(1)}px`)
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="courses" className="courses">
      <div className="container courses-head">
        <span className="section-label">Courses</span>
        <h2 className="section-title">社課簡介</h2>
        <p className="section-subtitle">
          內容規劃包括但不限於三大主軸，涵蓋基礎知識培養、實務能力訓練與多元探索等面向，讓社團成員能夠在資訊領域中全面發展，並為未來的學習與職涯奠定堅實基礎。
        </p>
      </div>

      <div className="container courses-list">
        {COURSES.map((c, i) => (
          <article
            key={c.title}
            className="course-row"
            ref={(el) => {
              itemsRef.current[i] = el
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
