const questionData = [    
    [   
        {
            question: 
`
<pre>const shape = {
radius: 10,
diameter() {
 return this.radius * 2;
},
perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());</pre>
`,
            answer: "20 and NaN",
            wrong:  ['NaN and 63','20 and 63','20 and 62.83185307179586'],
            time: 60
        },{
                question: 
`
<pre>let number = 0;
console.log(number++);
console.log(++number);
console.log(number);</pre>`,
                answer: "0 2 2",
                wrong:  ['1 1 2','1 2 2','0 1 2'],
                time: 50
        },{
                question: `
<pre>const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');
                
bar();
foo();
baz();</pre>`,
                answer: "First Third Second",
                wrong:  ['First Second Third','Second Third First','Second First Third'],
                time: 40
        },{
                question: `<pre>console.log(eval('10*10+5'));</pre>`,
                answer: "105",
                wrong:  ['TypeError','"10*10+5"','"105"'],
                time: 30
        },{
                question: `
<pre>function getAge() {
'use strict';
age = 21;
console.log(age);
}

getAge()</pre>;`,
                answer: "ReferenceError",
                wrong:  ['21','undefined','TypeError'],
                time: 20
        }
    ],[
        {
            question: `
<pre>function sayHi() {
console.log(name);
console.log(age);
var name = 'Lydia';
let age = 21;
}

sayHi();</pre>`,
            answer: "undefined and ReferenceError",
            wrong: ['Lydia and undefined','Lydia and ReferenceError','ReferenceError and 21'],
            time: 30,
        },{
                question: `
<pre>let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);</pre>`,
                answer: '[{ name: "Lydia" }]',
                wrong:  ['[{}]','null','[null]'],
                time: 60
        },{
                question: `let c =
<pre>{ greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);</pre>`,
                answer: "Hello",
                wrong:  ['undefined','TypeError','ReferenceError'],
                time: 50
        },{
                question: `
<pre>for (let i = 1; i < 5; i++) {
        if (i === 3) continue;
        console.log(i);
        }</pre>`,
                answer: "1 2 4",
                wrong:  ['1 2','1 2 3','1 3 4'],
                time: 40
        },{
                question: `
<pre>var num = 8;
var num = 10;

console.log(num);</pre>`,
                answer: "10",
                wrong:  ['8','SyntaxError','ReferenceError'],
                time:30, 
        }
    ],[
        {
            question: 
`<pre>for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1);
}
        
for (let i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1);
}</pre>`,
            answer: '3 3 3 and 0 1 2',
            wrong:  ['0 1 2 and 0 1 2','0 1 2 and 3 3 3'],
            time: 70,
        },{
                question: "<pre>console.log(typeof typeof 1);</pre>",
                answer: '"string"',
                wrong:  ['"undefined"','"object"','"number"'],
                time: 60,
        },{
                question: 
`<pre> +true;
!'Lydia'; `,
                answer: "<pre>1 and false</pre>",
                wrong:  ['false and false','false and NaN'],
                time: 50,
        },{
                question: "<pre>console.log(3 + 4 + '5');</pre>",
                answer: '"75',
                wrong:  ['"345"','"12"','12'],
                time: 40,
        },{
                question: 
`<pre>The JavaScript global execution context creates 
two things for you: the global object, and the "this" keyword.`,
                answer: "true",
                wrong:  ['false','it depends'],
                time: 30,
        }
    ],[
        {
            question: `let a = 3;
            let b = new Number(3);
            let c = 3;
            
            console.log(a == b);
            console.log(a === b);
            console.log(b === c);`,
            wrong:  ['true false true','false false true','false true true'],
            answer: "true false false",
            time: 70,
        },{
                question: "What are the three phases of event propagation?",
                answer: " Capturing > Target > Bubbling",
                wrong:  ['Target > Capturing > Bubbling','Bubbling > Target > Capturing','Target > Bubbling > Capturing'],
                time: 60,
        },{
                question: "All object have prototypes.",
                answer: "false",
                wrong:  ['true','i dont know'],
                time: 50,
        },{
                question: `function sum(a, b) {
                        return a + b;
                      }
                      
                      sum(1, '2');`,
                answer: "'12'",
                wrong:  ['3','NaN','TypeError'],
                time: 40,
        },{
                question: `
                function getAge(...args) {
                        console.log(typeof args);
                      }
                      
                      getAge(21);`,
                answer: '"object"',
                wrong:  ['"number"','"array"','"NaN"'],
                time: 30,
        }
    ],[
        {
            question: `let greeting;
            greetign = {}; // Typo!
            console.log(greetign);`,
            answer: "{}",
            wrong:  ['ReferenceError: greetign is not defined','undefined'],
            time: 70,
        },{
                question: "one more question",
                answer: "5",
                wrong:  ['6','7','8'],
                time: 60,
        },{
                question: `function sayHi() {
                        return (() => 0)();
                      }
                      
                      console.log(typeof sayHi());`,
                answer: '"number"',
                wrong:  ['"object"','"undefined"','"function"'],
                time: 50,
        },{
                question: `function* generator(i) {
                        yield i;
                        yield i * 2;
                      }
                      
                      const gen = generator(10);
                      
                      console.log(gen.next().value);
                      console.log(gen.next().value);`,
                answer: "10, 20",
                wrong:  ['20, 20','0, 10 and 10, 20','[0, 10], [10, 20]'],
                time: 40,
        },{
                question: "const num = parseInt('7*6', 10);",
                answer: "7",
                wrong:  ['"42"','42','NaN'],
                time: 30,
        }
    ],[
        {
            question: `[...'Lydia'];`,
            answer: '["L", "y", "d", "i", "a"]',
            wrong:  ['[["L", "y", "d", "i", "a"]]','[[], "Lydia"]','["Lydia"]'],
            time: 70,
        },{
                question: `const numbers = [1, 2, 3];
                numbers[10] = 11;
                console.log(numbers);`,
                answer: "[1, 2, 3, 7 x empty, 11]",
                wrong:  ['[1, 2, 3, 7 x null, 11]','SyntaxError','[1, 2, 3, 11]'],
                time: 60,
        },{
                question: "Everything in JavaScript is either a...",
                answer: "primitive or object",
                wrong:  [' number or object','trick question! only objects','function or object'],
                time: 50,
        },{
                question: `String.prototype.giveLydiaPizza = () => {
                        return 'Just give Lydia pizza already!';
                      };
                      
                      const name = 'Lydia';
                      
                      name.giveLydiaPizza();`,
                answer: '"Just give Lydia pizza already!"',
                wrong:  ['TypeError: not a function','SyntaxError',' undefined'],
                time: 40,
        },{
                question: `const a = {};
                const b = { key: 'b' };
                const c = { key: 'c' };
                
                a[b] = 123;
                a[c] = 456;
                
                console.log(a[b]);`,
                answer: "456",
                wrong:  ['123','undefined','ReferenceError'],
                time: 60,
        }
    ],[
        {
            question: `function checkAge(data) {
                if (data === { age: 18 }) {
                  console.log('You are an adult!');
                } else if (data == { age: 18 }) {
                  console.log('You are still an adult.');
                } else {
                  console.log('Hmm.. You don't have an age I guess');
                }
              }
              `,
            answer: "Hmm.. You don't have an age I guess",
            wrong:  ['You are an adult!','You are still an adult.'],
            time: 60,
        },{
                question: "sessionStorage.setItem('cool_secret', 123);",
                answer: "When the user closes the tab.",
                wrong:  [`Forever, the data doesn't get lost.`,' When the user shuts off their computer.','When the user closes the entire browser, not only the tab.'],
                time: 60,
        },{
                question: `[1, 2, 3].map(num => {
                        if (typeof num === 'number') return;
                        return num * 2;
                      });`,
                answer: "[undefined, undefined, undefined]",
                wrong:  ['[]','[null, null, null]','[ 3 x empty ]'],
                time: 60,
        },{
                question: `(() => {
                        let x = (y = 10);
                      })();
                      
                      console.log(typeof x);
                      console.log(typeof y);`,
                answer: '"undefined", "number"',
                wrong:  ['"number", "number"','"object", "number"','"number", "undefined"'],
                time: 60
        },{
                question: `const obj = { 1: 'a', 2: 'b', 3: 'c' };
                const set = new Set([1, 2, 3, 4, 5]);
                
                obj.hasOwnProperty('1');
                obj.hasOwnProperty(1);
                set.has('1');
                set.has(1);`,
                answer: "true true false true",
                wrong:  ['false true false true','false true true true','true true true true'],
                time: 60,
        }
    ],[
        {
            question: `const firstPromise = new Promise((res, rej) => {
                setTimeout(res, 500, 'one');
              });
              
              const secondPromise = new Promise((res, rej) => {
                setTimeout(res, 100, 'two');
              });
              
              Promise.race([firstPromise, secondPromise]).then(res => console.log(res));`,
            answer: ' "two"',
            wrong:  ['"one"','"two" "one"','"one" "two"'],
            time: 70,
        },{
                question: `const { name: myName } = { name: 'Lydia' };
                      console.log(name)`,
                answer: "ReferenceError",
                wrong:  ['"myName','"Lydia"','undefined'],
                time: 60,
        },{
                question: `[[0, 1], [2, 3]].reduce(
                        (acc, cur) => {
                          return acc.concat(cur);
                        },
                        [1, 2],
                      );`,
                answer: "[1, 2, 0, 1, 2, 3]",
                wrong:  ['[0, 1, 2, 3, 1, 2]','[1, 2, 6]','[6, 1, 2]'],
                time: 50,
        },{
                question: `const set = new Set([1, 1, 2, 3, 4]);

                console.log(set);`,
                answer: "{1, 2, 3, 4}",
                wrong:  ['{1, 1, 2, 3, 4}','[1, 2, 3, 4]','[1, 1, 2, 3, 4]'],
                time: 40,
        },{
                question: `(() => {
                        let x, y;
                        try {
                          throw new Error();
                        } catch (x) {
                          (x = 1), (y = 2);
                          console.log(x);
                        }
                        console.log(x);
                        console.log(y);
                      })();`,
                answer: "1 undefined 2",
                wrong:  ['undefined undefined undefined','1 1 2','1 undefined undefined'],
                time: 60
        }
    ]
]

export default questionData;