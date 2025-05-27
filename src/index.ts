import express from 'express'
import dotenv from 'dotenv'
import { AppDataSource } from './database/data-source'
import { Router } from 'express'
import uploadRoutes from './pokemon/routes/upload.routes'

dotenv.config()
const app = express()
const port = 3000
app.use(uploadRoutes)

app.get('/', (req, res) => {
    res.send('ooi')
})


app.listen(port, async() => {
    await AppDataSource.initialize()
    console.log('rodando')
})