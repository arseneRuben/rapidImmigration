import { createMessage, getMessages  } from '../dao/sql/quotes.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getMessages)
/* UPDATE */

/* CREATE */
router.post('/', createMessage)




export default router
