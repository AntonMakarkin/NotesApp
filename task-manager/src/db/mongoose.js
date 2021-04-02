import mongoose from 'mongoose'

const DBconnect = () => {
    const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

    mongoose.connect(connectionURL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
}

export default DBconnect

