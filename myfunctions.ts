
let myValue = sumOfTwo(5);
getUpper("vishwa");
signUpUser("vishwa","vishwa@test.com",false);

const heros = ["thor", "hulk", "groot"]

function sumOfTwo(num: number): number { 
    return num + 2
}

function getUpper(val: string){ 
    return val.toUpperCase();   
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

// default values in function
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("vishwa", "vishwa@test.com")

heros.map((hero): string => 
    { 
        return 'hero is ${hero}'
    }
)

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{ 
    throw new Error(errmsg)
}