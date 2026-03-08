import express from "express";
import * as users from "../controller/user.controller.js";

const router = express.Router();

router.get("/", users.fetchAll);
router.post("/register", users.create);
router.post("/login", users.validateUser);
router.post("/validateToken", users.validateToken);

export default router;