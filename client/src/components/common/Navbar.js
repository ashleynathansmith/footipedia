import React from 'react'

function Navbar() {
  return (
    <section className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">Home</a>
      </div>
      <div className="navbar-start">
        <a className="navbar-item" href="/teams">Teams</a>
        <a className="navbar-item" href="/teams/new">Create a team</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="/register">Register</a>
        <a className="navbar-item" href="/login">Login</a>
      </div>
    </section>
  )
}

export default Navbar