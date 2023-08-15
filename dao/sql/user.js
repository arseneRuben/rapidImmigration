import { connect, query, disconnect } from '../connectors/daoMySql.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'
import bcrypt from 'bcrypt'
export const createUser = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM users WHERE email=$1', [req.body.email], (result) => {
            if (result.length > 0) {
                res.status(404).json({ message: 'User already exists' })
            } else {
                query('INSERT INTO users (email, password,access_level) VALUES ($1, $2, $3, $4)', 
                                    [ req.body.email, bcrypt.hashSync(req.body.password, 10),req.body.access_level], function () {
                }) 
            }
            disconnect()
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
        query('SELECT * FROM users  WHERE id=$1', [req.params.user_id], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))

            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM users  WHERE ((email=$1) AND (password=$2))', [req.params.username, req.params.password], (resp) => {
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


