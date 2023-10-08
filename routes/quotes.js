import { createQuote, getQuotes, getQuoteById, deleteQuote,updateQuote   } from '../dao/sql/quotes.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getQuotes)
router.get('/:id', getQuoteById)
/* UPDATE */
router.patch('/:id', updateQuote)

/* CREATE */
router.post('/', createQuote)
/* DELETE */
router.delete('/:id', deleteQuote)



export default router
