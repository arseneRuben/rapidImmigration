'use strict'
import express from 'express'
import fileupload from "express-fileupload";
import cors from "cors";
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'





// ROUTES
import userRoutes from './routes/user.js'
import folderRoutes from './routes/user.js'

// dotenv config
dotenv.config()
// rest object 
const app = express()
app.use(
    fileupload({
        createParentPath: true,
    }),
);
app.use(bodyParser.json());
app.use(express.static('uploads'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

//middlewares
//app.use(express)
app.use(morgan('dev'))

// routes
// ROUTES
app.post("/upload-file", async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: "failed",
                message: "No file uploaded",
            });
        } else {
            let file = req.files.file;


            file.mv("./uploads/profiles/" + file.name);

            res.send({
                status: "success",
                message: "File is uploaded",
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size,
                },
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.use('/api/users', userRoutes)
app.use('/api/folders', folderRoutes)
// Listen port  
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white)
})
