import express from 'express'
import { createProgram,deleteProgram,getProgramById,getPrograms,updateProgram } from '../dao/sql/program.js'

const router = express.Router()
/* READ */
router.get('/', getPrograms)
router.get('/:id', getProgramById)
/* CREATE */
router.post('/', createProgram)
/* UPDATE */
router.patch('/:id', updateProgram)
/* DELETE */
router.delete('/:id', deleteProgram)
export default router

