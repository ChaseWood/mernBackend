const State = require('../models/state');
const { Router } = require('express');
const router = Router();

// INDEX - GET ALL STATES
router.get('/', async (req, res) => {
	res.json(await State.find({}).populate('capitol'));
});

// CREATE - CREATE NEW STATE
router.post('/', async (req, res) => {
	res.json(await State.create(req.body));
});

// UPDATE - UPDATE STATE
router.put('/:id', async (req, res) => {
	res.json(
		await State.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

// DELETE - DELETE STATE
router.delete('/:id', async (req, res) => {
	res.json(await State.findByIdAndRemove(req.params.id));
});

// EXPORT
module.exports = router;
