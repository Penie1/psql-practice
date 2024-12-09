import pool from "./pool.js";
async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}
async function getUsernameByQuery(username) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username=$1",
    [username]
  );
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}
async function deleteUsernames() {
  await pool.query("DELETE FROM usernames");
}
const db = {
  getAllUsernames,
  insertUsername,
  getUsernameByQuery,
  deleteUsernames,
};
export default db;
