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
  { name: 'SCINT 北臺灣學生資訊社群', desc: '串連北臺灣的高中職資訊社團，一起辦活動、開課程、辦競賽。讓想學資訊的人不必獨自摸索，社團幹部也不必每年從零開始。', avatar: '/friend/scint.png', href: 'https://scint.org/' },
  { name: 'SCAICT 中部高中職電資社團聯合會議', desc: '成立於西元 2021 年，是由一群熱愛資訊科技和社團活動的高中職生所組成，而主要目的在於整合中部資訊科技資源，推廣資訊相關的課程。', avatar: '/friend/scaict.png', href: 'https://scaict.org/' },
  { name: 'CMIOC 景美女中電腦資訊社 33 屆', desc: '成立於西元 1997 年，由一群對資訊科技有濃厚興趣的黃衫客所組成。', avatar: '/friend/cmioc.png', href: 'https://cmioc.com/' },
  { name: 'T404 數位實中自行車社 1 屆', desc: '成立於西元 2026 年，由一個對資訊科技有濃厚興趣的人類所組成。', avatar: '/friend/t404club.png', href: 'https://www.t404.club' },
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
