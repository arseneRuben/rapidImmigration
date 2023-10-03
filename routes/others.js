import express from 'express'
import { insertOthers  } from '../dao/sql/others.js'
const router = express.Router()
/* READ */
//router.get('/', getOthers)
/* CREATE */
router.post('/', insertOthers)





export default router


