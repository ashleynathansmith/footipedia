import React from 'react'
import { useHistory } from 'react-router-dom'

import { createTeam } from '../../lib/api'
import TeamForm from '../teams/TeamForm'
import useForm from '../../utils/useForm'

function TeamNew() {

  const history = useHistory()

  const { formdata, handleChange } = useForm({
    name: '',
    yearFounded: '',
    manager: '',
    badge: '',
    clubLegends: '',
    country: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await createTeam(formdata)
      history.push(`/teams/${data._id}`)
    } catch (err) {
      console.log(err.response.data.errors)
    }
  }
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-1">Team New</h1>
          <div className="columns">
            <TeamForm 
              formdata={formdata}
              handleSubmit={handleSubmit} 
              handleChange={handleChange}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamNew