
'use strict'
import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config({ })

let connection = {}

export function connect () {
    connection = mysql.createConnection({
        host:  process.env.DB_HOSTNAME ,
        user: process.env.DB_USERNAME ,
        password: process.env.DB_PASSWORD ,
        database: process.env.DB_NAME,
    })
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to Db')
            throw err
        }
        console.log('Connection ESTABLISHED')
    })
}
export function query (query, values, resultCallback) {
    connection.query(query, values, (error, result) => {
        if (error) {
            throw error
        }
        resultCallback(result)
    })
}

export function disconnect () {
    console.log('Connection ENDED')
    connection.end()
}


export function lastId (table) {
    connect()
    query('SELECT MAX(id) AS last_id FROM ' + table, (error, result) => {
        console.log("GO")
        if (error) {
            throw error
        }
        return result[0]['last_id']
    })
}