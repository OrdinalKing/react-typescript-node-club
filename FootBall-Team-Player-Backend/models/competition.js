const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompetitionSchema = new Schema(
  {
    onlineId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Competition', CompetitionSchema);
