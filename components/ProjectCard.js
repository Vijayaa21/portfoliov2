export default function ProjectCard({project, delay = 0}){
  const style = { ['--delay']: `${delay}ms` }
  return (
    <article className="project-card reveal" style={style}>
      <div className="project-card-inner">
        <h3>{project.title}</h3>
        <p className="desc">{project.desc}</p>
        <div className="tech">{project.tech.join(' • ')}</div>
        <div className="links">
          <a className="btn small" href={project.href}>Live</a>
          <a className="btn small ghost" href={project.href}>Source</a>
        </div>
      </div>
    </article>
  )
}
