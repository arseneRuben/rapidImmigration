import { createFolder, deleteFolder, deleteFolderByClient,getFolderById, getClientFolders,getFoldersByConsultant, getFoldersByClient , updateFolder} from '../dao/sql/client_folder.js'
import express from 'express'
const router = express.Router()
/* READ */
router.get('/', getClientFolders)
router.get('/:id', getFolderById)
router.get('client/:id', getFoldersByClient)
router.get('consultant/:id', getFoldersByConsultant)

/* CREATE */
router.post('/', createFolder)

/* UPDATE */
router.put('/:id', updateFolder)

/* DELETE */
router.delete('/:id', deleteFolder)
router.delete('client/:client_id', deleteFolderByClient)


export default router
