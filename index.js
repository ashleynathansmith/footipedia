import express from 'express'
import { port } from './config/environment.js'
import connectToDatabase from './lib/connectToDatabase.js'
import logger from './lib/logger.js'
import router from './config/router.js'
import errorHandler from './lib/errorHandler.js'

const app = express()

async function startServer() {
  try {
    await connectToDatabase()
    console.log('database has connected')

    app.use(express.json())

    app.use(logger)

    app.use('/api', router)

    app.use(errorHandler)

    app.listen(port, () => console.log(`up and running on port ${port}`))
  } catch (err) {
    console.log('error', err)
  }
}

startServer()
