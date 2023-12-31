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
import customerRoutes from './routes/customer.js'
import programRoutes from './routes/program.js'
import folderRoutes from './routes/folder.js'
import othersRoutes from './routes/others.js'
import quotesRoutes from './routes/quotes.js'
import messagesRoutes from './routes/message.js'

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
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials: true,


}));
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
            let file ;
            if(req.body['full_name']!== undefined){
                console.log("req.files");
                Object.keys(req.files).forEach(function(key) {
                    file = req.files[key];
                    if(key === "profile_image"){
                        file.mv("./uploads/profiles/" + file.name);
                    }else {
                        file.mv(`./uploads/${req.body.full_name}/` + file.name);
                    }
                }); 
            } else {
               
                Object.keys(req.files).forEach(function(key) {
                                    file = req.files[key];
                                    file.mv(`./uploads/profiles/` + file.name);
                                }); 
                     } 
                  
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

app.use('/api/customers', customerRoutes)

app.use('/api/programs', programRoutes)
app.use('/api/folders', folderRoutes)
app.use('/api/others', othersRoutes)
app.use('/api/quotes', quotesRoutes)
app.use('/api/messages', messagesRoutes)


// Listen port  
const port = process.env.PORT 
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white)
})
