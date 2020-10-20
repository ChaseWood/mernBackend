const Capitol = require('../models/capitol');
const { Router } = require('express');
const router = Router();

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
