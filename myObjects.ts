const User = {
    name: "vishwa",
    email: "vishwa@test.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "vishwa", isPaid: true})

function createCourse():{name: string, price: number}{
    return{name: "typescript", price: 199}
}

//Bad behaviour of objects in TS
//createUser({name: "vishwa", isPaid: true, email:"vish@test.com"})

//the same if we take all params into object and then pass it then no error
let userOne = {name: "vishwa", isPaid: true, email:"vish@test.com"};
createUser(userOne);