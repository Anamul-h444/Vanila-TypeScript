var AgeUnit;
(function(AgeUnit) {
    AgeUnit["Month"] = "month";
    AgeUnit["Year"] = "year";
})(AgeUnit || (AgeUnit = {}));
function printPerson(person) {
    person.age = person.age * 12;
    return person;
}
const person = {
    name: "Anamul",
    age: 34,
    ageUnit: AgeUnit.Month,
    greet: (greeting)=>`${greeting} Mr. ${person.name}`
};
console.log(printPerson(person));
console.log(person.greet("welcome")); //Output : {name: 'Anamul', age: 408, ageUnit: 'month'}

//# sourceMappingURL=index.377278e2.js.map
