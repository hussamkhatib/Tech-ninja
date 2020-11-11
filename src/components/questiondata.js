const questionData = [{
 question: `What is the outcome of the two alerts below?
 
 var foo = "Hello";
 (function() {
   var bar = " World";
   alert(foo + bar);
 })();
 alert(foo + bar);`,
 answer: "1",
 options:  ['1','2','3','4']
},{
    question: "one more question",
    answer: "5",
    options:  ['5','6','7','8']
},{
    question: "two question",
    answer: "9",
    options:  ['9','10','11','12']
}
]

export default questionData;