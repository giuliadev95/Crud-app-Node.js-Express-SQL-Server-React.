import express from "express";
//import { deleteUser, getAllUsers, getUserById, insertUser, updateUser} from '../controller/users.js';
import {getAllUsers , postNew, getUserById, deleteUserById, updateContact} from "../controller/users.js";
const router = express.Router();

// GET ALL USERS AT localhost:5000/api/
router.get('/', getAllUsers);



// POST A NEW USER TO localhost:5000/api/
router.post('/', postNew);

// DELETE A USER BY ID FROM: localhost:5000/api/{id}
router.delete('/:id', deleteUserById);

// GET A USER BY ID FROM: localhost:5000/api/{id}  FOR TESTING ONLY, NOT EFFECTIVELY USED
router.get('/:id', getUserById);

// UPDATE A USER BY ID from localhost:5000/api/{id}
router.put('/:id', updateContact)

export default router; 