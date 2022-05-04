// console.log("sai working");

// // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// const addition = (parameter1,parameter2 ) => {  //Arrow fuction
//     console.log("Inside multiply function");
// }
// addition(arg1,arg2);


// const sub = function (parameter1,parameter2 ) {//fuction expression
//     console.log("Inside sub function");
// }
// sub(arg1,arg2);


function view (){
    console.log("im doing a course")
    let a = 3;
    let b = 9 ;
    let result = a * b;
    console.log(result);
}
view();

function div(n1,n2){
    let result = n1 / n2 ;
    console.log(result);
}
div(100,5);

function multiply(n1,n2){
    let result = n1 * n2 ;
    return result;
}
// let giri = multiply(100,5);
// console.log(giri)
console.log(multiply(100,9))

const vardhan = (n1,n2) =>{
    let result = n1 % n2 ;
    return result ;
}
console.log(vardhan(90,7))

const cmr = function(n1,n2) {
    let result = n1 - n2 ;
    return result ;
}
console.log(cmr(10,4))

function one(){
    let i = 4 ;
    console.log(i)
    two();
    function two (){
        console.log(i);
    }
}
one();

// let f=3;
// var g = 9;
// const y =5 ;
// console.log(f,g,y)
{
    let f=3;
var g = 9;
const y =5 ;
    console.log(f,g,y)
}
console.log(g)

//block scoping and shadowing
let y = 2;//2
const x = 2;//2
var z = 2;//2
console.log(x,y,z);//222
{
    let y = 3;
    const x = 3;
    var z = 3;
    console.log(x,y,z); //333
}
console.log(x,y,z); //223


