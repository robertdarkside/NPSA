import express from "express";

import { loginDetails } from "../controllers/userController.js";
const router = express.Router();

// router.post("/register", registerUser);
router.post("/login", loginDetails);

export default router;
