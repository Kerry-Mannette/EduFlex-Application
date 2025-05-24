import { Router } from 'express';
const router = Router();
import { getSubmissionsContent } from '../config/get_submissions.js';


router.get('/submissions', async (req, res) => {
  try {
    await getSubmissionsContent(res);
    // console.log(content);
    // res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});


export default router;

