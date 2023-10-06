import { insertOthers,getOthersByCustomer,  getOthers, updateOthers, deleteOther,deleteOthersByCustomer } from '../dao/sql/others.js'
import express from 'express'
const router = express.Router()
/* READ */

router.get('/customer/:id', getOthersByCustomer)

/* CREATE */
router.post('/', insertOthers)
/* UPDATE */
router.patch('/:id', updateOthers)

/* DELETE */
router.delete('/:id', deleteOther)
router.delete('/customer/:id',deleteOthersByCustomer)







export default router


