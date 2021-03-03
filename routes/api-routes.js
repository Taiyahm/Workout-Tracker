const db = require('../models');
const router = require('express').Router();


router.get("/api/workouts", (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/api/workouts", ({ body }, res) => {
	db.Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});



router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.Workout.findOneAndUpdate( params.id , { $push: { exercises: body } })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.get("/api/workouts/range", (req, res) => {
	db.Workout.find({})
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;