import ProjectCard from './ProjectCard'

const demoProjects = [
  {
    title: 'Project Aurora',
    desc: 'A calm UI toolkit inspired by day/night contrast.',
    tech: ['React', 'Next.js', 'CSS'],
    href: '#'
  },
  {
    title: 'Nightlight Dashboard',
    desc: 'Analytics dashboard with a dark-first design system.',
    tech: ['TypeScript', 'D3', 'React'],
    href: '#'
  },
  {
    title: 'OpenSource Lib',
    desc: 'A tiny utility library used across my projects.',
    tech: ['Node', 'ESM'],
    href: '#'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="section projects reveal">
      <div className="container">
        <h2>Projects</h2>
        <p className="lead">Selected work — dark cards, light text, crisp details.</p>
        <div className="projects-grid">
          {demoProjects.map((p,i)=> (
            <ProjectCard key={i} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
