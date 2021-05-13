import express from 'express'
import teams from '../controllers/teams.js'
import users from '../controllers/users.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'


const router = express.Router()

router.route('/teams')
  .get(teams.index)
  .post(secureRoute, teams.create)

router.route('/teams/:id')
  .get(teams.show)
  .put(secureRoute, teams.update)
  .delete(secureRoute, teams.delete)

router.route('/teams/:id/comments')
  .post(secureRoute, teams.commentCreate)

router.route('/teams/:id/comments/:commentId')
  .delete(secureRoute, teams.commentDelete)

router.route('/teams/:id/favourites')
  .post(secureRoute, teams.favouriteCreate)
  .delete(secureRoute, teams.favouriteDelete)

router.route('/profile')
  .get(secureRoute, users.userShow)

router.route('/register')
  .post(auth.registerUser)

router.route('/login')
  .post(auth.loginUser)

export default router