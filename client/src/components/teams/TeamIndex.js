import React from 'react'
import { Link } from 'react-router-dom'

import { getAllTeams } from '../../lib/api'

function TeamIndex() {
  const [teams, setTeams] = React.useState(null)
  
  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getAllTeams()
      try {
        setTeams(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          {teams ?
            <div className="columns is-multiline">
              {teams.map(team => {
                return (
                  <div key={team._id} className="column is-one-quarter-desktop">
                    <div className="card">
                      <Link  to={`teams/${team._id}`}>
                        <div className="card-header">
                          <div className="card-header-title">
                            <h1>{team.name}</h1>
                          </div>
                        </div>
                        <div className="card-image has-text-centered p-5">
                          <figure className="image is-128x128 is-inline-block">
                            <img src={team.badge} alt={team.name} />
                          </figure>
                        </div>
                        <div className="card-content">
                          <h1>{team.country}</h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
            :
            <h1>loading...</h1>
          }
        </div>
      </div>
    </section>
  )
}

export default TeamIndex