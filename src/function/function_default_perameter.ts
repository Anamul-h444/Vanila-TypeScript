const person1 = (name: string, age: number, country?: string): string => {
  if (country) {
    return `My name is ${name} and age is ${age} and my country is ${country}`;
  }
  return `My name is ${name} and age is ${age}`;
};

console.log(person1("Haque", 34));
console.log(person1("Haque", 34, "Banglades"));
