//1.
let a = 100;

console.log(a++ + ++a +a++ + ++a);   //  o/p: 408

console.log(a);  //  o/p: 104


//2.
let b = 37;

console.log(--b + b--);    //  o/p: 72

console.log(b);    //  o/p: 35

//3.
let c = 5; 
let d = c-- - --c; 
console.log(d, c);    //  o/p: 2, 3

//4.
let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);      //  o/p: 3,3