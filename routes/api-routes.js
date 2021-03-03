// Imports workout model
const db = require('../models');
// Imports the express router
const router = require('express').Router();

// Get request for all workouts
router.get("/api/workouts", (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

// POST workouts
router.post("/api/workouts", ({ body }, res) => {
	db.Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

//Updates workouts
router.put("/api/workouts/:id", (req, res) => {
	db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});


router.get("/api/workouts/range", (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch(({ message }) => {
			console.log(message);
		});
});

// Exports API route
module.exports = router;