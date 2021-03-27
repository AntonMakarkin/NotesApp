// CRUD create read update delete

import mongodb from 'mongodb'
const { MongoClient, ObjectID } = mongodb

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useUnifiedTopology: true}, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    /*db.collection('users').findOne({ _id: new ObjectID("605dcf5c6ae5f93c580a6bdf") }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })*/

    /*db.collection('users').find({ age: 20 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 20 }).count((error, count) => {
        console.log(count)
    })*/

    db.collection('tasks').findOne({ _id: new ObjectID("605dd3b83ad4f83d64f9c645") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})