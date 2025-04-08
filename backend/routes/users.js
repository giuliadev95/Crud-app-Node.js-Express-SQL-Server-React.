import express from "express";
//import { deleteUser, getAllUsers, getUserById, insertUser, updateUser} from '../controller/users.js';
import { getAllUsers , postNew} from "../controller/users.js";
const router = express.Router();

// GET ALL USERS AT localhost:5000/api/
router.get('/', getAllUsers);

// POST A NEW USER TO localhost:5000/api/new
router.post('/new', postNew);
export default router;