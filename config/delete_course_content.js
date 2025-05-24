import { MongoClient } from 'mongodb';
import 'dotenv/config';


// MongoDB connection URI and database/collection details
const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'eduFlexDB';
const collectionName = 'course_content';


async function deleteCourse(course, res) {

   const { course_id } = course;


       let str = course_id;
       let num = Number(str);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const result = await collection.deleteOne({ course_id: num});

        if (result.deletedCount === 1) {
            // res.send('Course deleted successfully.');
             res.status(200).json({ message: "Course deleted successfully." });
        } else {
            // res.send('Course not found.');
             return res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting course.');
    } finally {
        await client.close();
    }

}
export default deleteCourse;


