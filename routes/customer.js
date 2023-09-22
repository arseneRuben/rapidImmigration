import { createCustomer, deleteCustomer,getCustomerById , getCustomers, getCustomersByFolder, updateCustomer} from '../dao/sql/customer.js'
import express from 'express'
const router = express.Router()
/* READ */
router.get('/', getCustomers)
router.get('/:id', getCustomerById)
router.get('/folders/:id', getCustomersByFolder)


/* CREATE */
router.post('/', createCustomer)

/* UPDATE */
router.put('/:id', updateCustomer)

/* DELETE */
router.delete('/:id', deleteCustomer)


export default router
