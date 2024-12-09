// import "dotenv/config";
// import pkg from "pg";
// const { Client } = pkg;
// const { HOST, USER, DATABASE, PASSWORD, DBPORT } = process.env;
// const SQL = `CREATE TABLE IF NOT EXISTS usernames
// ( id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// username VARCHAR(255) );

// INSERT INTO usernames(username)
// VALUES
// ('Peni'),
// ('John'),
// ('Alex');
// `;

// async function main() {
//   console.log("seeding...");

//   const client = new Client({
//     connectionString: `postgresql://${USER}:${PASSWORD}@${HOST}:${DBPORT}/${DATABASE}`,
//   });
//   await client.connect();
//   await client.query(SQL);
//   await client.end();
//   console.log("done");
// }

// main();
