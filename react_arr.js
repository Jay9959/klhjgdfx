//Push

let Name = ["Ajay", "Vijay"]
Name.push("Jay");
console.log(Name);

//Pop

let fruits = ["Banana", "Blueberry"]
fruits.pop()
console.log(fruits)

//Shift

let num = [95, 65, 87]
num.shift()
console.log(num)

//Unshift

let number = [55, 66, 77]
number.unshift(44)
console.log(number)

//Splice

let names = ["Ajay", "Vijay", "Jay"]
names.splice(2, 2, "Jai")
console.log(names)

//Map

let numbers = [5, 4, 3, 2, 1]
let squa = numbers.map(num => num * num)
console.log(squa)

//Fliter

let Numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let evennumber = Numbers.filter(num => num % 2 === 0)
console.log(evennumber)

//Sort

let inline = [6,3,1,4,2,5]
inline.sort()
console.log(inline)

//Concat

let arr = [99,33]
let arr1 = [66,55]
let merged = arr.concat(arr1)
console.log(merged)


//Reverse

let reverse = [6,5,4,3,2,1]
reverse.reverse()
console.log(reverse)


//Reduce

let reduce = [6478,6755,8317]
let sum = reduce.reduce((total, ele) => total += ele, 10)
console.log(["Sum All =>"]  [sum])

//Includes

let city = ["Delhi", "Hyderabad", "Kolkata"]
console.log([city.includes("Ahmadabad")])
console.log([city.includes("Hyderabad")])