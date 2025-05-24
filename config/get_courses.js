import pkg from 'oracledb';
const { initOracleClient, getConnection } = pkg;
// import { initOracleClient, getConnection } from 'oracledb';
import 'dotenv/config';


initOracleClient({ libDir: process.env.ORACLE_CLIENT_PATH });

async function getCourses() {
  const connection = await getConnection({
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECT_STRING
  });

    if(connection){
    console.log("Connected")
const courses = await connection.execute('SELECT * FROM courses');
res.json(courses);
console.log(courses.course_id);

  }
    
  await connection.close();
}

export default getCourses;



