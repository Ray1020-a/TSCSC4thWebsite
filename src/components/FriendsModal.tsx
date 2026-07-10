import Modal from './Modal'
import './FriendsModal.css'

interface FriendsModalProps {
  open: boolean
  onClose: () => void
}

interface Friend {
  name: string
  desc: string
  avatar: string
  href: string
}

const FRIENDS: Friend[] = [
  { name: '暫無', desc: '暫無資料', avatar: 'https://picsum.photos/seed/f1/300/300', href: '#' },
]

export default function FriendsModal({ open, onClose }: FriendsModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="友社及合作社群"
      subtitle="感謝一路相伴的夥伴，點擊卡片可前往他們的社群。"
    >
      <ul className="friends-grid">
        {FRIENDS.map((f) => (
          <li key={f.name}>
            <a className="friend-card" href={f.href} target="_blank" rel="noreferrer">
              <img src={f.avatar} alt={f.name} className="friend-av" />
              <b className="friend-name">{f.name}</b>
              <p className="friend-desc">{f.desc}</p>
              <span className="friend-link">前往 →</span>
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  )
}
