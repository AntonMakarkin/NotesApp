import mongoose from 'mongoose'

const DBconnect = () => {
    const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

    mongoose.connect(connectionURL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
}


/*const me = new User({
    name: '   Elena  ',
    email: 'elenam1971@yandex.com   ',
    password: 'phone098!'

})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})*/

/*const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Finish the 10 tasks     ',
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})*/

export default DBconnect

