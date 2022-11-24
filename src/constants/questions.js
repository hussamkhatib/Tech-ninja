const questions = [
  {
    question:
      "const shape = {\nradius: 10,\ndiameter() {\n return this.radius * 2;\n},\nperimeter: () => \n2 * Math.PI * this.radius,\n};\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
    answer: "20 and NaN",
    wrong: ["NaN and 63", "20 and 63", "20 and 62.83185307179586"],
    time: 60,
  },
  {
    question:
      "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);",
    answer: "0 2 2",
    wrong: ["1 1 2", "1 2 2", "0 1 2"],
    time: 50,
  },
  {
    question:
      "const foo = () => \nconsole.log('First');\nconst bar = () =>\nsetTimeout(()=>console.log('Second'));\nconst baz = () => \nconsole.log('Third');\n                \nbar();\nfoo();\nbaz();",
    answer: "First Third Second",
    wrong: ["First Second Third", "Second Third First", "Second First Third"],
    time: 50,
  },
  {
    question: "console.log(eval('10*10+5'));",
    answer: "105",
    wrong: ["TypeError", '"10*10+5"', '"105"'],
    time: 30,
  },
  {
    question:
      "function getAge() {\n'use strict';\nage = 21;\nconsole.log(age);\n}\n\ngetAge();",
    answer: "ReferenceError",
    wrong: ["21", "undefined", "TypeError"],
    time: 20,
  },
  {
    question:
      "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = 'Lydia';\nlet age = 21;\n}\n\nsayHi();",
    answer: "undefined and ReferenceError",
    wrong: [
      "Lydia and undefined",
      "Lydia and ReferenceError",
      "ReferenceError and 21",
    ],
    time: 30,
  },
  {
    question:
      "let person = { name: 'Lydia' };\nconst members = [person];\nperson = null;\n\nconsole.log(members);",
    answer: '[{ name: "Lydia" }]',
    wrong: ["[{}]", "null", "[null]"],
    time: 60,
  },
  {
    question:
      "let c ={ greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);",
    answer: "Hello",
    wrong: ["undefined", "TypeError", "ReferenceError"],
    time: 50,
  },
  {
    question:
      "for (let i = 1; i < 5; i++) {\n        if (i === 3) continue;\n        console.log(i);\n        }",
    answer: "1 2 4",
    wrong: ["1 2", "1 2 3", "1 3 4"],
    time: 40,
  },
  {
    question: "var num = 8;\nvar num = 10;\n\nconsole.log(num);",
    answer: "10",
    wrong: ["8", "SyntaxError", "ReferenceError"],
    time: 30,
  },
  {
    question:
      "for (var i = 0; i < 3; i++) {\nsetTimeout(() => console.log(i), 1);\n}\n        \nfor (let i = 0; i < 3; i++) {\nsetTimeout(() => console.log(i), 1);\n}",
    answer: "3 3 3 and 0 1 2",
    wrong: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3"],
    time: 70,
  },
  {
    question: "console.log(typeof typeof 1);",
    answer: '"string"',
    wrong: ['"undefined"', '"object"', '"number"'],
    time: 60,
  },
  {
    question: " +true;\n!'Lydia'; ",
    answer: "1 and false",
    wrong: ["false and false", "false and NaN"],
    time: 50,
  },
  {
    question: "console.log(3 + 4 + '5');",
    answer: '"75"',
    wrong: ['"345"', '"12"', "12"],
    time: 40,
  },
  {
    question:
      'The JavaScript global execution context creates \ntwo things for you: the global object, and the "this" keyword.',
    answer: "true",
    wrong: ["false", "it depends"],
    time: 30,
  },
  {
    question:
      "\nlet a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
    wrong: ["true false true", "false false true", "false true true"],
    answer: "true false false",
    time: 70,
  },
  {
    question: "What are the three phases of event propagation?",
    answer: " Capturing > Target > Bubbling",
    wrong: [
      "Target > Capturing > Bubbling",
      "Bubbling > Target > Capturing",
      "Target > Bubbling > Capturing",
    ],
    time: 60,
  },
  {
    question: "All object have prototypes.",
    answer: "false",
    wrong: ["true", "i dont know"],
    time: 50,
  },
  {
    question: "function sum(a, b) {\nreturn a + b;\n}\n\nsum(1, '2');",
    answer: "'12'",
    wrong: ["3", "NaN", "TypeError"],
    time: 40,
  },
  {
    question:
      "function getAge(...args) {\n        console.log(typeof args);\n        }\n        \n        getAge(21);",
    answer: '"object"',
    wrong: ['"number"', '"array"', '"NaN"'],
    time: 30,
  },
  {
    question: "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);",
    answer: "{}",
    wrong: ["ReferenceError: greetign is not defined", "undefined"],
    time: 70,
  },
  {
    question:
      'let randomValue = { name: "Lydia" }\nrandomValue = 23\n\nif (!typeof randomValue === "string") {\n        console.log("It\'s not a string!")\n} else {\n        console.log("Yay it\'s a string!")\n}',
    answer: "5",
    wrong: ["6", "7", "8"],
    time: 10,
  },
  {
    question:
      "function sayHi() {\n        return (() => 0)();\n        }\n        \n        console.log(typeof sayHi());",
    answer: '"number"',
    wrong: ['"object"', '"undefined"', '"function"'],
    time: 50,
  },
  {
    question:
      "function* generator(i) {\n        yield i;\n        yield i * 2;\n        }\n        \n        const gen = generator(10);\n        \n        console.log(gen.next().value);\n        console.log(gen.next().value);",
    answer: "10, 20",
    wrong: ["20, 20", "0, 10 and 10, 20", "[0, 10], [10, 20]"],
    time: 40,
  },
  {
    question: "const num = parseInt('7*6', 10);",
    answer: "7",
    wrong: ['"42"', "42", "NaN"],
    time: 30,
  },
  {
    question: "[...'Lydia'];",
    answer: '["L", "y", "d", "i", "a"]',
    wrong: ['[["L", "y", "d", "i", "a"]]', '[[], "Lydia"]', '["Lydia"]'],
    time: 70,
  },
  {
    question:
      "const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);",
    answer: "[1, 2, 3, 7 x empty, 11]",
    wrong: ["[1, 2, 3, 7 x null, 11]", "SyntaxError", "[1, 2, 3, 11]"],
    time: 60,
  },
  {
    question: "Everything in JavaScript is either a...",
    answer: "primitive or object",
    wrong: [
      " number or object",
      "trick question! only objects",
      "function or object",
    ],
    time: 50,
  },
  {
    question:
      "String.prototype.giveLydiaPizza = () => {\n        return 'Just give Lydia pizza already!';\n        };\n        \n        const name = 'Lydia';\n        \n        name.giveLydiaPizza();",
    answer: '"Just give Lydia pizza already!"',
    wrong: ["TypeError: not a function", "SyntaxError", " undefined"],
    time: 40,
  },
  {
    question:
      "const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);",
    answer: "456",
    wrong: ["123", "undefined", "ReferenceError"],
    time: 60,
  },
  {
    question:
      "function checkAge(data) {\nif (data === { age: 18 }) {\n        console.log('You are an adult!');\n} else if (data == { age: 18 }) {\n        console.log('You are still an adult.');\n} else {\n        console.log('Hmm.. You don't have an age I guess');\n}\n}\n              ",
    answer: "Hmm.. You don't have an age I guess",
    wrong: ["You are an adult!", "You are still an adult."],
    time: 60,
  },
  {
    question: "sessionStorage.setItem('cool_secret', 123);",
    answer: "When the user closes the tab.",
    wrong: [
      "Forever, the data doesn't get lost.",
      " When the user shuts off their computer.",
      "When the user closes the entire browser, not only the tab.",
    ],
    time: 60,
  },
  {
    question:
      "[1, 2, 3].map(num => {\n                        if (typeof num === 'number') return;\n                        return num * 2;\n                      });",
    answer: "[undefined, undefined, undefined]",
    wrong: ["[]", "[null, null, null]", "[ 3 x empty ]"],
    time: 60,
  },
  {
    question:
      "(() => {\n        let x = (y = 10);\n        })();\n        \n        console.log(typeof x);\n        console.log(typeof y);",
    answer: '"undefined", "number"',
    wrong: [
      '"number", "number"',
      '"object", "number"',
      '"number", "undefined"',
    ],
    time: 60,
  },
  {
    question:
      "const obj = { 1: 'a', 2: 'b', 3: 'c' };\n                const set = new Set([1, 2, 3, 4, 5]);\n                \n                obj.hasOwnProperty('1');\n                obj.hasOwnProperty(1);\n                set.has('1');\n                set.has(1);",
    answer: "true true false true",
    wrong: [
      "false true false true",
      "false true true true",
      "true true true true",
    ],
    time: 60,
  },
  {
    question:
      "const firstPromise = new Promise((res, rej) => {\nsetTimeout(res, 500, 'one');\n});\n\nconst secondPromise = new Promise((res, rej) => {\nsetTimeout(res, 100, 'two');\n});\n\nPromise.race([firstPromise, secondPromise]).then(res => console.log(res));",
    answer: ' "two"',
    wrong: ['"one"', '"two" "one"', '"one" "two"'],
    time: 70,
  },
  {
    question:
      "const { name: myName } = { name: 'Lydia' };\n        console.log(name)",
    answer: "ReferenceError",
    wrong: ['"myName', '"Lydia"', "undefined"],
    time: 60,
  },
  {
    question:
      "[[0, 1], [2, 3]].reduce(\n        (acc, cur) => {\n                return acc.concat(cur);\n        },\n        [1, 2],\n        );",
    answer: "[1, 2, 0, 1, 2, 3]",
    wrong: ["[0, 1, 2, 3, 1, 2]", "[1, 2, 6]", "[6, 1, 2]"],
    time: 50,
  },
  {
    question: "const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);",
    answer: "{1, 2, 3, 4}",
    wrong: ["{1, 1, 2, 3, 4}", "[1, 2, 3, 4]", "[1, 1, 2, 3, 4]"],
    time: 40,
  },
  {
    question:
      "(() => {\n        let x, y;\n        try {\n                throw new Error();\n        } catch (x) {\n                (x = 1), (y = 2);\n                console.log(x);\n        }\n        console.log(x);\n        console.log(y);\n        })();",
    answer: "1 undefined 2",
    wrong: ["undefined undefined undefined", "1 1 2", "1 undefined undefined"],
    time: 60,
  },
];

export default questions;
