import express from "express";
//import { deleteUser, getAllUsers, getUserById, insertUser, updateUser} from '../controller/users.js';
import { getAllUsers , postNew} from "../controller/users.js";
const router = express.Router();

// GET ALL USERS AT api/
router.get('/', getAllUsers);


export default router;