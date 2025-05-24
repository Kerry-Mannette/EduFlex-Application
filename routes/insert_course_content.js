import { Router } from 'express';
const router = Router();

import insertCourse from '../config/insert_course_content.js';


router.post('/add-course', async (req, res) => {
     const course = req.body;
      console.log("Course: "+course.course_id);

  try {
    await insertCourse(course, res);
    // res.json({ status: 'success', message: 'Course inserted in Mongo database' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});


export default router;









