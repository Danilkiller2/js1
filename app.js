console.log(`Задание 1`)

let mounth = //prompt(`Введите число от 1 до 12`);

mounths = [`январь`, `февраль`, `март`, `апрель`, `май`, `июнь`, `июль`, `август`, `сентябрь`, `октябрь`, `ноябрь`, `декабрь`]

console.log(mounths[mounth-1]);


console.log(`Задание 2`)
let dostavka = 250;

let tovar1 = [15000, `Процессор`, dostavka];
let tovar2 = [25000, `Видеокарта`, dostavka];
let tovar3 = [5000, `Блок питания`, dostavka];

let sum = tovar1[2]+tovar2[2]+tovar3[2]+tovar1[0]+tovar2[0]+tovar3[0]

console.log(`Общая сумма товара равна ${sum}`);

console.log(`Задание 3`)

let arr = [25, 30, 6, 9, 8]

console.log(`Максимальное число из массива [25, 30, 6, 9, 8] равно ${Math.max(...arr)}`)
console.log(`Максимальное число из массива [25, 30, 6, 9, 8] равно ${Math.min(...arr)}`)

console.log(`Задание 4`)

arr = [
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10)
]
console.log(arr)
console.log(arr.sort())
console.log(arr.sort().reverse())


console.log(`Задание 5`)
arr = ["Hi", "Hello", "Bonjour"];
console.log(arr)
arr.push('Hola')
console.log(arr)

console.log(`Заданиие 6`)
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
console.log(`Массив a = ${a}`)
console.log(`Массив b = ${b}`)
console.log(a.concat(b))

console.log(`Задание 7`)

arr = [1, 2, 3]
console.log(arr)
console.log(arr.reverse())

console.log(`Задание 8`)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes(`Banana`))

console.log(`Задание 9`)
const array =[2, 5, 9];
console.log(array)


let obj = {
    'year': 2024,
    'mounth': '09',
    'day': 25
};
console.log(obj);
obj.hour = 11;
obj.min = '05';
console.log(obj);
let keys = Object.keys(obj);
console.log(keys);
console.log(obj[keys[3]])
 

console.log(`Задание 1`);
 let user1 = {
    name: "John",
    age: 30
 };
 console.log('age' in user1);


console.log(`Задание 2`);

 let users = [{
    name: "John",
    age: 30
 },

 {
    name: "Optimus",
    age: 18
 },
 {
    name: "Kenny",
    age: 36
 }];
 console.log(users[2]);

 console.log(`Задание 3`);
 delete users[1];
 console.log(users);
 
 console.log(`Задание 4`);
 let sort = users.sort((b,c) => b.age - c.age);
 console.log(sort);


 console.log(`Задание 5`);
 const obj2 = {
    id: 5,
    token: 12343423
 };
 const id = obj2[`id`];
 console.log(id);

console.log(`Задание 6`);
const obj1 = {
    id: 5,
    token: 12343423
};
obj1 = {id: userId };
console.log(userId);
 