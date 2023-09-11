# Typescript Documentation

<a name='top'></a>
| No | Subject |
| --- | ------------------------------------------------------------------------------------------- |
| 1. | [What is typescript?](#What-is-typescript?) |
| 2. | [Why use typescript?](#Why-use-typescript?) |
| 3. | [How does work typeScript?](#How-does-work-typeScript?) |
| 4. | [Installing & Configuring typescript & Compiler](#Installing-&-Configuring-typescript-&-Compiler) |
| 5. | [Number type data](#Number-type-data) |
| 6. | [String type data](#String-type-data) |
| 7. | [Boolean type data](#Boolean-type-data) |
| 8. | [Array type data](#Array-type-data) |
| 9. | [Object type data](#Object-type-data) |
| 10. | [Union type data](#Union-type-data) |
| 11. | [Tuple type data](#Tuple-type-data) |
| 12. | [Any type data](#Any-type-data) |
| 13. | [Enum type data](#Enum-type-data) |
| 14. | [Void type data](#Void-type-data) |
| 15. | [Never type data](#Void-type-data) |

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

> **_Installing & Configuring typescript and Compiler_**

- Install node js in your PC and check node -v.
- Install Compiler

```js
npm install typescript --save-dev
            or
npm install -g typescript
```

- The compiler is installed in the node_modules directory and can be run with:

```js
npx tsc
```

- Create `tsconfig.json` by

```js
tsc --init
```

- Create `index.ts` and open with tsc:

```js
tsc index.ts
//output: index.js
```

- Run Js file by node and get output:

```js
node index.js
```

- use watch mode for automatic re-compile:

```js
tsc index.ts --watch
```

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
