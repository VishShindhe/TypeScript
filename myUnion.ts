let score: number | string = 55
score = "99"


type Empl = {
    userName: string;
    pwd: string;
}

type Admin = {
    userName: string;
    adminPwd: string;
}

let newEmpl: Empl | Admin = {
    userName: "vishwa",
    pwd:"password"
}

newEmpl = {
    userName: "vishwa",
    adminPwd: "password@123"
}

getID(45)
getID("77")

function getID(id: number | string) {
    if(typeof id === "string"){  //we cannot directly do uppercase as id may also be number also
        id.toUpperCase()
    }
    else{
        id + 2
    }
}

//Array

const data1: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [1,2,"3"]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"

// This value cannot be assigned because seatAlloment can expect only those 3 values
//seatAllotment = "cabin" 
