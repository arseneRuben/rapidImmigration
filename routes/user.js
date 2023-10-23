import { createUser, deleteUser, getUser, getUsers, updateUser,authUserData, toggle } from '../dao/sql/user.js'
import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
const router = express.Router()
/* READ */
router.get('/', getUsers)
//router.get('/:id', getUserById)

/* CREATE */
router.post('/signup', createUser)
router.post('/signin', getUser)
router.post('/userdata',authMiddleware, authUserData)
/* UPDATE */
router.put('/:id', updateUser)
router.patch('/:id', toggle)

/* DELETE */
router.delete('/:id', deleteUser)

export default router
