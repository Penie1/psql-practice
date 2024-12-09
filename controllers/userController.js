import { __dirname } from "../server.js";
import db from "../db/queries.js";

export const getUsernames = async (req, res) => {
  const { search } = req.query;
  const usernames = search
    ? await db.getUsernameByQuery(search)
    : await db.getAllUsernames();

  if (usernames.length === 0) res.send("No users found.");

  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};
export const getUsernameForm = async (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
};
export const createUsername = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

export const deleteUsernames = async (req, res) => {
  await db.deleteUsernames();
  res.redirect("/");
};
