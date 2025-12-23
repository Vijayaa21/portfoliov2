export default function Hero(){
  return (
    <section id="home" className="hero reveal" aria-label="Home">
      <div className="hero-inner">
        <p className="eyebrow">Hello — I'm</p>
        <h1 className="name">Your Name</h1>
        <p className="subtitle">A product-minded developer building delightful web experiences.</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#links" className="btn ghost">Contact / Resume</a>
        </div>
      </div>
    </section>
  )
}
