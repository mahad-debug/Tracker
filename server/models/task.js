//import { time } from "console";
import { Schema, model } from "mongoose";
const userExerciseDataSchema = new  Schema({
  name: {
    type: "string",
    required: "true",
    trim: "true",
  },
  description: {
    type: "string",
    required: "true",
  },
  activityType: {
    type: "string",
    required: "true",
  },
  duration: {
    type: "string",
    required: "true",
  },
  date: {
     type: "string",
     required:"true"
     },
});

export const User = model('Exercise', userExerciseDataSchema);