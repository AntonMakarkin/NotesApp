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

    /*db.collection('users').deleteMany({
        age: 21
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    db.collection('tasks').deleteOne({
        description: "Go in the university to the first lesson"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})