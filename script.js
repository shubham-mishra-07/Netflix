console.log("this is a strings tutorial")
let a = "Aman";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

console.log(a.length)/*ye string ki length bata hai*/

 let real_name = "Akash Gupta"
 let friend ="Harshit"
 console.log("His name is " + real_name + " and his friends name is " + friend )
console.log(`His name is ${real_name} and his friends name is ${friend}`)/*esa Template literals kahate hai*/

let b = "Anjali"
console.log(b.toUpperCase())/*ye Word ko Capital mai likhane ke liye use karta hai*/
console.log(b.toLowerCase())/*or ye small letter ke liye*/
console.log(b.length)

console.log(b.slice(1,5))
console.log(b.slice(1))

console.log(b.replace("Anj","111"))

console.log(a.concat( "Akash" ,b,"moni"))
