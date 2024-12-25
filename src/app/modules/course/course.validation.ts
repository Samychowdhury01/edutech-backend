import { z } from 'zod';

const createCourseSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    teacherName: z.string().min(1, 'Teacher name is required'),
    price: z.number().positive('Price must be a positive number'),
    category: z.string().min(1, 'Category is required'),
  }),
});

export const courseSchemas = {
  createCourseSchema
}