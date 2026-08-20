const arr = [1, 2, 3, 4, 5]
 
newAr = arr.map((sum) => sum+1)
newArr = arr.map((multiply) => multiply*2)

setTimeout(() => {
console.log(newArr)
}, 3000)


console.log(newAr)
