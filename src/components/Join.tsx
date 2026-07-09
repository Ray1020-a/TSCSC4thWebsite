import './Join.css'

const FORM_SRC =
  'https://docs.google.com/forms/d/e/1FAIpQLSde848dAX6wyKy4dSnB1E3CsY7w97PPQfj8p59kxY9JEd10VA/viewform?embedded=true'

export default function Join() {
  return (
    <section id="join" className="join">
      <div className="container">
        <span className="section-label">Join</span>
        <h2 className="section-title">入社登記表單</h2>
        <p className="section-subtitle">
          沒有繁瑣的入社流程，本校學生填寫表單即可加入我們的社團，與我們一起探索資訊世界！
        </p>

        <div className="join-frame">
          <iframe
            src={FORM_SRC}
            title="入社登記表單"
            className="join-iframe"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
