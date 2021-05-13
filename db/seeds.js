import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDatabase.js'
import Team from '../models/team.js'
import User from '../models/user.js'
import teamData from './data/teams.js'
import userData from './data/users.js'

async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('database dropped')

    const users = await User.create(userData)

    const teamDataWithOwnerAndFavourites = teamData.map(team => {
      team.owner = users[0]._id
      team.favouritedBy = users[0]._id
      return team
    })

    const teams = await Team.create(teamDataWithOwnerAndFavourites)

    console.log(`${teams.length} teams created`)
    console.log(`${users.length} users created`)

  } catch (err) {
    console.log('something went wrong', err)
  }
  await mongoose.connection.close()
}

seedDatabase()