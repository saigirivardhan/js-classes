console.log("sai")
// arrays
 
//method 1: create the array and assign the values
let w1 = ["sai","true","23"]
console.log(w1)

// method 2: create a empty array and assign the values through index
let w2 = [ ]
w2[0] = "Jai"
w2[1] = "Shree"
w2[2] = "Krishna"
w2[5] = "Sai"
w2[8] = "Sai"
w2[10] = "Sai"
console.log(w2)

// method 3: create a array by using array constructor
let w3 = new Array("1","Radha","Krishna","sai")
console.log(w3)

let w4 = ["sai","21years","CMR college","187R1A0450","Full stack developer","9177948835"]
console.log(w4)
w4.push(" Radhye Krishna")
w4.push(1)//push
console.log(w4)
w4.push(2)
w4.push(2)
w4.push(2)
console.log(w4)
w4.pop();
w4.pop();
w4.pop();
console.log(w4)

let w5 = ["sai","true","23"]
w5.shift();
w5.unshift("sai");
w5.unshift("krishna");
w5.unshift(1);

console.log(w5)
console.log(w5.length)

let s1 =[1,2,3,3,4,5]
let s2 =[1,2,5,10,4,5,10]
console.log(s1.indexOf(4))
console.log(s2.indexOf(5))
console.log(s2.lastIndexOf(10))
console.log(s2.lastIndexOf(8))
console.log(s1.join(" % "))
console.log(s1.concat(s2))

console.log(s2.reverse())

let s3 =[10,7,8,3,1,3]
console.log(s3.sort())
let s4 =["Krishna","sai","Radha"]
console.log(s4.sort().reverse())


let s5 =[10,7,8,3,1,3,9,8]
// s5.splice(1,3,66.4,5,4,2)
console.log(s5.slice(1,5))



