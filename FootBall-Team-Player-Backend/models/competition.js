const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompetitionSchema = new Schema(
  {
    onlineId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    currentSeason: {
      id: {
        type: Number,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Competition', CompetitionSchema);
