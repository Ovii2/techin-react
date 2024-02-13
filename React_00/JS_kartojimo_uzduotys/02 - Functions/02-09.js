/*
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

const returnType = (type) => typeof type;

console.log(returnType(Object));
console.log(returnType(false));
console.log(returnType(() => {}));
console.log(returnType(12));
console.log(returnType('asd'));
console.log(returnType(undefined));
