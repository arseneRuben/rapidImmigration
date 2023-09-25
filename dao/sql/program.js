import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'



//Register an user
export const createProgram = async (req, res) => {
    try {
        connect()
        query('INSERT INTO  programs (name,  description , type              ) VALUES ( ?, ?, ?)',
                                           [req.body.name,  req.body.description, req.body.type  ], function (err, result, fields) {
                        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                        res.end(JSON.stringify({ message: 'program created', success: true }, null, 4))
                        disconnect()
                    })
      
    
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
   
}



export const updateProgram = async (req, res) => {
    try {
        connect()
        query('UPDATE programs SET name=?, description=?,  type=? WHERE id=?',
            [req.body.name, req.body.description, req.body.type, req.params.id], function () {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify({ message: 'Program updated', success: true }, null, 4))
                disconnect()
            })
      
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
   
}







export const deleteProgram = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM programs WHERE id=?', [req.params.id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Program deleted', success: true }, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getPrograms = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM programs', [], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getProgramById = async (req, res) => {
   try {
        connect()
        query('SELECT * FROM programs  WHERE id=?', [req.params.id], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))

            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}   


