import express from "express";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.js";


const router= express.Router();

router.get("/",getUsers);
router.post("/",createUser);
router.put("/:id",updateUser );
router.delete("/:id",deleteUser);

export default router;