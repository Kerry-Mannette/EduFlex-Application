import { Router } from 'express';
const router = Router();
import { getCourseContent } from '../config/get_course_content.js';


router.get('/course_content/:course_id', async (req, res) => {
  const { course_id } = req.params;
  try {
    const content = await getCourseContent(course_id);
    // console.log(content);
    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});


export default router;

