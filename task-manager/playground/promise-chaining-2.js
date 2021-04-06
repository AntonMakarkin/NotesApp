import DBconnect from '../src/db/mongoose.js'
import Task from '../src/models/task.js'

DBconnect()

/*Task.findByIdAndDelete('6063178bcf5acd2e348764af').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('6063196b16126308905b78cc', false).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})