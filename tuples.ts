// Tuples - An Array which can contain hetro data types but the order of data types declared 
//and assigned must match

let myTuple: [string, number, boolean]
myTuple = ["Hello", 123, true]

//This assignment is incorrect
    //myTuple = [ 123, true, "Hello"]

type myNextTuple = [number, string]

const t: myNextTuple = [12, "Hi"]

t[1] = "Hello"
t.push("123")
t.push(456)

// you cannot push or assign values other than number and string
    //t.push(true)

