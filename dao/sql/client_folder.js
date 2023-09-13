import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK, USER_ACCESS_LEVEL_CLIENT } from './util.js'



//Register an user
export const createFolder = async (req, res) => {
    try {
        connect()
        query('INSERT INTO  client_folders (first_name,             last_name,         gender,           passport_number,           country,            phone_number,           city,          street,         address,          zip_code,               birth_date,         birth_place,         birth_country,          birth_certificate,          passport,          resume,          other_documents,          marital_status,          spouse_name,           marriage_certificate,                                              consultant_id               ) VALUES (  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                                           [req.body.first_name,   req.body.last_name,  req.body.gender,  req.body.passport_number,  req.body.country,  req.body.phone_number, req.body.city, req.body.street, req.body.address, req.body.zip_code,  req.body.birth_date, req.body.birth_place, req.body.birth_country, req.body.birth_certificate, req.body.passport, req.body.resume, req.body.other_documents, req.body.marital_status,  req.body.spouse_name, req.body.marriage_certificate,   req.body.consultant_id ], function (err, result, fields) {
                        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                        res.end(JSON.stringify({ message: 'Folder created', success: true, res }, null, 4))
                        disconnect()
                    })
      
    
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
   
}

export const getClientFolders = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM client_folders', [], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateFolder = async (req, res) => {
    try {
        connect()
        query('UPDATE client_folders SET folder_name=?, folder_path=?,  client_id=?, consultant_id=?, current_step=?, statut=?, updated_at WHERE id=?',
            [req.body.folder_name, req.body.folder_path, req.body.client_id, req.body.consultant_id,req.body.current_step, req.body.statut, req.params.id, Date.now()], function () {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify({ message: 'Folder updated', success: true }, null, 4))
            })
        disconnect()
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
export const getFoldersByClient = async (req, res) => {
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


export const deleteFolder = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM client_folders WHERE id=$1', [req.params.client_id], (result) => {
            req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteFolderByClient = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM client_folders WHERE client_id=$1', [req.params.client_id], (result) => {
            req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


