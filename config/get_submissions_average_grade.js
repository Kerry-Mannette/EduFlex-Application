import { MongoClient } from 'mongodb';
import 'dotenv/config';


const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'eduFlexDB';

async function getSubmissionsAverageGrade() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('submissions');
  
// Calculate average grade
        const avgGrade = await collection.aggregate([
            { $group: { _id: null, averageGrade: { $avg: "$grade" } } }
        ]).toArray();

      
       return res.json({ averageGrade: avgGrade[0]?.averageGrade || 0 });
  //  return await collection.find({}).toArray();
}

const _getSubmissionsAverageGrade = getSubmissionsAverageGrade;
export { _getSubmissionsAverageGrade as getSubmissionsAverageGrade };
