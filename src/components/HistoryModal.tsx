import Modal from './Modal'
import './HistoryModal.css'

interface HistoryModalProps {
  open: boolean
  onClose: () => void
}

interface Event {
  year: string
  title: string
  desc: string
}

const HISTORY: Event[] = [
  { year: '2023', title: '創社元年', desc: '由一群熱愛資訊的同學發起，數位實中資訊研究社正式成立，第一屆正式運作，奠定基礎。' },
  { year: '2024', title: '第二屆', desc: '推對社群合作，拓展社課內容。社群經營上路，與友社建立良好關係，共同舉辦資訊聯合工作坊。' },
  { year: '2025', title: '第三屆', desc: '深入資訊安全，拓展社群交流。提升社團影響力，展望未來！' },
  { year: '2026', title: '第四屆', desc: '重塑視覺與網站，課程內容再升級，正式迎向生成式 AI 時代。' },
]

export default function HistoryModal({ open, onClose }: HistoryModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="社團歷程"
      subtitle="一路走來，從種子到森林。成為數位實中元老社團！"
    >
      <ol className="history">
        {HISTORY.map((e) => (
          <li className="history-item" key={e.year}>
            <div className="history-dot" />
            <div className="history-body">
              <span className="history-year">{e.year}</span>
              <b className="history-title">{e.title}</b>
              <p>{e.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </Modal>
  )
}
