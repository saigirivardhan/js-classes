console.log("krishna sai")
// map,filter,reduce
// they are known as one linear function
// map,filter,reduce never modifies the original array
// map,filter,reduce returns/creates a new array.

let s1= [2,12,34,55,67,89]
console.log(s1)
  let s2 = s1.map(sai=>{
   return sai >= 55
})
console.log(s2)

let s3= [2,12,34,55,67,89]
  let s4 = s3.filter(sai=>{
   return sai > 55
})
console.log(s4)
 
let s6= [3,2,3,1]
let s7 = s6.reduce((a,b)=> a*b,1);
console.log(s7)

// strings 
// length  = 16
// index value is from 0 to length-1


// charat
let w1 = "sai girivardhan";
console.log(w1)
console.log(w1.charAt(5));

// endswith
console.log(w1.endsWith("n"));

// includes
let w2 = "jai shree Krishna"
console.log(w2.includes("Krishna"))
console.log(w2.includes("sai"))

// indexof, lastIndexof ,length
console.log(w2.indexOf("h"))
console.log(w2.lastIndexOf("h"))
console.log(w2.length)
console.log(w2)

// replace
console.log(w2.replace("jai shree","Radhey"))

// search
console.log(w2.search("Krishna"))

//substr
console.log(w2.substr(1,4))//firts value is the index position and the second value is the no of characters
//from the index position mentioned in the first value

// substring
console.log(w2.substring(1,17))//first index value is inclusive and last index value is exclusive

// for substring always the lower value is starting index and higher value is ending index;
//irrespective of the position of the values mentioned

let q1 = "Jai Shree krishna @ Radha "
let q2 = q1.split("@")
console.log(q2)

