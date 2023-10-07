

import { createFolder, getFolders, updateFolder, deleteFolder, deleteFoldersByCustomer } from '../dao/sql/folders.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/', getFolders)


/* CREATE */
router.post('/', createFolder)

/* UPDATE */
router.patch('/:id', updateFolder)
/* DELETE */
router.delete('/:id', deleteFolder)
router.delete('/customer/:customerId', deleteFoldersByCustomer)



export default router
