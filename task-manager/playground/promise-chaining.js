import DBconnect from '../src/db/mongoose.js' 
import User from '../src/models/user.js'

DBconnect()

/*User.findByIdAndUpdate('60630e665bff066154cd368d', {age: 1})
    .then((user) => {
        console.log(user)
        return User.countDocuments({ age: 1 })
    }).then((result) => {
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })
*/
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60630e665bff066154cd368d', 2).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})