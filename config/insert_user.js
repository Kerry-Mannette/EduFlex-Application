// import pkg from 'oracledb';
// const { initOracleClient, getConnection } = pkg;
// // import { initOracleClient, getConnection } from 'oracledb';
// import 'dotenv/config';


// initOracleClient({ libDir: process.env.ORACLE_CLIENT_PATH });

// async function insertUser(user) {
//   const connection = await getConnection({
//     user: process.env.ORACLE_USER,
//     password: process.env.ORACLE_PASSWORD,
//     connectString: process.env.ORACLE_CONNECT_STRING
//   });

//     if(connection){
//     console.log("Connected")
// const result = await connection.execute('SELECT * FROM users');
// console.log(result.rows);
//   }
//     let str = user.user_id;
//     let num = Number(str);

//   // // user.user_id = Number(user.user_id);

//   // console.log(user.user_id);

//   //   const numericUserId = parseInt(user.user_id, 10);

//   // if (isNaN(numericUserId)) {
//   //   console.error('Error: User ID must be a numeric value.');
//   //   return;
//   // }
//   // console.log(numericUserId)

//   await connection.execute(
//     `INSERT INTO users (user_id, first_name, last_name, email, role)
//      VALUES (:id, :fname, :lname, :email, :role)`,
//     {
//       id: user.user_id,
//       fname: user.first_name,
//       lname: user.last_name,
//       email: user.email,
//       role: user.role
//     },
//     { autoCommit: true }
//   );

//   await connection.close();
// }

// export default insertUser;



