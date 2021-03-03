const db = require('../models');
const router = require('express').Router();


router.get('/api/workouts', (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

router.post('/api/workouts', ({ body }, res) => {
	db.Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});


router.put('/api/workouts/:id', (req, res) => {
	db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});


router.get('/api/workouts/range', (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

module.exports = router;