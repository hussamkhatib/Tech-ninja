const questionData = [{
 question: `What is the outcome of the two alerts below?
 
 var foo = "Hello";
 (function() {
   var bar = " World";
   alert(foo + bar);
 })();
 alert(foo + bar);`,
 answer: "1",
 wrong:  ['2','3','4']
},{
    question: "one more question",
    answer: "5",
    wrong:  ['6','7','8']
},{
    question: "two question",
    answer: "9",
    wrong:  ['10','11','12']
},{
    question: "three question",
    answer: "9",
    wrong:  ['10','11','12']
}
]

export default questionData;