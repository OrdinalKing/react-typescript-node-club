const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    countryOfBirth: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    shirtNumber: {
      type: Number,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Player', PlayerSchema);
