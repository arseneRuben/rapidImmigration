import { createUser, deleteUser, getUserById } from '../dao/sql/user.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/:id', getUserById)

/* CREATE */
router.post('/', createUser)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteUser)

export default router
