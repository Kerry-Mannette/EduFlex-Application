import { Router } from 'express';
const router = Router();

import deleteCourse from '../config/delete_course_content.js';


import bodyParser from 'body-parser';


router.use(bodyParser.urlencoded({ extended: true }));


router.post('/delete-course', async (req, res) => {
     const course = req.body;
      console.log("Course: "+course.course_id);

  try {
    await deleteCourse(course, res);
    // res.json({ status: 'success', message: 'Course update in Mongo database' });
  } catch (err) {
    console.error(err);
    // res.status(500).json({ status: 'error', message: err.message });

    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;

