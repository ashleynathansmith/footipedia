import React from 'react'
import { useParams } from 'react-router-dom'


import useForm from '../../utils/useForm'
import TeamForm from '../teams/TeamForm'
import { getSingleTeam } from '../../lib/api'

function TeamUpdate() {
  const { id } = useParams()
  const { formdata, setFormdata, handleChange } = useForm({
    name: '',
    manager: '',
    country: '',
    badge: '',
    clubLegends: '',
    yearFounded: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getSingleTeam(id)
      setFormdata(data)
    }
    getData()
  }, [id, setFormdata])

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-1">Team Update</h1>
          <div className="columns">
            <TeamForm 
              formdata={formdata}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamUpdate