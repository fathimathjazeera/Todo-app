require('dotenv').config()
import express from 'express'
import cors from 'cors'


const app= express()
app.use(cors())

PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})