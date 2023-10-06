import { connect, query, disconnect, lastId } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'


//Register others
export const insertOthers = async (req, res) => {
    try {
        connect()
        let last_id
        query('SELECT MAX(id) AS last_id FROM customers' , (error, result) => {
            if (error) {
                throw error
            }
            last_id= result[0]['last_id']
            req.body.forEach((item) => {
                query('INSERT INTO  others (customerId,  label, value , type              ) VALUES (?, ?, ?, ?)',
                                                   [last_id, item.label, item.value, item.type  ], function (err, result, fields) {
                            })
            })

        })
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
   
}

//Get other by customerId
export const getOthersByCustomer = async (req, res) => {

    try {
        connect()
        const customerId = req.params.id
        query('SELECT * FROM others WHERE customerId =?', [customerId], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
    }
    catch (error) {
            res.status(404).json({ message: error.message })
    }
}

//Get all others
export const getOthers = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM others', (error, result) => {
            if (error) {
                throw error
            }
            res.status(HTTP_OK).json({ data: result })
        })
    }
    catch (error) {
            res.status(404).json({ message: error.message })
    }
}

//Update other
export const updateOthers = async (req, res) => {
    try {
        connect()
        const customerId = req.params.id
        req.body.forEach((item) => {
            console.log(item)
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

//Delete other by customer
export const deleteOthersByCustomer = async (req, res) => {
    try {
        connect()
        const customerId = req.params.id
        query('DELETE FROM others WHERE customerId =?', [customerId], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Others deleted', success: true }, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Delete other
export const deleteOther = async (req, res) => {
    try {
        connect()
        const otherId = req.params.id
        query('DELETE FROM others WHERE id =?', [otherId], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify({ message: 'Other deleted', success: true }, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
