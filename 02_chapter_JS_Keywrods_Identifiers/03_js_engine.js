let a = 10;
console.log(a);

// Hot Code
 for (let a= 0; a < 15; a++) {
    console.log(a);
    badCodeFn();
}

function badCodeFn() {
    console.log("Hello");
}