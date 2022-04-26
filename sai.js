//not defined,undefined,null

// console.log(myAge);//output is not defined
 //any varaiable which we try to access but not declared will throw us a reference error:not defined

//undefined - if a varaiable is declared but not assigned any value yet but if we try to access that
// variable then we will get the eror as undefined//
 let my;
 console.log(my)
 
//null - its a default value assigned by a user to the variable as long as the variable
// has not been assigned its original  /updated


let sai = null;
console.log(sai)
 sai = 45;
 console.log(sai)

//in global scope generally not to able  access block scope variable as long as theres let/const keywords, so it will give us an error of references
//error: variable of not defined , but for var we can access them even on global scope space.

 {
     var giri = 2;
     let right = 34;
 }
 console.log(left)
 var left;
 left = 23;
 console.log(left)



// hositing - Its only supported with that of var keywords and with the functions,
// let and const keywords cant be supported

//let keyword variables cannot be accessed before declaration /initialization
// const keyword variables cannot be accessed before declaration /initialization




// var keyword variables are hoisted.



//note - for var keyword variables, if we try to access them before assiging values to the will give us  undefined

//but the moment we declare  a vaule to it ,it will give us the assigned value.


//functions are hoisted because of which we can call the function before declaring the function
 
add(3,2);
 
function add(a,b){
    let result = a+b;
    console.log(result);
}










