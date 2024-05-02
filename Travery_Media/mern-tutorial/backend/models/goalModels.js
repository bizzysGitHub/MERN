const { mongoose } = require('mongoose');

const goalSchema = new mongoose.Schema(
  {
    text: String,
  },
  { timestamps: true }
);

const Goal = mongoose.model('Goal', goalSchema);


module.exports = Goal;