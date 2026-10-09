import { useEffect, useRef, useState } from 'react'
import './Team.css'

interface Member {
  name: string
  role: string
  avatar: string
  intro: string
  /** 是否套用外框（去背 PNG 疊在大頭貼上方）。 */
  framed?: boolean
  /** 外框 PNG 路徑，預設使用 /team/frame.png。 */
  frame?: string
  /** 是否開啟閃亮亮的粒子效果。 */
  sparkle?: boolean
}

/** 預設外框 PNG（已去背、可直接疊在圓形頭貼外圈）。 */
const DEFAULT_FRAME = '/team/frame.png'

const MEMBERS: Member[] = [
  { name: 'LaiRay', role: '社長', avatar: '/team/ray.png', intro: '統籌社團整體事務。擅長睡覺熱愛說笑，只要是資訊類的都碰碰看，又不虧！', framed: true, sparkle: true, frame: '/team/frame/popcat.png' },
  { name: 'Hailey', role: '副社長', avatar: '/team/hailey.jpg', intro: '協助社長處理社務、對外聯絡。一個特別的人，腦子很好什麼都會！', framed: true, sparkle: true, frame: '/team/frame/forhailey.png' },
  { name: 'Super', role: '總務', avatar: '/team/super.jpg', intro: '負責後勤與行政事務。睡眠時數令人擔憂，誇領域整合能文能理，把法條背出來有點嚇到，優秀學生會長！' },
  { name: 'Yushun', role: '教學', avatar: '/team/yushun.jpg', intro: '負責帶領資訊技術課程與實作活動，擔任學生會數位部部長，擁有多年的兒童程式教學經驗，自由車社社長騎行就像他的生命！' },
  { name: 'LCY', role: '書記', avatar: '/team/lcy.jpg', intro: '負責記錄社團會議紀要，在學生會數位部，努力產出成果，值得肯定的資訊人才！' },
]

/** 輪播重複的組數：需足以在寬螢幕上填滿畫面，CSS 動畫每次位移一組（-1/COPIES）。 */
const COPIES = 4

export default function Team() {
  const [active, setActive] = useState<number | null>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  // 展開時捲動到介紹區，確保內容可見
  useEffect(() => {
    if (active === null) return
    const el = detailRef.current
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [active])

  const trackList = Array.from({ length: COPIES }, () => MEMBERS).flat()

  return (
    <section id="team" className="team">
      <div className="container team-head">
        <span className="section-label">Team</span>
        <h2 className="section-title">幹部簡介</h2>
        <p className="section-subtitle">
          將滑鼠停在卡片上可暫停滑動，點擊頭貼認識每一位幹部的故事。
        </p>
      </div>

      <div className={`team-viewport ${active !== null ? 'is-paused' : ''}`}>
        <div
          className="team-track"
          style={{ '--copies': COPIES } as React.CSSProperties}
        >
          {trackList.map((m, i) => {
            const realIdx = i % MEMBERS.length
            const isActive = active === realIdx
            // 只有第一組給輔助科技與鍵盤使用，其餘為視覺上的重複
            const isClone = i >= MEMBERS.length
            return (
              <div
                key={i}
                className={`team-card ${isActive ? 'active' : ''}`}
                aria-hidden={isClone || undefined}
              >
                <div className="team-avatar-wrap">
                  <button
                    type="button"
                    className={`team-avatar-btn ${m.sparkle ? 'is-sparkle' : ''}`}
                    onClick={() =>
                      setActive((cur) => (cur === realIdx ? null : realIdx))
                    }
                    aria-expanded={isActive}
                    aria-label={`${m.name}（${m.role}）介紹`}
                    tabIndex={isClone ? -1 : undefined}
                  >
                    <img src={m.avatar} alt="" />
                  </button>
                  {m.framed && (
                    <img
                      className="team-avatar-frame"
                      src={m.frame ?? DEFAULT_FRAME}
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  {m.sparkle && (
                    <span className="team-sparkle" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  )}
                </div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 完整介紹：置於 carousel 下方，永不被擋 */}
      {active !== null && (
        <div className="team-detail-wrap" ref={detailRef}>
          <button
            type="button"
            className="team-detail-close"
            aria-label="收合"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <div className="team-detail">
            <div className="team-detail-head">
              <img src={MEMBERS[active].avatar} alt="" />
              <div>
                <b>{MEMBERS[active].name}</b>
                <span>{MEMBERS[active].role}</span>
              </div>
            </div>
            <p>{MEMBERS[active].intro}</p>
          </div>
        </div>
      )}
    </section>
  )
}
