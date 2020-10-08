import express, { Application, Request, Response } from 'express'
import {
  writeFile,
  writeFileSync,
  readdirSync,
  readFileSync,
  mkdirSync
} from 'fs'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import GenTest from './middleware/GenTest'
import { exec } from 'child_process'
import path from 'path'
dotenv.config()
const app: Application = express()

const port: string = process.env.PORT || '3001'

app.use(cors())

app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '../client/build')))
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})
app.post(
  '/upload',
  multer({ storage: multer.memoryStorage() }).single('file'),
  (req: Request, res: Response) => {
    let dName = req.body.name.replace(' ', '-').toLowerCase()
    try {
      mkdirSync(`${process.cwd()}/assessments/${dName}`)
    } catch (error) {
      return res.send({ message: 'Already Submitted' })
    }
    let fName = `${req.file.originalname.split('.')[0]}-${dName}.js`
    writeFile(
      `${process.cwd()}/assessments/${dName}/${fName}`,
      req.file.buffer,
      (err) => {
        if (err) return res.send({ message: 'Already Submitted' })
        if (readFileSync(`${process.cwd()}/assessments/${dName}/${fName}`)) {
          let test = GenTest(
            {
              fileName: fName,
              folder: dName
            },
            req.body.email
          )
          writeFileSync(
            `${process.cwd()}/tests/${fName.split('.')[0]}.test.js`,
            test
          )
          res.end(JSON.stringify({ msg: ' File Uploaded' }), async () => {
            exec('yarn test', (err, stdout) => {
              console.log(err, stdout)
            })
          })
        }
      }
    )
  }
)

app.listen(parseInt(port), () => {
  console.log(`App listening on port: ${port}`)
  if (!readdirSync(process.cwd()).includes('assessments')) {
    mkdirSync(process.cwd() + '/assessments')
  }
})
