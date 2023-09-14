enum AgeUnit {
  Month = "month",
  Year = "year",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  greet: (greeting: string) => string;
};

function printPerson(person: Person): Person {
  person.age = person.age * 12;
  return person;
}

const person: Person = {
  name: "Anamul",
  age: 34,
  ageUnit: AgeUnit.Month,
  greet: (greeting) => `${greeting} Mr. ${person.name}`,
};

console.log(printPerson(person));
console.log(person.greet("welcome"));

//Output : {name: 'Anamul', age: 408, ageUnit: 'month'}
