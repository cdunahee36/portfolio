import { Link, withRouter } from "react-router-dom";

function Nav() {
  return(
    <header class="navbar" id="nav-border">
      <section class="navbar-section">
        <Link id="text" class="btn" to="/">
          Caleb Dunahee
        </Link>
        <Link id="text" class="btn" to="/biography">
          Biography
        </Link>
        <Link id="text" class="btn" to="/contact">
          Personal Links
        </Link>
        <Link id="text" class="btn" to="/projects">
          Projects
        </Link>
      </section>
    </header>
  )
}

export default withRouter(Nav);