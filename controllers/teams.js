import Team from '../models/team.js'
import { notFound, forbidden } from '../lib/errorHandler.js'

async function teamIndex(_req, res, next) { 
  try {
    const teams = await Team.find()
    return res.status(200).json(teams)
  } catch (err) {
    next(err)
  }
}

async function teamShow(req, res, next) {
  const { id } = req.params
  try {
    const team = await Team.findById(id).populate('owner').populate('favouritedBy').populate('comments.owner')
    if (!team) throw new Error()
    return res.status(200).json(team)
  } catch (err) {
    next(err)
  }
}

async function teamCreate(req, res, next) {
  try {
    const newTeamData = { ...req.body, owner: req.currentUser._id }
    const createdTeam = await Team.create(newTeamData)
    return res.status(201).json(createdTeam)
  } catch (err) {
    next(err)
  }
}

async function teamDelete(req, res, next) {
  const { id } = req.params
  try {
    const teamToDelete = await Team.findById(id)
    if (!teamToDelete) throw new Error()
    if (!teamToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    await teamToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

async function teamUpdate(req, res, next) {
  const { id } = req.params
  try {
    const teamToUpdate = await Team.findById(id)
    if (!teamToUpdate) throw new Error(notFound)
    if (!teamToUpdate.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    Object.assign(teamToUpdate, req.body)
    await teamToUpdate.save()
    return res.status(202).json(teamToUpdate)
  } catch (err) {
    next(err)
  }
}

async function teamCommentCreate(req, res, next) {
  const { id } = req.params
  try {
    const team = await Team.findById(id)
    if (!team) throw new Error(notFound)
    const newComment = { ...req.body, owner: req.currentUser._id }
    team.comments.push(newComment)
    await team.save()
    res.status(201).json(team)
  } catch (err) {
    next(err)
  }
}

async function teamCommentDelete(req, res, next) {
  const { id, commentId } = req.params
  try {
    const team = await Team.findById(id)
    if (!team) throw new Error(notFound)
    const commentToDelete = team.comments.id(commentId)
    if (!commentToDelete) throw new Error(notFound)
    if (!commentToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    await commentToDelete.remove()
    await team.save()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

async function teamFavouriteCreate(req, res, next) {
  const { id } = req.params
  try {
    const team = await Team.findById(id)
    if (!team) throw new Error(notFound)
    const newFavourite = req.currentUser._id
    if (team.favouritedBy.includes(newFavourite)) throw new Error(forbidden)
    team.favouritedBy.push(newFavourite)
    await team.save()
    res.status(201).json(team)
  } catch (err) {
    next(err)
  }
}
async function teamFavouriteDelete(req, res, next) {
  const { id } = req.params
  try {
    const team = await Team.findById(id)
    if (!team) throw new Error(notFound)
    const favouriteToDelete = req.currentUser._id
    await team.favouritedBy.pull(favouriteToDelete)
    await team.save()
    return res.status(202).json(team)
  } catch (err) {
    next(err)
  }
}

export default {
  index: teamIndex,
  show: teamShow,
  create: teamCreate,
  update: teamUpdate,
  delete: teamDelete,
  commentCreate: teamCommentCreate,
  commentDelete: teamCommentDelete,
  favouriteCreate: teamFavouriteCreate,
  favouriteDelete: teamFavouriteDelete,
}

