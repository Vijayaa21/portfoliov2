export default function Footer(){
  return (
    <footer className="site-footer reveal" id="links">
      <div className="container footer-inner">
        <div className="socials">
          <a href="#" aria-label="GitHub" className="icon-link">GitHub</a>
          <a href="#" aria-label="LinkedIn" className="icon-link">LinkedIn</a>
          <a href="#" aria-label="Resume" className="icon-link">Resume</a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Your Name</div>
      </div>
    </footer>
  )
}
