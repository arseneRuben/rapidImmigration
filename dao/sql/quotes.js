import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK, LIMIT } from './util.js'

export const createQuote = async (req, res) => {
    try {
        connect()
        query('INSERT INTO quotes (programId, full_name, email, phone_number) VALUES (?,?,?,? )', [req.body.programId, req.body.full_name,req.body.email, req.body.phone_number ], function () {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Quote sended', success: true }, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createMessage = async (req, res) => {
    try {
        connect()
        query('INSERT INTO quotes (object,full_name, email, phone_number, content) VALUES (?,?,?,? , ?)', [ req.body.object, req.body.full_name,req.body.email, req.body.phone_number, req.body.content ], function () {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Message sent', success: true }, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getQuotes = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM quotes WHERE visited=?', [0], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getMessages = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM quotes order by created_at DESC',  (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getQuoteById = async (req, res) => {
    try {
        connect()
        query('UPDATE quotes SET visited=? WHERE id=?', [1, req.params.id], (result) => {
            if (result.affectedRows == 0) {
                return res.status(404).json({
                    message: 'Quote not found'
                })
            }
            query('SELECT * FROM quotes INNER JOIN programs ON quotes.programId = programs.id WHERE quotes.id=?', [req.params.id], (resp) => {
                if (resp.length > 0) {
                    res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                    res.end(JSON.stringify(resp[0], null, 4))
                } else {
                    res.status(404).json({ message: 'Quote not found' })
                }
            })
            disconnect()
           
        })
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteQuote = async (req, res) => {
    try {
        connect()
        query('DELETE FROM quotes WHERE id=?', [req.params.id], (result) => {
            if (result.affectedRows == 0) {
                return res.status(404).json({
                    message: 'Quote not found'
                })
            }
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Quote deleted', success: true }, null, 4))
        })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// update quote
export const updateQuote = async (req, res) => {
    try {
        connect()
        query('UPDATE quotes SET visited=? WHERE id=?', [1, req.params.id], (result) => {
            if (result.affectedRows == 0) {
                return res.status(404).json({
                    message: 'Quote not found'
                })
            }
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Quote updated', success: true }, null, 4))
        })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


