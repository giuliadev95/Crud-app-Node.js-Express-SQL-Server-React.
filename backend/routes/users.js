import express from "express";
//import { deleteUser, getAllUsers, getUserById, insertUser, updateUser} from '../controller/users.js';
import {getAllUsers , postNew, getUserById} from "../controller/users.js";
const router = express.Router();

// GET ALL USERS AT localhost:5000/api/
router.get('/', getAllUsers);

// POST A NEW USER TO localhost:5000/api/
router.post('/', postNew);

// DELETE A USER BY ID FROM: localhost:5000/api/{id}

// GET A USER BY ID FROM: localhost:5000/api/{id}
router.get('/:id', getUserById);

export default router;