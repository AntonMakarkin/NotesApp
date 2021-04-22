import mongoose from 'mongoose'

const DBconnect = () => {
    mongoose.connect(process.env.MONGODB_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    })
}

export default DBconnect

