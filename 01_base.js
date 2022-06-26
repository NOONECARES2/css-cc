//1 Переменные
//variable
//const firstName='Nikita'
//const age = 19
//const isProgrammer=true //boolean
//const _private='private'
//const $='some value'
// const if='mkef'//err
//const witnNum5='5'
//const 5witnNum5='5'//err

//2 Мутирование
//console.log('Имя человека:' + firstName + ', а его возраст:' + age)
//alert('Имя человека:' + firstName + ', а его возраст:' + age)
// const lastName= prompt('Введите фамилию')
 //alert(firstName+' '+lastName)

 //3 Операторы
 //let currentYear=2022
// const birthYear=2002
 //const age=currentYear-birthYear
 //const a= 11
 //const b =12

//let c=32
//c=c+a
//c=c-a
//c=c*a
//c=c/a
//c +a
//c -=a
//c *=a
//c /=a  
 //console.log(a+b)
 //console.log(a-b)
 //console.log(a*b)
 //console.log(a/b)
//console.log(++currentYear)
//console.log(--currentYear)
// console.log(c)

//4 Типы данных

// const isProgrammer=true
// const name='Nikita'
// const age= 19
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

//5 Приоритет операторов
// const fullAge=19
// const birthYear=2002
// const currentYear=2022
// //> < >= <=
// const isFullAge=currentYear-birthYear>=fullAge 
// console.log(isFullAge)

//6 Условные операторы
// const courseStatus='fail' // ready, fail, pending

// if(courseStatus === 'ready') 
// {
// console.log('Курс уже готов и его можно проходить')

// }
//  else if(courseStatus==='pending')
// {
//     console.log('Курс находиться всё ещё  в разработке')
// }else{
//     console.log('Нет ничего с курсом')
// }
// const isReady=true
// if(isReady){
//     console.log('Всё кул')
// }else{
//     console.log('всё не готово')
// }
// isReady ? console.log('Всё кул'): console.log('Все не кул')
// const num1=42//number
// const num2='42'//string
// console.log(num1===num2)

//7 Булевая логика

//8 функции
// function calculateAge(year){
//     return 2022-year
// }
// // const myAge=calculateAge(2002)
// // console.log(calculateAge(2002))

// function logInfoAbout(name,year){
//     const age=calculateAge(year)
//     if (age>0){
//     console.log('Человек по имени' + name +' сейчас имеет возраст ' +  age)
//     }else{
//         console.log('Вы идёте назад в будущее')
//     }
// }
// logInfoAbout(' Никита ',  2002)
// logInfoAbout(' Maks ', 2003)
// logInfoAbout(' Alena ',  2030)

//Массивы 9
//  const cars=['БМВ','Мерседес','Ауди']

// console.log(cars.length)
// console.log(cars[0])

// cars[0]='Порш'
// console.log(cars)
// cars[3]='БМВ'
// console.log(cars)

//10 Циклы
// const cars=['БМВ','Мерседес','Ауди','Порш']
// for(let i=0;i<cars.length;i++){
//     const car=cars[i]
//     console.log(car)

// }
// for (let car of cars){
//     console.log(car)
// }

//11 Объекты
// const person = {
//     firstName:'Nikita',
//     lastName:'Khabuzov',
//     year:2002,
//     lang:['ru','eng','esp'],
//     hasWife:false,
//     greet:function(){
//         console.log('greet avs')
// }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key='lang'
// console.log(person[key])
// person.hasWife=true
// console.log(person)
// person.isProgrammer=true
// person.greet()