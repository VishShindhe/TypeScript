//Without using arrow key

function getProducts<T>(products: T[]): T {
    const myIndex = 3
    return(products[myIndex])
}


const getSomeMore = <T>(products: T[]): T => {
    const myIndex = 3
    return(products[myIndex])
}


