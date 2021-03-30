import mongoose from 'mongoose'
import validator from 'validator'

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('The password cannot contain "password"')
            }
        }
    }
})

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

const Task = mongoose.model('Task', {
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
})

