const mongoose = require('mongoose');

const { Schema } = mongoose;

const TeamSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
      required: true,
    },
    tla: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    crestUrl: {
      type: String,
    },
    founded: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Team', TeamSchema);
