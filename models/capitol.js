const { Schema, model } = require('mongoose');

// STATE SCHEMA
const capitolSchema = new Schema(
	{
		name: String,
		population: Number,
	},
	{ timestamps: true }
);

// STATE MODEL
const Capitol = model('Capitol', capitolSchema);

// EXPORT MODEL
module.exports = Capitol;
