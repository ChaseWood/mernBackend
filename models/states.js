const { Schema, model } = require('mongoose');

// STATE SCHEMA
const stateSchema = new Schema(
	{
		name: String,
		img: String,
	},
	{ timestamps: true }
);

// STATE MODEL
const State = model('State', stateSchema);

// EXPORT MODEL
module.exports = State;
