# Typescript Documentation

<a name='top'></a>
| No | Subject |
| --- | ------------------------------------------------------------------------------------------- |
| 1. | [What is typescript?](#What-is-typescript?) |
| 2. | [Why use typescript?](#Why-use-typescript?) |
| 3. | [How does work typeScript?](#How-does-work-typeScript?) |
| 4. | [Installing & Configuring typescript & Compiler](#Installing-&-Configuring-typescript-&-Compiler) |
| 4. | [Process of run typescript with parcel](#Process-of-run-typescript-with-parcel) |
| 12. | [Any type data](#Any-type-data) |
| 12. | [Uknown type data](#unknown-type-data) |
| 5. | [Number type data](#Number-type-data) |
| 6. | [String type data](#String-type-data) |
| 7. | [Boolean type data](#Boolean-type-data) |
| 8. | [Array type data](#Array-type-data) |
| 9. | [Object type data](#Object-type-data) |
| 10. | [Union type data](#union-type) |
| 11. | [Tuple type data](#Tuple-type-data) |
| 13. | [Enum type data](#Enum-type-data) |
| 14. | [Void type data](#Void-type-data) |
| 15. | [Never type data](#Void-type-data) |
| 15. | [Explicit, implicit and inference](#Explicit-implicit-and-inference) |
| 15. | [type alias](#type-alias) |
| 15. | [union type](#union-type) |
| 15. | [Intersection type](#intersection-type) |
| 15. | [Index signature type](#Index-signature-type) |

<a name='What-is-typescript?'></a>

> **_What is typescript?_**

TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. It was developed and is maintained by Microsoft. TypeScript's syntax is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. However, TypeScript adds features such as classes, interfaces, and access modifiers, which are not found in JavaScript. TypeScript's static type checking can help to catch errors early in the development process, making the code more robust and easier to maintain. It also provides better support for large and complex code bases by providing features such as modules, namespaces, and interfaces. TypeScript code can be transpiled (converted) to JavaScript, so it can run on any platform that supports JavaScript.

[Go to top:arrow_up: ](#top)

<a name='Why-use-typescript?'></a>

> **_Why use typescript?_**

1. Strong Typing: TypeScript offers strong typing, which means that variables are defined with specific data types, such as strings, numbers, and booleans. This helps to prevent errors and improves code readability.

2. Improved Code Quality: TypeScript enforces strict coding standards, making it easier to write high-quality code. It also includes features such as interfaces and classes, which promote object-oriented programming.

3. Better IntelliSense: TypeScript provides IntelliSense, a feature that offers code suggestions and autocompletion as you type. This helps to reduce the time and effort required to write code and improves productivity.

4. Better Error Checking: TypeScript has built-in error checking, which means that it can detect and report errors before you run the code. This helps to catch bugs early, making it easier to fix them.

5. Easier to Maintain: TypeScript makes it easier to maintain code, as it is well-structured and easy to understand. It also provides features such as modules, which allow you to organize your code into smaller, reusable chunks.

6. Better Scalability: TypeScript is designed to scale, making it suitable for large projects. It offers features such as namespaces and decorators, which help to keep the codebase organized and maintainable as it grows.

7. Better Support for Modern JavaScript Features: TypeScript includes support for modern JavaScript features, such as async/await and destructuring, making it easier to use these features in your code.

8. Compatibility with JavaScript: TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This makes it easy to integrate TypeScript into existing JavaScript projects.

[Go to top:arrow_up: ](#top)

<a name='How-does-work-typeScript?'></a>

> **_How does work typeScript?_**

When you write TypeScript code, you have access to features such as classes, interfaces, and strong typing. The TypeScript compiler checks your code for errors and provides feedback, such as type errors or syntax issues. This helps to catch bugs early and improve the overall quality of your code.

Once you are ready to run your code, you can use the TypeScript compiler (tsc) to convert your TypeScript code into JavaScript code. The compiler generates a .js file that can be run on any platform that supports JavaScript.

[Go to top:arrow_up: ](#top)

<a name='Installing-&-Configuring-typescript-&-Compiler'></a>

## Installing & Configuring typescript and Compiler

---

- > Install node js.
- > Install Compiler.
- > Initialize Typescript compailer (tsc)

```js
//Locally install
npm install typescript --save-dev

//Globally install
npm install -g typescript

//Initialize typesicript compailer (`tsconfig.json`)
tsc --init
```

- Create `index.html` and `index.js` file.
- In `index.html` link `index.js` file
- Create `index.ts ` file.
- `index.html` file can not read `index.ts` file. So, every changes need to compile `index.ts` to `index.js` by following commpand:

```
tsc index.ts --watch

```

- For showing compiling result in terminal run command:

```
node index.js
```

[Go to top:arrow_up: ](#top)

<a name='Process-of-run-typescript-with-parcel'></a>

## Process of run typescript with parcel

- npm init --y
- npm install parcel --save-dev
- Create `index.html` file as root.
- Create `src` and `/src/index.ts` and link in `index.html` head.
- Install typescript if before not installed.
- tsc --init
- From `tsconfig.json` `"noEmitOnError": true,` in uncommited.
- From package.json remove main because parcel cannot reae main.
- Write script in package. json as following:

```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "(npx parcel ./index.html) & npx parcel watch ./index.html"
  },
  //npx parcel ./index.html - Run development parcel server
  // npx parcel watch ./index.html - complie ts to js and hot reload parcel server
```

- Now For start server run command `npm start`

[Go to top:arrow_up: ](#top)

<a name='Description-about-Differents-data-types'></a>

> **_Description about differents data Types_**

There are several types of data types in TypeScript, including:

`Number`: This data type is used to represent numbers, including integers and floats.

`String`: This data type is used to represent a sequence of characters, such as words or sentences.

`Boolean`: This data type is used to represent true or false values.

`Array`: This data type is used to store multiple values of the same data type.

`Tuple`: This data type is used to store a fixed number of elements of different data types.

`Enum`: This data type is used to define a set of named constants, such as a list of colors or days of the week.

`Any`: This data type is used to allow a variable to hold any type of value.

`Void`: This data type is used to indicate that a function does not return a value.

`Never`: This data type is used to indicate that a function will never return a value, usually because it throws an error or has an infinite loop.

`Object`: This data type is used to represent any object, including instances of classes and interfaces.

[Go to top:arrow_up: ](#top)

<a name='Any-type-data'></a>

> **_Any data type_**

The any data type in TypeScript is used to represent any value or type. It is a flexible data type that can be used when the type of a variable is not known or when the variable needs to be able to hold different types of values at different times.

An any variable can be declared by using the syntax `"let variableName: any = value"`.

```js
let dynamicValue: any = "Hello";
console.log(dynamicValue); // Output: "Hello"
dynamicValue = 25;
console.log(dynamicValue); // Output: 25
```

The any data type can be useful when working with external libraries or APIs that return dynamic data.

```js
let jsonData: any = JSON.parse('{"name":"John", "age":25}');
console.log(jsonData.name); // Output: "John"
console.log(jsonData.age); // Output: 25
```

You can also use any data type with arrays

```js
let values: any[] = [1, "Hello", true];
console.log(values[0]); // Output: 1
console.log(values[1]); // Output: "Hello"
console.log(values[2]); // Output: true
```

It is important to note that when you use the any data type, TypeScript will not check for type compatibility, and you will lose the benefits of type checking. Therefore, it is recommended to use any data type only when it is absolutely necessary and to be careful when using it.

In the above examples, you can see how the any data type is used to represent any value or type, making it a flexible data type that can be used when the type of a variable is not known.

[Go to top:arrow_up: ](#top)

<a name='unknown-type-data'></a>

## Unknown type data

---

- The unknown type in TypeScript is a type-safe counterpart to the any type.
- It is used to represent a value whose type is unknown or not yet known.
- Assign any type `unknown` return correct answer but he indicate that this is unknown type.
- In compile time decision can possible with indicating error by `unknown type` which can not possible by `any` type.
- It forced developer the developer for type check befor performing the value.
- So, `unknown` type is safe from `any` type.

```ts
function multiply(a: unknown) {
  return a * 2;
}
console.log(multiply(4)); //8
console.log(multiply("string")); //Nan

//Decide by indicating error
function multiply2(a: unknown) {
  if (typeof a === "number") {
    return a * 2;
  } else {
    return "Provide valid number";
  }
}
console.log(multiply(4)); //8
console.log(multiply("string")); //Provide valid number
```

[Go to top:arrow_up: ](#top)
<a name='Number-type-data'></a>

> **_Number type data_**

The number data type in TypeScript is used to represent numeric values, including integers and floating point numbers. This data type can be used for mathematical operations and calculations, as well as for storing and manipulating numerical data. It can be represented in decimal, binary, octal or hexadecimal notation and can be represented in double or float.

```ts
let age: number;
age = 20;
console.log(age); //20

let roll: number = 20;
console.log(roll); //20
```

[Go to top:arrow_up: ](#top)

<a name='String-type-data'></a>

> **_String type data_**

The string data type in TypeScript is used to represent text or a sequence of characters. This data type can be used for storing and manipulating text data, such as names, addresses, and sentences.

A string can be declared by enclosing the characters in single or double quotes.

```js
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // Output: "John Doe"
```

[Go to top:arrow_up: ](#top)

<a name='Boolean-type-data'></a>

> **_Boolean type data_**
> The boolean data type in TypeScript is used to represent true or false values. It is a fundamental data type that is commonly used in programming for decision making and control flow.

A boolean can be declared using the keywords "true" or "false"

```js
let isTrue: boolean = true;
let isFalse: boolean = false;
```

Boolean values are often used in conditional statements, such as if-else, switch-case, and ternary operators.

```ts
let age: number = 25;
let isAdult: boolean = age >= 18;
if (isAdult) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
```

Boolean values are also used in logical operations like and(&&), or(||) and not(!).

```ts
let isStudent: boolean = true;
let isEmployed: boolean = false;
console.log(isStudent && isEmployed); // Output: false
console.log(isStudent || isEmployed); // Output: true
console.log(!isStudent); // Output: false
```

In the above examples, you can see how the boolean data type is used to represent true or false values, and how it is used to control the flow of a program. It is a simple but powerful data type that is widely used in programming.

[Go to top:arrow_up: ](#top)

<a name='Array-type-data'></a>

> **_Array type data_**

The array data type in TypeScript is used to represent a collection of elements of the same data type. It is a powerful data type that allows you to store and manipulate multiple values of the same type in a single variable.

An array can be declared by using the syntax `"let variableName: dataType[] = [values]"`.

```js
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Mike", "Sara"];
let flags: boolean[] = [true, false, true, false];
```

You can also use array type with generics by using syntax "let variableName: `Array<dataType> = [values]"`

```ts
let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["John", "Jane", "Mike", "Sara"];
let flags: Array<boolean> = [true, false, true, false];
```

You can also access array elements by using index number, starting from zero.

```ts
let names: string[] = ["John", "Jane", "Mike", "Sara"];
console.log(names[0]); // Output: "John"
console.log(names[1]); // Output: "Jane"
```

You can also use array methods like push, pop, shift, unshift, slice, splice etc.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6); // add element to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
numbers.pop(); // remove last element from the array
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

In the above examples, you can see how the array data type is used to store and manipulate multiple values of the same type in a single variable. It is a powerful data type that can be used for a wide range of applications, such as storing and manipulating lists of data.

[Go to top:arrow_up: ](#top)

<a name='Object-type-data'></a>

> **_object type data_**

```ts
let names: object;
names = { name1: "anis" };
console.log(names);

let users: object[];
users = [];

let user1: { userName: string; userId: number };
user1 = { userName: "anis", userId: 101 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: "rabu", userId: 102 };

users.push(user2);

for (const key in users) {
  console.log(users[key]["userName"]);
}
```

[Go to top:arrow_up: ](#top)

<a name='Tuple-type-data'></a>

> **_Tuple type data_**

A tuple data type in TypeScript is a collection of elements of different data types. It is similar to an array, but the elements in a tuple have fixed positions and specific types. It allows you to store a fixed number of elements of different types in a single variable.

A tuple can be declared by using the syntax `"let variableName: [dataType1, dataType2, dataType3, ...] = [values]"`.

```ts
let person: [string, number, boolean] = ["John Doe", 25, true];
let point: [number, number] = [3, 4];
```

You can also access tuple elements by using index number, starting from zero.

```ts
let person: [string, number, boolean] = ["John Doe", 25, true];
console.log(person[0]); // Output: "John Doe"
console.log(person[1]); // Output: 25
```

You can also use destructuring assignment to extract the tuple elements and store them in individual variables

```ts
let person: [string, number, boolean] = ["John Doe", 25, true];
let [name, age, isStudent] = person;
console.log(name); // Output: "John Doe"
console.log(age); // Output: 25
```

You can also use "spread operator" to combine two or more tuples into a single tuple.

```ts
let tuple1: [string, number] = ["John", 25];
let tuple2: [boolean, number] = [true, 30];
let combinedTuple: [string, number, boolean, number] = [...tuple1, ...tuple2];
console.log(combinedTuple); // Output: ["John", 25, true, 30]
```

In the above examples, you can see how the tuple data type is used to store a fixed number of elements of different types in a single variable. It is useful in situations where you need to store a specific set of related values, such as a point in a 2D space, or a person's name, age and occupation.

[Go to top:arrow_up: ](#top)

<a name='Enum-type-data'></a>

> **_Enum type data_**

In TypeScript, an Enum (short for "enumeration") is a way to define a set of named constants. An Enum can be defined using the enum keyword, followed by a name for the Enum and a set of enumerators in curly braces. Each enumerator is a named constant, and is assigned a value starting from 0 by default, but you can also explicitly set the value.

Example:

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let backgroundColor = Color.Green; //0
```

In this example, Color is the name of the Enum, Red, Green, and Blue are the enumerators, and backgroundColor is a variable of type Color that is assigned the value Color.Green. Enumerators can also be given explicit values:

```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
```

In this example, Red is assigned the value 1, Green is assigned the value 2, and Blue is assigned the value 3.

You can also access the keys of an enum using `Object.keys()` or `Object.values()`

```js
console.log(Object.keys(Color)); // Output: ["Red", "Green", "Blue"]
console.log(Object.values(Color)); // Output: [1, 2, 4]
```

[Go to top:arrow_up: ](#top)

<a name='Void-type-data'></a>

> **_void data type_**

In TypeScript, void is a type that represents the absence of a value. It is commonly used as the return type of functions that do not return a value.

Here's an example of a function that returns void:

```js
function printText(text: string): void {
  console.log(text);
}
```

In the example above, the function printText takes a single parameter of type string and does not return a value. Therefore, its return type is void.

[Go to top:arrow_up: ](#top)

<a name='Never-type-data'></a>

> **_Never data type_**

In TypeScript, never is a type that represents the absence of a value in a specific context. It is commonly used as the return type of functions that never return normally or throw an exception.

Here's an example of a function that returns never:

```js
function error(message: string): never {
  throw new Error(message);
}
```

In the example above, the function error takes a single parameter of type string and throws an error with the given message. Therefore, its return type is never.

Another example of a function that returns never is an infinite loop:

```js
function infiniteLoop(): never {
  while (true) {
    // do something
  }
}
```

It's also possible to use never as a type for a variable but it's not

[Go to top:arrow_up: ](#top)

<a name='Explicit-implicit-and-inference'></a>

## Explicit, implicit and inference

---

**Explicit Typing:**
Explicit typing is when you declare the data type of a variable explicitly using TypeScript annotations.

```ts
// Explicitly declaring the types
let explicitNumber: number = 10;
let explicitString: string = "Hello, TypeScript";
let explicitArray: number[] = [1, 2, 3];
let explicitObject: { name: string; age: number } = { name: "John", age: 30 };
```

In the above code, we explicitly specify the data types for the variables.

**Implicit Typing:**  
Implicit typing is when TypeScript infers the data type based on the value assigned to a variable.

```ts
// Implicit typing
let implicitNumber = 10; // TypeScript infers 'implicitNumber' as type number
let implicitString = "Hello, TypeScript"; // TypeScript infers 'implicitString' as type string
let implicitArray = [1, 2, 3]; // TypeScript infers 'implicitArray' as type number[]
let implicitObject = { name: "John", age: 30 }; // TypeScript infers 'implicitObject' as an object with a specific structure
```

In the above code, we didn't specify the data types explicitly, but TypeScript inferred them based on the assigned values.

**Type Inference:**
Type inference occurs when TypeScript automatically infers the data types of variables based on how they are used within the code.

```ts
// Type inference
let num = 10; // TypeScript infers 'num' as type number
let greeting = "Hello, TypeScript"; // TypeScript infers 'greeting' as type string

function add(a: number, b: number) {
  return a + b; // TypeScript infers the return type as number
}
```

In the code above, TypeScript infers the types of variables based on their usage and infers the return type of the add function based on the operation performed.

TypeScript's type inference is powerful and helps catch type-related errors while providing strong type safety.

[Go to top:arrow_up: ](#top)

<a name='type-alias'></a>

## type alias

---

- A type alias allows you to create a custom name for a type, making your code more readable and maintaining flexibility.
- It's especially useful when you want to create complex or reusable types.
- To define a type alias, you use the `type` keyword.

```ts
type Student = {
  roll: number;
  name: string;
  class: string;
};

const student1: Student = {
  roll: 1,
  name: "Anamul",
  class: "Five",
};

const student2: Student = {
  roll: 2,
  name: "Haque",
  class: "Five",
};
```

[Go to top:arrow_up: ](#top)

<a name='union-type'></a>

## Union type

Union type can have properties of either one or both of the types.

```ts
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

//Union type declare
type DogAndCatUnion = Dog | Cat;

//One properties
let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

//One properties
let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

//both properties
let DogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  wags: true,
  purrs: true,
};

//Second example
type StringOrNumber = string | number;

const printData = (a: StringOrNumber, b: StringOrNumber) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};

console.log(printData(4, "books"));
```

[Go to top:arrow_up: ](#top)

<a name='intersection-type'></a>

## Intersection type

---

- An intersection type allows you to combine multiple types into a single type.
- You define an intersection type using the & operator.
- In this type declaration all properties assigned mendatory, otherwise return error.

```typescript
Copy code
type Employee = {
    id: number;
    name: string;
};

type Department = {
    departmentId: number;
    departmentName: string;
};

type EmployeeWithDepartment = Employee & Department;

const john: EmployeeWithDepartment = {
    id: 1,
    name: "John",
    departmentId: 101,
    departmentName: "HR",
};
```

In this example, we've defined two types, Employee and Department, representing an employee and a department, respectively. We then create an EmployeeWithDepartment type as an intersection of these two types using the & operator. As a result, the EmployeeWithDepartment type has all the properties from both Employee and Department.

[Go to top:arrow_up: ](#top)

<a name='Index-signature-type'></a>

## Index signature type

---

An index signature in TypeScript is a way to define the shape of an object with keys that are not known at compile time. It is denoted by using the [key: Type] syntax, where key is the name of the index and Type is the type of the value that can be stored at that index.

For example, the following code defines an object with an index signature that allows strings to be stored at any index:

```ts
type Product = {
  [key: string]: string;
};
```

We can then create an instance of the product and store a string value at any index:

```ts
const product: Product = {
  Soap: "Lux",
  Snow: "Fair & Lovely",
  Mobile: "Samsung",
};
```

**Another example**

- Dynamically key value

```ts
interface MultiTypeDictionary {
  [key: string]: number | string;
}

const myMultiTypeDictionary: MultiTypeDictionary = {
  one: 1,
  2: "two",
  three: "3",
};
```

The [key: string]: number | string syntax in the index signature of the MultiTypeDictionary interface means that the key of the object can be any string, and the value can be either a number or a string.

The const myMultiTypeDictionary: MultiTypeDictionary = { "one": 1, 2: "two", "three": "3" } statement creates an instance of the MultiTypeDictionary interface and stores the following values:

The string "one" with the number 1.
The number 2 with the string "two".
The string "three" with the string "3".

## Read only array

A read-only array in TypeScript is an array that cannot be modified. This means that you cannot add, remove, or change the elements of the array. You can only read the elements of the array.

There are two ways to create a read-only array in TypeScript:

- Using the `ReadonlyArray<T>` utility type
- Using the `readonly` modifier with a standard array type
  Here is an example of creating a read-only array using the `ReadonlyArray<T>` utility type:

```ts
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
```

Here is an example of creating a read-only array using the `readonly` modifier with a standard array type:

```ts
const numbers: readonly number[] = [1, 2, 3, 4, 5];
const point: readonly [number, number] = [1, 2]; //Read only tuple
```

In both cases, the resulting array is a read-only array of numbers.

You can try to modify a read-only array, but TypeScript will throw an error. For example:

```ts
numbers.push(6); // Error: Cannot add element to read-only array.
```

Read-only arrays can be useful in situations where you want to prevent accidental modifications to an array. For example, you might want to create a read-only array of data that is used by a function. This will prevent the function from accidentally changing the data

## null & undefined type

- undefined is the default value for uninitialized variables.
- null is a value that can be assigned to a variable to indicate that the variable does not have a value.

```ts
let myVariable: null = null;

let myVariable: undefined;
console.log(myVariable); // Outputs: undefined

//Example
function getValue(): number | undefined {
  if (someCondition) {
    return 42;
  } else {
    return undefined;
  }
}
```

## enums types

An enum type in TypeScript is a way to define a set of named constants.  
There are three types of enums in TypeScript:

**_Numeric enums:_** The members of a numeric enum are numbers, and their values are automatically assigned in increasing order starting from 0.  
**_String enums:_** The members of a string enum are strings, and their values are the strings themselves.  
**_Heterogeneous enums:_** The members of a heterogeneous enum can be of different types, such as numbers, strings, or even other enums.

### Numeric enums

```ts
enum Rank {
  Admin, // 0
  Author, // 1
  Provider, // 2
}

//Access index
let roleIndex: Rank = Rank["Admin"];
console.log(roleIndex); // Outputs: 0

//  access enum values by name
let roleName: string = Rank[roleIndex];
console.log(roleName); // Outputs: Admin
```

### Numeric enums

```ts
enum Rank {
  Admin, // 0
  Author, // 1
  Provider, // 2
}

//Access index
let roleIndex: Rank = Rank["Admin"];
console.log(roleIndex); // Outputs: 0

//  access enum values by name
let roleName: string = Rank[roleIndex];
console.log(roleName); // Outputs: Admin
```

### Heterogeneous enums

```ts
enum Status {
  Active = 1,
  Inactive = "INACTIVE",
  Pending = 2,
}

let status: Status = Status.Inactive;
console.log(status); // Outputs: "INACTIVE"

let numericValue: number = Status.Active;
console.log(numericValue); // Outputs: 1
```

### function declaration

```ts
//():string means - return string
function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
}

intro("Anamul", 34);

const intro2 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}`;
};

intro2("Haque", 34);
```

### Default/optional Perameter in function

- TypeScript will throw an error if all parameters are not passed as arguments when calling the function.
- So the optional parameter must be passed as optional.

```ts
//Optional parameter assign with - ? sign
const person = (name: string, age: number, country?: string): string => {
  if (country) {
    return `My name is ${name} and age is ${age} and my country is ${country}`;
  }
  return `My name is ${name} and age is ${age}`;
};

console.log(person("Haque", 34));
console.log(person("Haque", 34, "Banglades"));
```

### Custom perameter in fuction

```ts
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
```

### Function call signature

- A function call signature in TypeScript is a way to describe the types of the parameters and the return value of a function.
- It is used to ensure that the function is called with the correct arguments and that the return value is of the correct type.

- The function call signature is written after the function name, and it is enclosed in parentheses.
- The parameters are listed in the parentheses, and their types are specified after the colon.
- The return type is specified after the arrow (=>).

For example, the following function call signature defines a function that takes two numbers as input and returns their sum:

```ts
function sum(x: number, y: number): number {
  return x + y;
}
```

### Define function in type allias

```ts
type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  greet: (greeting: string) => string;
};

const person: Person = {
  name: "Anamul",
  age: 34,
  ageUnit: AgeUnit.Month,
  greet: (greeting) => `${greeting} Mr. ${person.name}`,
};

console.log(person.greet("welcome")); //Output : Welcome Mr Anamul
```
