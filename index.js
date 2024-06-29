import express from 'express'
import { PORT } from './config'

const app = express()

app.get('/',(req, res)=>{
    res.send('hello world')
})

app.listen(PORT, ()=>{
    console.log('Server running on port ${PORT}')
})