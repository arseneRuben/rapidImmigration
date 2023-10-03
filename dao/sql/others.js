import { connect, query, disconnect, lastId } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'


//Register an user
export const insertOthers = async (req, res) => {
    try {
        connect()

        query('INSERT INTO  others (customerId,  label, value , type              ) VALUES (?, ?, ?, ?)',
                                           [lastId('customers'),  req.body.label, req.body.value, req.body.type  ], function (err, result, fields) {
                        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                        res.end(JSON.stringify({ message: 'new line created', success: true }, null, 4))
                        disconnect()
                    })
      
    
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
   
}