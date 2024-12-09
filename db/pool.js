import "dotenv/config";
import pkg from "pg";

const { Pool } = pkg;
const { HOST, USER, DATABASE, PASSWORD, DBPORT } = process.env;
export default new Pool({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
  port: DBPORT,
});

// Or
// export default new Pool({
//     connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
//   });
