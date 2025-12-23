const badges = [
  {title:'Best UX — Hackathon 2024'},
  {title:'Certified Cloud Architect'},
  {title:'Open Source Contributor — 50+ PRs'}
]

export default function Achievements(){
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="badges">
          {badges.map((b,i)=> (
            <div key={i} className="badge reveal">{b.title}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
