type UserRecord = {
    name: string;
    email: string;
    age: number
}

function getUserRecord(user: UserRecord){
    console.log("Name is "+user.name);
    console.log("Email is "+user.email);
    console.log("Age is "+user.age);
}

getUserRecord({name: "vishwa", email:"v@test.com", age: 25});