import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
const app: Express = express()
dotenv.config()
const PORT = process.env.PORT || 5001

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => 
{
    res.status(500).send(err.message)
})

app.listen(PORT, () => 
  {
    console.log(`Server started on port ${PORT}`)
  })