import React from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

import { getSingleTeam } from '../../lib/api'
import { deleteTeam } from '../../lib/api'

function TeamShow() {
  const [team, setTeam] = React.useState(null)
  const { id } = useParams()
  const history = useHistory()

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getSingleTeam(id)
      try {
        setTeam(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const handleDelete = async () => {
    try {
      await deleteTeam(id)
      history.push('/teams')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        {team ?
          <div className="container is-max-widescreen">
            <div className="tile is-ancestor box">
              <div className="tile is-parent is-vertical is-3">
                <div className="tile is-child">
                  <figure className="image">
                    <img src={team.badge} alt={`${team.name} badge`} />
                  </figure>
                </div>
                <article className="tile is-child">
                  <p className="title is-4">Country: <span className="subtitle">{team.country}</span></p>
                  <p className="title is-4">Manager: <span className="subtitle">{team.manager}</span></p>
                </article>
              </div>
              <div className="tile is-parent is-vertical is-6">
                <div className="tile is-child">
                  <h1 className="title is-1 ml-5">{team.name}</h1>
                </div>
                <article className="tile is-child message is-dark">
                  <div className="message-body">
                    <p>{team.bio}</p>
                  </div>
                </article>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <p className="title">Two</p>
                  </div>

                  <div className="tile is-child">
                    <p className="title">Three</p>
                  </div>
                </div>
              </div>
              <div className="tile is-parent is-vertical is-3">

                <div className="tile is-child">
                  <article className="message">
                    <div className="message-header">
                      <p className="subtitle has-text-white">Club Legends</p>
                    </div>
                    <div className="message-body">
                      <ul>
                        {team.clubLegends.map(player => {
                          return <li className="subtitle" key={player}>{player}</li>
                        })}
                      </ul>
                    </div>
                  </article>
                </div>

                <div className="tile is-child">
                  <p className="title">Five</p>
                </div>
              </div>

              
              
                
            </div>
            <button onClick={handleDelete} className="button">Delete</button>
            <Link className="button" to={`/teams/${id}/update`}>Edit</Link>
          </div>
          : 
          <h1>...loading</h1>
        }
      </div>  
    </section>
  )
}

export default TeamShow