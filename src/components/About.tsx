import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-left">
          <div className="about-logo-wrap">
            <img src="/nbglogo.png" alt="TSCSC logo" className="about-logo" />
          </div>
        </div>
        <div className="about-right">
          <span className="section-label">About</span>
          <h1 className="section-title">
            關於我們
            <br />
            <span className="about-hl">資訊研究社</span>
          </h1>
          <p>
            來自數位實中一群對資訊充滿熱情的人們，
          </p>
          <p>
            我們在自由的時間與空間內，<br />創造出屬於我們的交流天地。
          </p>
        </div>
      </div>
      <a href="#courses" className="about-scroll" aria-label="向下捲動">
        <span />
      </a>
    </section>
  )
}
