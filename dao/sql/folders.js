import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'

export const createFolder = async (req, res) => {
    try {
        connect()
        query('INSERT INTO folders (programId, customerId,consultantId, folderNumber, lastVisit, comments) VALUES (?,?,?,?, ?,? )', [req.body.programId, req.body.customerId,req.body.consultantId,req.body.folderNumber, Date.now(), req.body.comments ], function(err, result) {
            if(err) {
                res.status(400).json({ message: err.message })
            } else {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify({ message: 'Folder created', success: true }, null, 4))
            }
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getFolders = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM folders INNER JOIN programs ON folders.programId = programs.id INNER JOIN customers ON folders.customerId = customers.id', [], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateFolder = async (req, res) => {
    try {
        connect()
        query('UPDATE folders SET programId=?, customerId=?, consultantId=?,folderNumber=?, lastVisit=?, comments=?, updatedAt=?, lastVisit=?  WHERE id=?',
        [req.body.programId, req.body.customerId, req.body.consultantId,  req.body.folderNumber,  req.body.comments, Date.now(),Date.now(),req.params.id],
        function(err, result) {
            if(err) {
                res.status(400).json({ message: err.message })
            } else {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify({ message: 'Folder updated', success: true }, null, 4))
            }
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteFolder = async (req, res) => {
    try {
        connect()
        query('DELETE FROM folders WHERE id=?', [req.params.id], (result) => {
            if(result.affectedRows == 0) {
                return res.status(404).json({
                    message: 'Folder not found'
                })
            }
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Folder deleted', success: true }, null, 4))
        })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFolderById = async (req, res) => {
    try {
            connect()
                query('SELECT * FROM folders WHERE id=?', [req.params.id], (resp) => {
                    if(resp.length > 0) {
                    res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                    res.end(JSON.stringify(resp[0], null, 4))
                } else {
                    res.status(404).json({message: 'Folder not found'})
                }
            disconnect()                            
            } 
        )
    }catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFolderByProgramId = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM folders WHERE programId=?', [req.params.programId], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFolderByCustomerId = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM folders WHERE customerId=?', [req.params.customerId], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })
       
        } catch (error) {
            res.status(404).json({ message: error.message })
    }
}

export const getFolderByConsultantId = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM folders WHERE consultantId=?', [req.params.consultantId], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })

    } catch (error) {
    res.status(404).json({ message: error.message })
    }
}
export const getFolderByFolderNumber = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM folders WHERE folderNumber=?', [req.params.folderNumber], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
