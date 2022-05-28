const mongoose = require('mongoose');
const UserPSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  remarques: { type: String, required: true },
  cin: { type: String, required: true },
  adress: { type: String, required: true },
  contact:{ type: String, required: true },
  owner:{ type: String, required: true },
});
const Task = mongoose.model('Task', UserPSchema);
module.exports = Task;
