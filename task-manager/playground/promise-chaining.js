import DBconnect from '../src/db/mongoose.js' 
import User from '../src/models/user.js'

DBconnect()

User.findByIdAndUpdate('60630e665bff066154cd368d', {age: 1})
    .then((user) => {
        console.log(user)
        return User.countDocuments({ age: 1 })
    }).then((result) => {
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })