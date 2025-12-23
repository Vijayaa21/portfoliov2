const items = [
  { role: 'Senior Developer', company: 'Acme Co', period: '2022 — Present', blurb: 'Built scalable features and improved performance by 30%.' },
  { role: 'Frontend Engineer', company: 'Pixel Labs', period: '2019 — 2022', blurb: 'Led UI redesign, shipping component library.' },
  { role: 'Intern', company: 'Startup', period: '2018 — 2019', blurb: 'Contributed to early-stage product features.' }
]

export default function Experience(){
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {items.map((it,i)=> (
            <div key={i} className={`timeline-item ${i%2===0? 'sky':'night'} reveal`}>
              <div className="timeline-content">
                <h3>{it.role} <span className="muted">@ {it.company}</span></h3>
                <div className="period">{it.period}</div>
                <p>{it.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
