import { useState } from 'react'
import './Footer.css'
import HistoryModal from './HistoryModal'
import FriendsModal from './FriendsModal'

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-ic">
      <path
        fill="currentColor"
        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.14 0-3.5.01-4.74.07-.96.04-1.49.2-1.83.34-.46.18-.79.39-1.14.74-.35.35-.56.68-.74 1.14-.14.34-.3.87-.34 1.83-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.96.2 1.49.34 1.83.18.46.39.79.74 1.14.35.35.68.56 1.14.74.34.14.87.3 1.83.34 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.96-.04 1.49-.2 1.83-.34.46-.18.79-.39 1.14-.74.35-.35.56-.68.74-1.14.14-.34.3-.87.34-1.83.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.96-.2-1.49-.34-1.83a3.08 3.08 0 0 0-.74-1.14 3.08 3.08 0 0 0-1.14-.74c-.34-.14-.87-.3-1.83-.34-1.24-.06-1.6-.07-4.74-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm5.68-9.23a1.27 1.27 0 1 1-2.54 0 1.27 1.27 0 0 1 2.54 0Z"
      />
    </svg>
  )
}

const SOCIALS = [
  { href: 'https://www.instagram.com/tscsc_4th', label: 'Instagram', icon: <IgIcon /> },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [history, setHistory] = useState(false)
  const [friends, setFriends] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/nbglogo.png" alt="" className="footer-logo" />
          <div>
            <b>T-School Computer Science Club</b>
            <span>臺北市數位實驗高中資訊研究社 · 第 4 屆</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">關於我們</a>
          <a href="#courses">社課簡介</a>
          <a href="#team">幹部簡介</a>
          <a href="#join">入社登記</a>
          <br />
          <button type="button" onClick={() => setHistory(true)}>
            社團歷程
          </button>
          <button type="button" onClick={() => setFriends(true)}>
            友社
          </button>
        </div>

        <div className="footer-contact">
          <div className="footer-social">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a className="footer-email" href="mailto:irc@tschool.tp.edu.tw">
            irc@tschool.tp.edu.tw
          </a>
        </div>
      </div>

      <div className="footer-copy">
        © {year} T-School Computer Science Club. All Rights Reserved.
      </div>

      <HistoryModal open={history} onClose={() => setHistory(false)} />
      <FriendsModal open={friends} onClose={() => setFriends(false)} />
    </footer>
  )
}
