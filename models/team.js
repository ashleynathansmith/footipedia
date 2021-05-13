import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const footballTeamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  yearFounded: { type: Number, required: true },
  bio: { type: String, required: true },
  history: { type: String, required: true },
  manager: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  badge: { type: String, required: true },
  clubLegends: [{ type: String }],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  favouritedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  comments: [commentSchema],
})

footballTeamSchema.plugin(uniqueValidator)

export default mongoose.model('Team', footballTeamSchema)