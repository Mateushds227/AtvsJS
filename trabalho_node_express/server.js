import express from 'express'
import fs, { existsSync } from "fs"
import { router as jogos } from './ROUTES/jogos_routes.js';

const app = express()
const port = 3000;

app.set('view engine')

app.use(express.json())  

app.use("/" , jogos)

app.listen(port, () => {
    console.log(`Servidor iniciado na url http://localhost:${port}`)
})
