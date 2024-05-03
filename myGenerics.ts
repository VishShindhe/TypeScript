const scores: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number ): boolean | number {
    return val
}

function identityTwo(val: any ): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

//identityThree(true)
//identityThree(3)
//identityThree("vishwa")

function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string
    capacity: number
}

identityFour<Bottle>({
    brand: "milton",
    capacity: 2
})
