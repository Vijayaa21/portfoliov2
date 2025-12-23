const repos = [
  {name:'example-lib', desc:'Utility library for formatting dates.', href:'#'},
  {name:'design-system', desc:'A minimal design system used across projects.', href:'#'},
]

export default function OpenSource(){
  return (
    <section id="opensource" className="section opensource">
      <div className="container">
        <h2>Open Source</h2>
        <div className="oss-grid">
          {repos.map((r,i)=> (
            <a key={i} className="oss-item reveal" href={r.href}>
              <div className="oss-title">{r.name}</div>
              <div className="oss-desc">{r.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
