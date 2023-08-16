import { createUser, deleteUser, getUserById, getUsers } from '../dao/sql/user.js'
import express from 'express'
const router = express.Router()
/* READ */
router.get('/', getUsers)
router.get('/:id', getUserById)

/* CREATE */
router.post('/signup', createUser)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteUser)

export default router
