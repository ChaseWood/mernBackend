const { Schema, model } = require('mongoose');

// STATE SCHEMA
const stateSchema = new Schema(
	{
		name: String,
		img: String,
		capitol: [{ ref: 'Capitol', type: Schema.Types.ObjectId }],
	},
	{ timestamps: true }
);

// STATE MODEL
const State = model('State', stateSchema);

// EXPORT MODEL
module.exports = State;
