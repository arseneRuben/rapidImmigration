import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK, USER_ACCESS_LEVEL_CLIENT } from './util.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//Register an user
export const createUser = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM users WHERE email = ?', [req.body.email], (result) => {
            if (result.length > 0) {
                res.status(404).json({ message: 'User already exists', success: false  })
            } else {
                query('INSERT INTO users (email, password,access_level) VALUES (?, ?, ?)', 
                                    [ req.body.email, bcrypt.hashSync(req.body.password, 10), USER_ACCESS_LEVEL_CLIENT], function () {
                    res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                    res.end(JSON.stringify({ message: 'User created', success: true  }, null, 4))
                }) 
                disconnect()
            }
        })
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


export const getUserById = async (req, res) => {
   
   try {
        connect()
        
        query('SELECT * FROM users  WHERE id=?', [req.params.id], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))

            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// Authenticate an user
export const getUser = async (req, res) => {
    try {
       
        connect()

        query('SELECT * FROM users  WHERE email=?', [req.body.email], (result) => {
             
            if (result.length <= 0) {
              return res.status(200).json({ message: 'user not found', success: false })
            } else {
                if (bcrypt.compareSync(req.body.password, result[0].password)) {
                    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                        expiresIn: 86400 // expires in 24 hours
                    })
                    res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                    //res.status(HTTP_OK).json({ auth: true, token: token, success: true })
                    res.end(JSON.stringify({ auth: true, token: token, success: true }, null, 4))
                } else { 
                    res.status(404).json({ message: 'Invalid email or password', success: false  })
                }
            }
            
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


