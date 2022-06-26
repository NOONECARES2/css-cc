//1 Number
//const num=42  // integer
//const float=42.42  //float
//const pow=10e3

//console.log('Max_Safe_Integer',Number.MAX_SAFE_INTEGER)
//console.log('Math.pow 53',Math.pow(2,53)-1)
//console.log('Min_Safe_Integer',Number.MIN_SAFE_INTEGER)
//console.log('Max_value',Number.MAX_VALUE)
//console.log('Min_value',Number.MIN_VALUE)
//console.log('POSITIVE_INFINITY',Number.POSITIVE_INFINITY)
//console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
//console.log('1/0',2/0)
//console.log(Number.NaN)// not a number
//console.log(typeof NaN)
//const weird=2/undefined
//console.log(Number.isNaN(weird))
//console.log(Number.isNaN(42))
//console.log(Number.isFinite(Infinity))
//console.log(Number.isFinite(42))

//const stringInt='40'

//const stringFloat='40.42'
//console.log(Number.parseInt(stringInt)+2)
//console.log(parseInt(stringInt)+2)
//console.log(Number(stringInt)+2)
//console.log(+stringInt+2)

//console.log(parseFloat(stringFloat)+2)
//console.log(+stringFloat+2)

//console.log(0.4+0.2) //0.6
//console.log((4/10)+(2/10))
//console.log(+(0.4+0.2).toFixed(4))
//console.log(parseFloat((0.4+0.2).toFixed(4)))


//2 BigInt
//console.log( 90071992547409919999999999n - 9007199254740991999999999n)
//console.log(-90071992547409919999999999n)
//console.log(90071992547409919999999999.123123124n)//error

//console.log(10n -4) //error
//console.log(parseInt(10n)-4)
//console.log(10n-BigInt(4))
//console.log(5n/2n)//2n  

//3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(5,3))
// console.log(Math.abs(-42))
// console.log(Math.max(25,1,5,7,4))
// console.log(Math.min(25,1,5,7,4))
// console.log(Math.floor(2.7))
// console.log(Math.ceil(2.7))
// console.log(Math.round(2.7))
// console.log(Math.trunc(2.7))
// console.log(Math.random())

//4 Example
// function getRandomBetween(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }
// console.log(getRandomBetween(10,42))