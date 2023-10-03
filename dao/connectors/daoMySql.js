
'use strict'
import mysql from 'mysql'

let connection = {}

export function connect () {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'immigration'
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