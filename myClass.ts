// class Employee{
//     // by default all variables are public
//     //email is pvt, cannot be accessed outsideclass
//     // and is readonly

//     public name: string  
//     private email: string
//     readonly city: string = "Belagavi"  
//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }
// }


class Employee{
    private _numOfYears= 1
    protected _courseCount = 1
    readonly city: string = "Belagavi"
    constructor(
        name: string,
        email: string
    ){}
    private deleteToken(){
        console.log("Token deleted")
    }

    get numOfYears(): number {
        return this._numOfYears;
    }

    set numOfYears(num){
        if(num < 1){
            throw new Error("Num of years should be more than 1")
        }
        this._numOfYears = num;
    }
}

class Boss extends Employee{
    isManager: boolean = true
    changeCourseCount(){
        this._courseCount = 99
    }
}

const tim = new Employee("Cook", "tc@a.com")
// tim.city = "Belgaum"   
// tim.email;

// tim.deleteToken();
