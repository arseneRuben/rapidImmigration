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
    console.log("userRoutes")
    try {
        connect()
        query('SELECT * FROM users', [], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        connect()
        
        query('UPDATE users SET last_name=?, first_name=?, email=?, password=?, profile_image=?,   gender=? WHERE id=?',
            [req.body.last_name, req.body.first_name, req.body.email, bcrypt.hashSync(req.body.password, 10), req.body.profile_image,  req.body.gender,  req.params.id], (result) => {
                res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                res.end(JSON.stringify(result, null, 4))
                disconnect()
            })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const toggle = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM users WHERE id = ?', [req.params.id], (result) => {
            if (result.length > 0) {
                let state = result[0].enabled == 1 ? 0 : 1
            query('UPDATE users SET enabled=? WHERE id=?',
                [ state ,  req.params.id], (result) => {
                    res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
                    res.end(JSON.stringify(result, null, 4))
                    disconnect()
                })
            }  
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



export const authUserData = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM users WHERE id = ?', [req.body.userId], (user) => {
            
            if(!user) {
                return res.status(200).json({ message: 'User not found', success:false })
            } else {
                res.status(200).json({
                    success: true,
                    data: user[0],
                  });
            }
           
        })
     } catch (error) {
         res.status(500).json({ message: "Auth error", success:false, error })
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
              return res.status(HTTP_OK).send({ message: 'user not found', success: false })
            } 
            if (!bcrypt.compareSync(req.body.password, result[0].password)) { 
               return res.status(HTTP_OK).json({ message: 'Invalid email or password', success: false  })
            }

            const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                expiresIn: "1d" // expires in 24 hours
            })
            res.status(HTTP_OK).send({ auth: true, token: token, success: true, access_level:result[0].access_level, user: result[0] })            
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


