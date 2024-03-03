// var time = new Date
// console.log(time.getFullYear())
// console.log("-".repeat(50))

// let arr1 = ["red",3,{"t":3}]
// console.log(arr1)

// let arrEmpty = null
// console.log(arrEmpty)

// map 與 filter

// let number = []
// for (i=0;i<30;i++) {
//     number.push(i)
// }
// let arr = ["apple","banana","velocity"]
// console.log(arr.length)

// let map1 = number.map(n => n ** 2 )
// let map2 = map1.map(n => n * 2 -2 )
// let filter1 = map1.filter(n => n > 50)
// let filter2 = map1.filter(n => n % 2 === 0 )
// let arr = number.map(n => n ** 2).filter(n => n % 2 === 0).map(n => n ** 0.5)

// console.log(map1)
// console.log(map2)
// console.log(filter1)
// console.log(filter2)
// console.log(arr)

// Function

let number = []
let number2 = []
function add(a,b) {
    return a+b
}

let pow = (a,b) => {
    return a**b
}
for (i=2;i<5;i++) {
    for(j=1;j<5;j++) {
        number.push(pow(i,j))
        number2.push(add(i,j))
    }
}
console.log(number)
console.log(number2)

// var 是 function scope (整個function都看得到)
// let 是 block scope(只能給同一級別與以下的看到)
// const 是 block scope(與let相同，只是數字不能改)