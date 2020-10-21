const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

// STATE SCHEMA
const stateSchema = new Schema(
	{
		name: String,
		img: String,
		capitol: [{ ref: 'Capitol', type: mongoose.Types.ObjectId }],
	},
	{ timestamps: true }
);

// STATE MODEL
const State = model('State', stateSchema);

// EXPORT MODEL
module.exports = State;
