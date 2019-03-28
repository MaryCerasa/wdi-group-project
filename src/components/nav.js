import React from 'react'
import 'bulma'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/auth'


class Nav extends React.Component {
  constructor() {
    super()

    this.state = { navbarOpen: false }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img className="logo" src="../assets/36x36.png" />
              <p className="is-size-4"><strong>Organise</strong></p>
            </Link>
            <a role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
              aria-label="menu" aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link to="/about" className="navbar-item">About</Link>}
              {!Auth.isAuthenticated() && <Link to="/pricing" className="navbar-item">Pricing</Link>}
              {!Auth.isAuthenticated() && <Link to="/features" className="navbar-item">Features</Link>}
              <div className="navbar-item has-dropdown is-hoverable">
                {Auth.isAuthenticated() && <Link to="#" className="navbar-link">New</Link>}
                <div className="navbar-dropdown">
                  <Link to="/tasks" className="navbar-item">Task</Link>
                  <Link to="/categories " className="navbar-item">Category</Link>
                  <Link to="/groups" className="navbar-item">Group</Link>
                </div>
              </div>
              <div className="navbar-end">
                {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login/Register</Link>}
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                {Auth.isAuthenticated() && <Link to="/account" className="navbar-link">Account</Link>}
                <div className="navbar-dropdown">
                  <a href="/myProfile" className="navbar-item">My Profile</a>
                  <a href="/users" className="navbar-item">Find friends</a>
                  <a href="/invitefriends" className="navbar-item">Invite a friend</a>
                  <a href="/help" className="navbar-item">Help</a>
                  <hr className="navbar-divider" />
                  <Link to="/" className="navbar-item" onClick={Auth.logout}>Logout</Link>
                </div>
              </div>
              <div className="navbar-end">
                {Auth.isAuthenticated() && <Link to="/groups/:groupId/tasks" className="navbar-item is-primary "><strong>New Task</strong></Link>}
              </div>
              <div className="navbar-end">
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
