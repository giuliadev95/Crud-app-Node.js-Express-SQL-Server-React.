import express from "express";
//import { deleteUser, getAllUsers, getUserById, insertUser, updateUser} from '../controller/users.js';
import { getAllUsers } from "../controller/users.js";
const router = express.Router();

// GET ALL USERS
router.get('/', getAllUsers);
export default router;



// ----- Outdated code: -----
// POST NEW USER
//router.post('/', insertUser);

// GET USER BY ID
//router.get('/:id', getUserById);

// DELETE USER BY ID
//router.delete('/:id', deleteUser );

// UPDATE USER BY ID
//router.patch('/:id', updateUser)
