const mongoose = require('mongoose')

const DBconnect = () => {
    mongoose.connect(process.env.MONGODB_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    })
}

module.exports = DBconnect

