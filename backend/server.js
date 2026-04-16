import express from 'express'

const app = express()

app.use(json())

const PORT = process.env.PORT || 1234

app.get('/', async (req,res) => {
    res.status(200).json({message:"Hello"})
})

app.listen(PORT,() => {
    console.log("Server running at port: ",PORT)
})