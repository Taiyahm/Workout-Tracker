const db = require('../models');
const router = require('express').Router();

// get workouts
router.get('/api/workouts', (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/api/workouts', function({ body }, res) {
	db.Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

// update workout
router.put('/api/workouts/:id', ({ body, params},res) => {
	db.Workout.findOneAndUpdate( params.id, {$push: { exercises: req.body } })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {res.json(err);
			res.json(err);
		});
});



//get cumulated workouts
router.get('/api/workouts/range', function(req, res) {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({err}) => {
			res.json(err);
		});
});

module.exports = router;
