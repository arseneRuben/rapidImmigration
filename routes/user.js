import { createUser, deleteUser, getUser, getUserById, getUsers, updateUser } from '../dao/sql/user.js'
import express from 'express'
const router = express.Router()
/* READ */
router.get('/', getUsers)
router.get('/:id', getUserById)

/* CREATE */
router.post('/signup', createUser)
router.post('/signin', getUser)
/* UPDATE */
router.put('/:id', updateUser)
/* DELETE */
router.delete('/:id', deleteUser)

export default router
