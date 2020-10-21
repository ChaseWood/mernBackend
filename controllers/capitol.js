const State = require('../models/state');
const Capitol = require('../models/capitol');
const { Router } = require('express');
const router = Router();

// CREATE A CAPITOL
router.post('/state/:stateid', async (req, res) => {
	const capitol = await Capitol.create(req.body);
	const state = await State.findById(req.params.stateid);
	capitol.state = capitol._id;
	// capitol.save();
	state.comments.push(capitol._id);
	state.save();
	res.json(capitol);
});

// INDEX - GET ALL CAPITOLS
router.get('/', async (req, res) => {
	res.json(await Capitol.find({}));
});

// CREATE - CREATE NEW CAPITOL
router.post('/', async (req, res) => {
	res.json(await Capitol.create(req.body));
});

// UPDATE - UPDATE CAPITOL
router.put('/:id', async (req, res) => {
	res.json(
		await Capitol.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

// DELETE - DELETE CAPITOL
router.delete('/:id', async (req, res) => {
	res.json(await Capitol.findByIdAndRemove(req.params.id));
});

// EXPORT
module.exports = router;
