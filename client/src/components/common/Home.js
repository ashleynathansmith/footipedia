import React from 'react'

import { getAllTeams } from '../../lib/api'

function Home() {
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
          <h1 className="title has-text-centered is-1">Footipedia Project</h1>
          <div className="columns is-multiline">
            {teams &&
              teams.map(team => {
                return (
                  <div key={team._id} className={`column is-1 ${team.name === 'Manchester United' ? 'is-offset-3' : ''}`}>
                    <figure>
                      <img src={team.badge} alt={team.name} />
                    </figure>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home