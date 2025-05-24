import { MongoClient } from 'mongodb';
import 'dotenv/config';


// MongoDB connection URI and database/collection details
const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'eduFlexDB';
const collectionName = 'course_content';


async function updateCourse(course, res) {

   const { course_id, title, lessons, resources } = course;


    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
           let str = course_id;
           let num = Number(str);

        const filter = { course_id: num }; // Find with document with course_id
        const update = {
            $set: {
                title: title,
                lessons: lessons,
                resources: resources
            }
        };

        const result = await collection.updateOne(filter, update);
        await client.close();

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course updated successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}
export default updateCourse;



