function multiply(a: unknown) {
  return a * 2;
}
console.log(multiply(4)); //8
console.log(multiply("string")); //Nan

//Decide by indeicating error
function multiply2(a: unknown) {
  if (typeof a === "number") {
    return a * 2;
  } else {
    return "Provide valid number";
  }
}
console.log(multiply(4)); //8
console.log(multiply("string")); //Provide valid number
