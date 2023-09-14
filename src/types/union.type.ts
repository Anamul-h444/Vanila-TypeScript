type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let DogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  wags: true,
  purrs: true,
};

//Another example
type StringOrNumber = string | number;

const printData = (a: StringOrNumber, b: StringOrNumber) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};

console.log(printData(4, "books"));
