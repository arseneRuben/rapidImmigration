'use strict'
import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'





// ROUTES
import userRoutes from './routes/user.js'
import folderRoutes from './routes/user.js'

// dotenv config
dotenv.config()
// rest object 
const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

//middlewares
//app.use(express)
app.use(morgan('dev'))

// routes
// ROUTES

app.use('/api/users', userRoutes)
app.use('/api/folders', folderRoutes)
// Listen port  
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white)
})
