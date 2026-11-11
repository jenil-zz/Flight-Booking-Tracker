

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    flightNumber: { type: String, required: true },
    to: { type: String },
    from: { type: String},
    date: { type: Date },
    terminal: { type: String},
});

module.exports = mongoose.model('Flight', flightSchema);
