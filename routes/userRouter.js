import { Router } from "express";
import {
  getUsernameForm,
  createUsername,
  getUsernames,
  deleteUsernames,
} from "../controllers/userController.js";

const router = Router();
router.get("/", getUsernames);
router.get("/delete", deleteUsernames);
router.get("/new", getUsernameForm);
router.post("/new", createUsername);

export default router;
