
//make unique array of objects [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }] -> [{ a:1, b:2 }, { a:2, c:3 }]

const objectsArray = [{ a: 1, b: 2 }, { a: 2, c: 3 }, { a: 1, b: 2 }]
const uniqueObjects = [
  ...new Set(objectsArray.map((o) => JSON.stringify(o))),
].map((string) => JSON.parse(string))
console.log(`${uniqueObjects.length} objects`)
// Output: 2 objects
console.log(...uniqueObjects)

//Get through array without any for/while, map, forEach, reduce, etc. functions. 
//You can only use getting element of an array by it's index and getting array's length, self - made functions.

const arr1 = [1, 'abc', 2, 'def', 3, 'ghi'];
let move = 0;
function throughArr(){
    if(move < arr1.length){
        console.log(arr1[move]);
        move++
        throughArr();
    }
}
throughArr()
        
//Find letters in ukranian words that are written the same as English ones. 'Дерево' -> ['e', 'p', 'o']

const task = "Дерево";
let arrOfLetters = ["а", "с", "е", "р", "і", "о", "х", "у", "А", "В", "С", "Н", "І", "К", "М", "О", "Р", "Т", "Х"];
let matchOfLetters = [];
for (let search = 0; search < task.length; search++) {
  if (arrOfLetters.includes(task[search])) matchOfLetters.push(task[search]);
}
console.log(matchOfLetters);