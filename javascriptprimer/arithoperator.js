function op(a, b) {
    console.log("sum=" + (a + b));
    console.log("diff=" + (a - b));
    console.log("mul=" + (a * b));
    console.log("remainder=" + (a % b));
    
    // Log before increment/decrement
    console.log("original a=" + a);
    console.log("original b=" + b);

    console.log("increment=" + (++a));
    console.log("decrement=" + (--b));

    console.log("exponent=" + (a ** b));
    console.log(a === b, a == b, a > b, a < b, a >= b, a <= b);
    console.log('true'&&'true');
    console.log('true'&&(10<=20));
    console.log(a<18?"minor":"adult");

}

op(2, 5);
// var age=18;
// console.log(age<18?"minor":"adult");


