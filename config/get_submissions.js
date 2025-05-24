import { MongoClient } from 'mongodb';
import 'dotenv/config';


const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'eduFlexDB';


const collectionName = 'submissions';

const db = client.db(dbName);
const collection = db.collection(collectionName); 


async function getSubmissionsContent(res) {
  await client.connect();

        // Fetch all documents
        const submissions = await collection.find({}, { projection: { _id: 0, student_id: 1, course_id: 1, submission_date: 1, grade: 1 } }).toArray();

        // Calculate average grade
        const avgGrade = await collection.aggregate([
            { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
        ]).toArray();

        await client.close();

        res.json({ submissions, averageGrade: avgGrade[0]?.averageGrade || 0 });
}

const _getSubmissionsContent = getSubmissionsContent;
export { _getSubmissionsContent as getSubmissionsContent };

 