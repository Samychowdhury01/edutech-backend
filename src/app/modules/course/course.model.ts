import { model, Schema } from "mongoose";
import { TCourse } from "./course.interface";


// Define the Mongoose schema
const CourseSchema = new Schema<TCourse>({
  name: { type: String, required: true },
  teacherName: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
});


// Create and export the Mongoose model
export const Course = model<TCourse>("Course", CourseSchema);
