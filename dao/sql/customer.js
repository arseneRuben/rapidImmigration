import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'



//Register an user
export const createCustomer = async (req, res) => {
    try {
        connect()
        query('INSERT INTO  customers (first_name,             last_name,    email,     gender,           passport_number,           country,            phone_number,           city,          street,         address,          zip_code,               birth_date,         birth_place,         birth_country,          birth_certificate,                          passport,   profile_image,         resume,                   marital_status,                     marriage_certificate,       wes_report             ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                                           [req.body.first_name,   req.body.last_name,  req.body.email, req.body.gender,  req.body.passport_number,  req.body.country,  req.body.phone_number, req.body.city, req.body.street, req.body.address, req.body.zip_code,  req.body.birth_date, req.body.birth_place, req.body.birth_country, req.body.birth_certificate, req.body.passport,req.body.profile_image, req.body.resume,  req.body.marital_status,  req.body.marriage_certificate,   req.body.wes_report], function (err, result, fields) {
                        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                        res.end(JSON.stringify({ message: 'Customer created', success: true}, null, 4))
                    })  
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCustomers = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM customers', [], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateCustomer = async (req, res) => {
    try {
        connect()
        query('UPDATE customers SET folder_name=?, folder_path=?,  customer_id=?, consultant_id=?, current_step=?, statut=? WHERE id=?',
            [req.body.folder_name, req.body.folder_path, req.body.customer_id, req.body.consultant_id,req.body.current_step, req.body.statut, req.params.id], function () {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify({ message: 'Customer updated', success: true }, null, 4))
            })
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getCustomerById = async (req, res) => {
   try {
        connect()
        query('SELECT * FROM customers  WHERE id=?', [req.params.id], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getCustomersByConsultant = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM customers  WHERE consultant_id=?', [req.params.consultant_id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))  
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCustomersByFolder = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM customers  WHERE consultant_id=?', [req.params.consultant_id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))  
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const deleteCustomer = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM customers WHERE id=?', [req.params.id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Customer deleted', success: true }, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteCustomerByConsultant = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM customers WHERE consultant_id=$1', [req.params.consultant_id], (result) => {
            req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


