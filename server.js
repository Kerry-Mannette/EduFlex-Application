// 1. Install dependencies: npm install express dotenv cors
import express, { json }  from 'express';
import 'dotenv/config';
// import insert_user from './routes/insert_user.js';
import get_courses from './routes/get_courses.js';
import get_course_content from './routes/get_course_content.js';
import get_submissions from './routes/get_submissions.js';
import get_submissions_average_grade from './routes/get_submissions_average_grade.js';
import insert_course_content from './routes/insert_course_content.js';
import update_course_content from './routes/update_course_content.js';
import delete_course_content from './routes/delete_course_content.js';
import bodyParser from 'body-parser';

const app = express();

// middleware
app.use(json());
app.use(express.static('public'));
// app.use('/api', insert_user);
app.use('/api', get_courses);
app.use('/api', get_course_content);
app.use('/api', get_submissions);
app.use('/api', get_submissions_average_grade);
app.use('/api', insert_course_content);
app.use('/api', update_course_content);
app.use('/api', delete_course_content);


app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || "https://eduflex-application.onrender.com";
app.listen(PORT, () => {
  console.log(`EduFlex Node server running on port http://localhost:${PORT}`);
});
