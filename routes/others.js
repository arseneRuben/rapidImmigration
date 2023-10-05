import { insertOthers,getOthersByCustomer,  getOthers } from '../dao/sql/others.js'
import express from 'express'
const router = express.Router()
/* READ */

router.get('/customer/:id', getOthersByCustomer)

/* CREATE */
router.post('/', insertOthers)





export default router


