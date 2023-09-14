enum AgeUnit {
  Month = "month",
  Year = "year",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
};

function printPerson(person: Person): Person {
  person.age = person.age * 12;
  return person;
}

const person = {
  name: "Anamul",
  age: 34,
  ageUnit: AgeUnit.Month,
};

console.log(printPerson(person));

//Output : {name: 'Anamul', age: 408, ageUnit: 'month'}
