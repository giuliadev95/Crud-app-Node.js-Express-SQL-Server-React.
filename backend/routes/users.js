import express from "express";
import { deleteUser, getAllUsers, getUserById, insertUser, updateUser} from '../controller/users.js';

const router = express.Router();

// POST NEW USER
router.post('/', insertUser)

// GET ALL USERS
router.get('/', getAllUsers);

// GET USER BY ID
router.get('/:id', getUserById);

// DELETE USER BY ID
router.delete('/:id', deleteUser );

// UPDATE USER BY ID
router.patch('/:id', updateUser)
   
export default router;