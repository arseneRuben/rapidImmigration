

import { createFolder, getFolders, updateFolder, deleteFolder } from '../dao/sql/folders.js'
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

export default router
