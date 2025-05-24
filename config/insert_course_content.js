import { MongoClient } from 'mongodb';
import 'dotenv/config';


// MongoDB connection URI and database/collection details
const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'eduFlexDB';
const collectionName = 'course_content';

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}


async function insertCourse(course, res) {

   const {title, lessons, resources } = course;
   let str = course.course_id;
   let course_id = Number(str);

  // Parse lessons and resources as arrays
  const lessonArray = lessons.split(',').map(id => id.trim());
  const resourceArray = resources.split(',').map(resource => resource.trim());

  const courseDocument = {
    course_id,
    title,
    lessons: lessonArray,
    resources: resourceArray,
  };

  try {
    const collection = await connectToDatabase();
    const result = await collection.insertOne(courseDocument);
    // res.status(200).send(`Course added successfully with ID: ${result.insertedId}`);
    res.status(200).json({ message: "Course inserted successfully" });
  } catch (error) {
    console.error('Error inserting course:', error);
    // res.status(500).send('Failed to add course');
    res.status(500).json({ error: "Internal Server Error" });
  }
}
export default insertCourse;




