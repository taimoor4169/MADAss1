// 1 charAt()
const str1 = "python";
const char = str1.charAt(7);
console.log(char); 

// 2 charCodeAt()
const str2 = "python programming";
const unicode = str2.charCodeAt(7);
console.log(unicode); // Output: 105 (Unicode value for "W")

// 3 concat()
const str3 = "React";
const str4 = "Native";
const concatenated = str3.concat(", ", str4);
console.log(concatenated); // Output: "React , Native"

// 4 constructor
const str5 = "My name is taimoor";
const constructor = str5.constructor;
console.log(constructor); // Output: [Function: String]

// 5 endsWith()
const str6 = "Hello, universe!";
const endsWithWorld = str6.endsWith("World!");
console.log(endsWithWorld); // Output: true

// 6 fromCharCode()
const unicodeValues = [72, 201, 208, 108, 111];
const str7 = String.fromCharCode(...unicodeValues);
console.log(str7); // Output: "Hello"

// 7 includes()
const str8 = " taimoor";
const containsHello = str8.includes("Hello");
console.log(containsHello); // Output: false

// 8 indexOf()
const str9 = "Javascript programming is used for Web Development and mobile apllication";
const index = str9.indexOf("is");
console.log(index); // Output: 23

// 9 lastIndexOf()
const str10 = "React Native and React.js are frameworks of Javasctipt";
const lastIndex = str10.lastIndexOf("React");
console.log(lastIndex); // Output: 6

// 10 length
const str11 = "We are learning Javascript programming for MAD Development";
const length = str11.length;
console.log(length); // Output: 38

// 11 localeCompare()
const str12 = "Javascript";
const str13 = "Programming";
const comparison = str12.localeCompare(str13);
console.log(comparison); // Output: -1 (alphabetically "Javascript" comes before "Programming")

// 12 match()
const str14 = "The quick brown fox jumping on the table";
const matches = str14.match(/o/g);
console.log(matches); // Output: ["o", "o"]

// prototype
// You typically don't use this directly on strings, but it's used for extending objects.

// 13 repeat()
const str15 = "FullStack Develepor";
const repeated = str15.repeat(3);
console.log(repeated); // Output: "FullStackFullStackFullStack"

// 14 replace()
const str16 = "Javascript programming";
const replaced = str16.replace("programming", "React");
console.log(replaced); // Output: "Javascript React"

// 15 replaceAll()
const str17 = "Javascript programming is helpful for React.js";
const replacedAll = str17.replaceAll("programming", "React Native");
console.log(replacedAll); // Output: "Javascript React Native React.js"

// 16 search()
const str18 = "My Name is taimoor";
const searchResult = str18.search("taimoor");
console.log(searchResult); // Output: 11

// 17 slice()
const str19 = "Javascript Coding";
const sliced = str19.slice(10, 17);
console.log(sliced); // Output: "Coding"

// 18 split()
const str20 = "Hello, World!";
const parts = str20.split(" ");
console.log(parts); // Output: ["Hello,", "World!"]

// 19 startsWith()
const str21 = "Coding is fun and challenge";
const startsWithHello = str21.startsWith("Coding");
console.log(startsWithHello); // Output: true

// 20 substr()
const str22 = "React.js";
const subString = str22.substr(0, 5);
console.log(subString); // Output: "React"

// 21 substring()
const str23 = "Hello, World!";
const subString2 = str23.substring(7, 12);
console.log(subString2); // Output: "World"

// 22 toLocaleLowerCase()
const str24 = "Web Development";
const lowerCase = str24.toLocaleLowerCase();
console.log(lowerCase); // Output: "web development"

// 23 toLocaleUpperCase()
const str25 = "machine learning";
const upperCase = str25.toLocaleUpperCase();
console.log(upperCase); // Output: "MACHINE LEARNING"

// 24 toLowerCase()
const str26 = "Full Stack Developer";
const lowerCase2 = str26.toLowerCase();
console.log(lowerCase2); // Output: "full stack developer"

// 25 toString()
const str27 = "javascript";
const strToString = str27.toString();
console.log(strToString); // Output: "javascript"

// 26 toUpperCase()
const str28 = "Hello, World!";
const upperCase2 = str28.toUpperCase();
console.log(upperCase2); // Output: "HELLO, WORLD!"

// 27 trim()
const str29 = "   Developers in Codeshef   ";
const trimmed = str29.trim();
console.log(trimmed); // Output: "Developers in Codeshef"

// 28 trimEnd()
const str30 = "   Hello, World!   ";
const trimmedEnd = str30.trimEnd();
console.log(trimmedEnd); // Output: "   Hello, World!"

// 29 trimStart()
const str31 = "   Coding , Programming   ";
const trimmedStart = str31.trimStart();
console.log(trimmedStart); // Output: "Coding , Programming"

// 30 valueOf()
const str32 = new String("My goal is Full Stack Developer ");
const primitiveValue = str32.valueOf();
console.log(primitiveValue); // Output: "My goal is Full Stack"