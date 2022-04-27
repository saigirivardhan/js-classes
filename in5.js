console.log("Sai World");

for(let i = 2 ; i < 100 ; i++){
    console.log(i);
}


// let b = 100 ;
// while(b>95){
//     console.log(b);
//     b--;
// }

// for(let c = 1 ; c <= 20 ; c++){
//     console.log(2*c);
// }
 
// let b = 1;
// while(b<=20){
//       console.log(2*b);
//         b++;
//     }

for(let c = 2 ; c <= 10 ; c=c+2){
    console.log(c);
}

let   d = 3;
do {
    console.log(d);
    d=d+3;
} while ( d <= 30 );

// for in - it is use to fetch the value of index of a array
let web = ["html","css","JS","React"];
for (let a in web){
    console.log(a );
   
}
console.log(web  + ",node.js")


// for of - it is use to fetch the values of the array
for (let a of web){
    console.log(a );
   
}

// for each loop - it is very important......
web.forEach((values,index)=>{//the first parameter always it take the value of the array only not the index of the array
    console.log(index)
})


