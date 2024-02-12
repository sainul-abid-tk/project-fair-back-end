// Loads .env file contents into process.env by default
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
const pfServer=express()
require('./DB/connection')

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT=3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project fair started at port:${PORT}`);
})

pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Project Fair Server Satarted !!! Waiting For Client Request...</h1>")
})