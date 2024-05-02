function sumOfTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// default values in function
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
sumOfTwo(5);
getUpper("vishwa");
signUpUser("vishwa", "vishwa@test.com", false);
loginUser("vishwa", "vishwa@test.com");
