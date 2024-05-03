type Customer = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardNumber? : number
}

let newCust: Customer ={
    _id: "123",
    name: "vishwa",
    email: "v@v.com",
    isActive: true, //Please we are not passing creditCardNumber here 
    //and compiler doesnt complain because its optional (?)
}

newCust.email = "v@test.com"; //We can change value for this prop
//newCust._id = "11111"; //Compiler shows error as this prop is readOnly

// We can combine two or more types into one 
type Area = {
    area: string
}

type City = {
    city: string
}

type State = {
    state: string
}

type Address = Area & City & State