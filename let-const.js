//const => we can not re-assign and re-declear value of it
//let => we can re-assign and not re-declear value

const name = 'Moon';
//string modde find substring way
//const result = name.includes('en');
const result = name.includes('on');
console.log(result);

const pets = ['rat', 'cat', 'dog'];
const find = pets.includes('dog');
console.log(find);

//slice element kete made new array,,but old array no change
const numbers = [2, 3, 45, 32, 13, 24];
console.log(numbers.slice(2, 4)); //start 2 index end 4 index er age
console.log(numbers);

//splice element delete and new element add
//splice(startIndex, deleteCount(koyta element delete), insertItem, insertItem)
//console.log(numbers.splice(1, 2));
console.log(numbers.splice(1, 2, 34, 20, 30));
console.log(numbers);

console.log(pets.splice(2, 0, 'horse'));//no delete add element
console.log(pets);

//object
//variable er vitor onk gulo property thake aita object
const person ={
    name: 'moon',
    address: 'dinajpur',
    phone: '0976432569'
}

console.log(person.name);
console.log(person['phone']);
const x = 'address';
console.log(person[x]);

//name, address, phone agulo object er key moon, dinajpur value
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);

for(let i =0; i<keys.length; i++){
    //const key = keys[i];
    //console.log(person[key]);
    console.log(person[keys[i]]);
}
/*for(let key of keys){
    console.log(person[key]);
}*/

for(let i in person){
    console.log(i);
    //console.log(typeof i, i);
    console.log(person[i]);
}