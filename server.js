'use strict'
import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'





// ROUTES
import userRoutes from './routes/user.js'
// dotenv config
dotenv.config()
// rest object 
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
// ROUTES
app.use('api/users/signup', userRoutes)


// Listen port 
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white)
})
