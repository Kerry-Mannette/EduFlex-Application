import { MongoClient } from 'mongodb';
import 'dotenv/config';


const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'eduFlexDB';

async function getCourseContent(courseId) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('course_content');
  let str = courseId;
  let num = Number(str);
  return await collection.find({"course_id": num}).toArray();
  //  return await collection.find({}).toArray();
}

const _getCourseContent = getCourseContent;
export { _getCourseContent as getCourseContent };
