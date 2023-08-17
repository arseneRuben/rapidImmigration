import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK, USER_ACCESS_LEVEL_CLIENT } from './util.js'



//Register an user
export const createFolder = async (req, res) => {
    try {
        connect()
        query('INSERT INTO client_folders (folder_name, folder_path,  client_id, consultant_id, current_step, statut) VALUES (?, ?, ?, ?, ?, ?)',
            [req.body.folder_name, req.body.folder_path, req.body.client_id, req.body.consultant_id,req.body.current_step, req.body.statut  ], function () {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify({ message: 'Folder created', success: true }, null, 4))
            })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM users', [], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        connect()
        query('UPDATE users SET lastname=$1, firstname=$2, email=$3, password=$4, profile_image=$5, phone_number=$6, google_id=$7, access_level=$8 WHERE user_id=$9',
            [req.body.lastname, req.body.firstname, req.body.email, req.body.password, req.body.profile_image, req.body.phone_number, req.body.google_id, req.body.access_level, req.params.user_id], (result) => {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify(result, null, 4))
                disconnect()
            })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getFolderById = async (req, res) => {
   try {
        connect()
        query('SELECT * FROM client_folders  WHERE id=?', [req.params.id], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))

            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getFoldersByUser = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM client_folders  WHERE client_id=?', [req.params.client_id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))  
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFoldersByConsultant = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM client_folders  WHERE consultant_id=?', [req.params.consultant_id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))  
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM users WHERE user_id=$1', [req.params.id], (result) => {
            req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


