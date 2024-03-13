function sumOfArray(arr){
    let sum = 0;
    for(let item of arr){
        //sum = sum + item;
        sum += item;
    }
    return sum;
}
const nums = [1, 2, 3, 4, 5]
const total = sumOfArray(nums);
console.log(total);

//odd sum
function sumOfOdds(array){
    let oddAdd = 0;
    for(let item of array){
        if(item%2 == 1){
            oddAdd += item;
        }
    }
    return oddAdd;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add = sumOfOdds(numbers);
console.log(add);

//even
function sumOfEven(array){
    let evenAdd = 0;
    for(let item of array){
        if(item%2 == 0){
            evenAdd += item;
        }
    }
    return evenAdd;
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const adds = sumOfEven(numbers);
console.log(adds);

//amar name Moon, amr bari rajshahi, amr age 23
function information(info){
    const sentence = 'amr name '+info.name+', amr bari '+info.address+', amr age '+info.age;
    return sentence;
}

const myInfo ={
    name: 'Moon',
    address: 'Dinajpur',
    age: 23
}
console.log(information(myInfo));

//factorial
//0! = 1
// 1! = 1
//5! = 5 * 4 * 3 * 2 * 1 = 120

//vowel count
function vowelCount(v){
    let vowel = 0;
    let consonent = 0;
    let space = 0;
    let vowelArray = [];
    //let consonentArray = [];
    for(let i = 0; i < v.length; i++){
        let char = v[i].toLowerCase();
        if(typeof v !== 'string'){
            return 'Please provide a string';
        }
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            vowel++;
            if(vowelArray.includes(char) == false){
                vowelArray.push(char);
            }
        }
        else if(char !== " "){
            consonent++;
            //consonentArray.push(char);
        }else{
            space++; //jodi space count korte cai
        }
    }
    const obj ={
        voweltotal: vowel,
        consonentTotal: consonent,
        spaceTotal: space,
        vowelArray: vowelArray,
    }
    return obj;
}
const sentence = 'The name of our country is Bangladesh'
console.log(vowelCount(sentence));