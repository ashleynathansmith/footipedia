import React from 'react'

function TeamForm({ formdata, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="column is-half">
      <div className="field">
        <label className="label">Name
          <div className="control">
            <input 
              className="input" 
              type="text" 
              placeholder="Name" 
              name="name"
              onChange={handleChange}
              value={formdata.name}
            />
            
          </div>
        </label>
        <label className="label">Year Founded
          <div className="control">
            <input 
              className="input" 
              type="text" 
              name="yearFounded"
              placeholder="Year Founded" 
              onChange={handleChange}
              value={formdata.yearFounded}
            />
          </div>
        </label>
        <label className="label">Country
          <div className="control">
            <input 
              className="input" 
              type="text" 
              name="country"
              placeholder="Country" 
              onChange={handleChange}
              value={formdata.country}
            />
          </div>
        </label>
        <label className="label">Manager
          <div className="control">
            <input 
              className="input" 
              type="text" 
              name="manager"
              placeholder="Manager" 
              onChange={handleChange}
              value={formdata.manager}
            />
            
          </div>
        </label>
        <label className="label">Badge
          <div className="control">
            <input 
              className="input" 
              type="text"
              name="badge"
              placeholder="Badge URL" 
              onChange={handleChange}
              value={formdata.badge}
            />
          </div>
        </label>
        <label className="label">Club Legends
          <div className="control">
            <input 
              className="input" 
              type="text" 
              name="clubLegends"
              placeholder="Club Legends" 
              onChange={handleChange}
              value={formdata.clubLegends}
            />
          </div>
        </label>
      </div>
      <div className="field">
        <button className="button is-fullwidth" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default TeamForm