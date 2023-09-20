import { createProgram,deleteProgram,getProgramById,getPrograms } from "../dao/sql/program";
import express from 'express'
const router = express.Router()
/* READ */
router.get('/', getPrograms)
router.get('/:id', getProgramById)
/* CREATE */
router.post('/', createProgram)
/* UPDATE */
router.put('/:id', updateProgram)
/* DELETE */
router.delete('/:id', deleteProgram)
export default router

