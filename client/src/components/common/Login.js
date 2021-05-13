import React from 'react'
import { useHistory } from 'react-router-dom'

import useForm from '../../utils/useForm'
import { loginUser } from '../../lib/api'

function Login() {
  const { formdata, handleChange } = useForm({
    email: '',
    password: '',
  })

  const history = useHistory()

  const handleLogin = async e => {
    e.preventDefault()
    try {
      await loginUser(formdata)
      history.push('/teams')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns"></div>
          <form onSubmit={handleLogin} className="column is-one-quarter is-offset-one-quarter">
            <h1 className="title is-1 has-text-centered">Login</h1>
            <div className="field">
              <label className="label">Email
                <div className="control">
                  <input 
                    className="input"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formdata.email}
                    name="email"
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label">Password
                <div className="control">
                  <input 
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formdata.password}
                    name="password"
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <button className="button is-fullwidth" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login