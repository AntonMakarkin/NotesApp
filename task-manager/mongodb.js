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

    /*db.collection('users').insertOne({
        name: 'Vika',
        age: 22
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })*/

    /*db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        }, {
            name: 'Maria',
            age: 26
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })*/

    /*db.collection('tasks').insertMany([
        {
            description: 'Go for a walk with my dog',
            completed: true
        }, {
            description: 'Go in the university to the first lesson',
            completed: true
        }, {
            description: 'Come back home',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })*/
})