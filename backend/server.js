import express, {json} from 'express'
import dotenv from 'dotenv'
import { pool } from './db/conection.js'

dotenv.config()

const app = express()

app.use(json())

const PORT = process.env.PORT || 1234

app.get('/', async (req,res) => {
    res.status(200).json({message:"Hello"})
})

app.listen(PORT,() => {
    console.log("Server running at port: ",PORT)
})

async function pureba() {
    const [rows] =  await pool.query('SELECT * from users');
    console.log([rows])
}

pureba()