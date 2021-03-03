// Require mongoose
const mongoose = require('mongoose');
// mongoose schema
const Schema = mongoose.Schema;

// Creates workout schema
const WorkoutSchema = new Schema({
	day: { 
		type: Date, 
		default: Date.now 
	},
	exercises: [
		{
			type: {
				type: String,
				trim: true,
			},
			name: {
				type: String,
				trim: true,
			},
			duration:{
				type: Number,
			},
			weight: {
				type: Number,
				default: 0
			},
			  reps: {
				type: Number,
				default: 0
			},
			  sets: {
				type: Number,
				default: 0
			},
			  distance: {
				type: Number,
				default: 0
			}
			
		}
	],
	totalDuration: {
		type: Number,
		default: 0,
	}
});

// Creates a mongoose workout model with the workout schema
const Workout = mongoose.model("Workout", WorkoutSchema);

// Exports the work out model
module.exports = Workout;
