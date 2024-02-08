function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 uzd. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array = [];

for (let i = 0; i < 30; i++) {
    let numbers = rand(5, 25);
    array.push(numbers);
}

console.log(array);

// 2a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let kiekis = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) 
    kiekis++
    
}
 console.log(kiekis);

//  su funkcija

const array1 = array.filter((reiksme) => reiksme > 10); 
console.log (array1.length);

// 2b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;\

let maxvalue = 0;
let maxindex = 0;
// maxindexarrayy = []

for (let i = 0; i < array.length; i++) {
    if(array[i] > maxvalue) {
        maxvalue = array[i]
        maxindex = i
    }
} 
console.log(`max value ${maxvalue}`)
console.log(`max index ${maxindex}`)

// for(let i = 0; i <array.length; i++) {
//     if(maxvalue === array[i]) {
//         maxindexarrayy.push(i)
//     }
// }


const maxindexarray = array.map((value, maxindex) => {
    if (maxvalue === value) return maxindex})
console.log(`max index array ${maxindexarray}`)


// 2c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let sum = 0

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        sum+= array[i]
    }
}
console.log(`suma ${sum}`)

sum = 0;

array.forEach((reiksme, indeksas) => indeksas % 2 === 0 ? sum += reiksme : false);

console.log(`suma ${sum}`)

// 2d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const New = [];

for(i = 0; i < array.length; i++) {
    New.push(array[i] - i)
}
console.log(New);

const NewArray = array.map((value, index) => value - index)
console.log(NewArray);

// 2e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
const ArrayArray = [];

for (i = 0; i < 10; i++) {
    let numb = rand(5, 25);
    array.push(numb)
}

console.log(array)

// // 2f uzd. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

const lyginis = [];
const nelyginis = [];

for(let i = 0; i < array.length; i++) {
    if( i % 2 === 0) {
        // console.log('lyginiai', i)
        lyginis.push(array[i])
    } else {
        // console.log('nelyginiai', i)
        nelyginis.push(array[i])
    }
} 

console.log(`lyginis ${lyginis}`)
console.log(`nelyginis ${nelyginis}`)

// 

array.forEach((value, index) => index %2 === 0  ? lyginis.push(value) : nelyginis.push(value))
// 2g

for(let i = 0; i < array.length; i++) {
    if(array[i] > 15 && i % 2 === 0 ) {
        array[i] = 0
    }
}
console.log(`lyginiai ${array}`)

// 

const NewNewNew = array.map((value, index) => {
 if (value > 15 && index % 2 === 0) {
   return 0;
 } else {
    return value
 }
})

console.log(NewNewNew)

// 
const test = array.map((reiksme, index) => index % 2 === 0 && reiksme > 15 ?  0 : reiksme)
console.log(test)


// 2h. Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;
let firstindex = 0;
for( let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        firstindex = i
        break;
    }
}
console.log (firstindex)

// 

const indexno1 = array.findIndex(index => index > 10)
console.log (indexno1)

// 2i uzd. Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

const news = [];

for(let i = 0; i < array.length; i++) {
    if(i % 2 !== 0) {
        news.push(array[i])
    }
}

console.log(news) 
console.log(array)

// 
// const NEEWS = 
const NEWS = (index) => index % 2 === 0 
console.log(NEWS(14))
const aaa = array.map((value, index) => index % 2 !== 0 ? value : false)
console.log(aaa)

// 3. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

const first_array = [];

for(let i = 0; first_array.length < 100; i++) {
    let numb = rand(100, 999);
    if (!first_array.includes(numb)) 
    first_array.push(numb)
}
console.log(`first array ${first_array}`);

const second_array = [];

for(let i = 0; second_array.length < 100; i ++) {
    let numb = rand(100, 999)

    if(!second_array.includes(numb))
    second_array.push(numb)
}
console.log(`second array ${second_array}`);

// 
