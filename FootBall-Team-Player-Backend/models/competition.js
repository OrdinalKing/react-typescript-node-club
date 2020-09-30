const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompetitionSchema = new Schema(
  {
    onlineId: {
      type: Number,
      required,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Competition', CompetitionSchema);
