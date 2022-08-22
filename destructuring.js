//Obj Destructuring 1
console.log(numPlanets)// 8
console.log(yearNeptuneDiscovered)//1846

//Obj Destructuring 2
console.log(discoveryYears)// {yearNeptuneDiscovered:1846, yearMarsDiscovered: 1659}

//Obj Destructuring 3
"Your name is Alejandro and you like purple"
"Your name is Melissa and you like green"
"Your name is undefinied and you like green"

//Array Destructuring 1
console.log(first)//"Maya"
console.log(second)//"Marisa"
console.log(third)//"Chi"

//Array Destructuring 2
console.log(raindrops)// "Raindrops on roses"
console.log(whiskers)// "whiskers on kittens"
console.log(aFewOfMyFavoriteThings)// ["Bright cooper kettles", "warm woolen mittens", "Brown paper packages tied up with a string"]

//Array Destructuring 3
console.log(numbers)// [10, 30, 20]

//ES5 Assigning Variables to Object Properties/ Object Destructuring
const {a,b}= obj.numbers

//Array Swap/ One-line Array Swap with Destructuring
[arr[0], arr[1]]= [arr[1], arr[0]]

//raceResults

const raceResults = ([first, second, third, ...rest]) => ({
    first, second, third, rest})