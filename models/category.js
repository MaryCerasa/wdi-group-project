
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  usersAssinged: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  groupsAssigned: { type: mongoose.Schema.ObjectId, ref: 'Group' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Category', categorySchema)
