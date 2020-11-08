import express from 'express';


import { getUsers, createUser , findUser, deleteUser , updateUser } from '../controllers/users.js';
 
const router = express.Router(); // Initiliaze our router


// all routes are here are start with /users

router.get('/', getUsers);

router.post('/' , createUser);

router.get('/:id', findUser);

router.delete('/:id' , deleteUser);

router.patch('/:id',updateUser);

export default router;