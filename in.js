// operators
 console.log("sai working")

//arithmetic operators : +,-,*,/,%
 //modulus - It gives us the remainder

console.log(2+3);
console.log(7-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);//2 is remainder



//comparsion  opeartors : <,>,<=,>=,==,=== ,!=

console.log(2<3);
console.log(2>3);
console.log(2<=3);
console.log(9>=3);
console.log(9 == 3);
console.log(3 == "3");
console.log(3 === "3");
console.log("3" === "3");
console.log(2!==2);


//logical operators : || , && , ! 
//or
console.log(2||3);//2
console.log(0||3);//3
console.log(0||0);//0

//and
console.log(9 && 3);//3
console.log(0 && 3);//0
console.log(0 && 0); //0

//not
console.log(!0);//true
console.log(!1);//false
console.log(!2);//false


//increment,decrement operators
let a = 10;
a++; // a= a+1
console.log(a);//11
a--;
console.log(a);//10

console.log(a++);//10//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line

console.log(a);//11

console.log(a--);//11//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
console.log(a);//10

console.log(++a);//11// first increment and then print the value .
console.log(a);//

// bitwise operators : 
console.log(9|3);//11
console.log(9&3);//1
console.log(9^3);//10
console.log(9<<3);//72
console.log(9>>3);//1

//ternary operators
// condition ? statement 1 : statement 2 ;

let x = 5;
let y = 2;
x > y ? x++ : x-- ;
console.log(x);

// if else blocks
// if else if and else block
// switch

// if a certain condition written inside the parenthesis of if block is true then we enter inside the body of if 
// if can be used all alone but else is used with if blocks only,not alone
// only if the block condition is true then it will enter inside the if block, otherwise it will enter in to else block

let sai = 8;
// if(sai>100){
//     console.log(sai);
// }
// else{
//     console.log(++sai);
// }
  


if(sai>100){
    console.log(sai);
}
else if(sai==8){
    console.log(--sai);
}
else{
    console.log(++sai);
}
  
let value =  1;
switch (value) {
    case 1:
        console.log(++value);
        break;
        case 2:
            console.log(--value);
            // console.log("great")
            break;
            case 3:
            console.log(--value);
            // console.log("great is ")
            break;
    default:
        console.log(value++);
        console.log(value);
        break;
}
  










