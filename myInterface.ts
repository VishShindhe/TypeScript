interface myInterface {
    readonly dbId : number,
    email: string,
    userId: number,
    googleId?: string
    //Methods can be included 2 ways to  declare
    //startTrial: () => string  
    startTrial(): string,
    getCoupon(couponName: string, value: number ): number
}

const vish: childInterface = { 
    dbId: 123, 
    gitHubToken: "git",
    role: "ta",
    email:"v@test.com", 
    userId: 778,
    startTrial: () => {
        return "Trail started"
    },
    getCoupon(couponName: "vishwa10", value: 10) {
        return 10
    },
}

//Now if we want to add some more properties to this interface we can do it
interface myInterface{
    gitHubToken: string
}

interface childInterface extends myInterface{
    role: "admin" | "ta" | "learner"
}

