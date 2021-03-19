const greeter = (name = 'user', age = 18) => {
    console.log('Hello ' + name, 'age ' + age)
}

greeter('Anton')
greeter()