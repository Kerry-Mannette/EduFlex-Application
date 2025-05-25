// import pkg from 'oracledb';
// const { initOracleClient, getConnection } = pkg;
// // import { initOracleClient, getConnection } from 'oracledb';
// import 'dotenv/config';


// initOracleClient({ libDir: process.env.ORACLE_CLIENT_PATH });


//   const connection = await getConnection({
//     user: process.env.ORACLE_USER,
//     password: process.env.ORACLE_PASSWORD,
//     connectString: process.env.ORACLE_CONNECT_STRING
//   });

// async function getCourses() {
//     try {

//         const result = await connection.execute(`SELECT course_id, cost, user_id, submission_date, grade FROM courses`);
//         return result.rows;
//     } catch (error) {
//         console.error(error);
//     } finally {
//         if (connection) {
//             await connection.close();
//         }
//     }
// }

// export default getCourses;



