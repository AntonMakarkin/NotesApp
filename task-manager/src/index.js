import express from 'express'
import DBconnect from './db/mongoose.js'
import userRouter from './routers/users.js'
import taskRouter from './routers/tasks.js'
import multer from 'multer'

DBconnect()

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true) //to accept the file
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

