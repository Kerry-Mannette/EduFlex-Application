import { Router } from 'express';
const router = Router();
import { getSubmissionsAverageGrade } from '../config/get_submissions_average_grade.js';

// Route to calculate average grade
router.get('/average-grade', async (req, res) => {
  try {

    const content = await getSubmissionsAverageGrade();
 
    console.log("Average Grade",content)

    res.json({content});
  } catch (err) {
    res.status(500).json({ error: 'Failed to calculate average grade' });
  }
});


export default router;

