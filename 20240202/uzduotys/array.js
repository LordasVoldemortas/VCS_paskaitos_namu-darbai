function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write(`<h2>========== 1 uzduotis ==========</h2>`);
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.


const array1 = []

for (let i = 0; i < 30; i++) {
    let number = rand(5, 25);
    array1.push(number);
}
console.log(array1);


console.log(`<h2>========== 2 uzduotis ==========</h2>`);
console.log(`<h5>========== a ==========</h5>`);
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let sum = 0;

for (let i = 0; i < array1.length; i++) {
    if(array1[i] > 10 ) {
        sum++
    }
}

console.log(sum);

console.log(`<h5>========== b ==========</h5>`);
// Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
let max1 = "";
let maxIndex1 = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > max1) {
        max1 = array1[i];
        maxIndex1 = [i];
    } else if (array1[i] === max1) {
        maxIndex1.push(i);
    }
}
console.log("Didžiausia reikšmė: ", max1);
console.log("Jos indeksas (-ai): ", maxIndex1);

console.log(`<h5>========== c ==========</h5>`);
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

sum = 0
for (let i = 0; i < array1.length; i++) {
    if (i % 2 === 0) {
       sum += array1[i];
    } 
}
console.log(`skaicius ${sum} `)

console.log(`<h5>========== d ==========</h5>`);
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const array2 = []
number = 0
for (let i = 0; i < array1.length; i++) {
    let newvalue = array1[i] - i;
    array2.push(newvalue);
   
}
 console.log(`skaicius ${array2} `)

console.log(`<h5>========== e ==========</h5>`);
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;


console.log(`<h5>========== f ==========</h5>`);
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;


console.log(`<h5>========== g ==========</h5>`);
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;


console.log(`========== h ==========`);
// Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;


document.write(`<========== i ==========`);
// Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

console.log(`========== 3 uzduotis ==========`);



console.log(`========== 7 uzduotis ==========`);
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

let randAbc = [];
const raides = ["A", "B", "C", "D"];

let kiekisA = 0;
let kiekisB = 0;
let kiekisC = 0;
let kiekisD = 0;

for (let i = 0; i < 200; i++) {
    randAbc.push(raides[rand(0, raides.length - 1)])
    if (randAbc[i] === "A") {
        kiekisA++;
    }
    if (randAbc[i] === "B") {
        kiekisB++;
    }
    if (randAbc[i] === "C") {
        kiekisC++;
    }
    if (randAbc[i] === "D") {
        kiekisD++;
    }
}
console.log(`A: ${kiekisA}, B: ${kiekisB}, C: ${kiekisC}, D: ${kiekisD}`);

console.log(`========== 8 uzduotis ==========`);
// Išrūšiuokite 7 uždavinio masyvą pagal abecėlę.

const filtruotas = randAbc.sort();
console.log(filtruotas);

console.log(`========== 9 uzduotis ==========`);
// Sugeneruokite 3 masyvus pagal 7 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// Pvz.
// [‘AAA’, ‘BBB’, ‘CCC’, ‘ACC’] = Viena unikali reikšmė “ACC”
// [‘ACA’, ‘ABA’, ‘ACA’, ‘ADA’] = Dvi unikalios kombinacijos “ABA” ir “ADA”

const arrayFirst = ["A", "B", "C", "D"];
  
const newArrayss = [];
const newArrayDu = [];
const newArrayTrys = [];

for(let i = 0; i < 200; i++){
   
    newArrayss.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
    newArrayDu.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
    newArrayTrys.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
} 

const raidziuMasyvas = [];
for(let i = 0; i < 200; i++) {
    raidziuMasyvas.push(newArrayss[i] + newArrayDu[i] +  newArrayTrys[i]);
}

console.log(raidziuMasyvas);

// Apdorojimas

const tikUnikaliosReiksmes = [];

for(let i = 0; i < raidziuMasyvas.length; i++) {
    if(raidziuMasyvas[i] === 'AAA' || raidziuMasyvas[i] ===  'BBB' || raidziuMasyvas[i] === 'CCC' || raidziuMasyvas[i] === 'DDD')
        continue;

    tikUnikaliosReiksmes.push(raidziuMasyvas[i]);
}

// for(let i = 0; i )

console.log(tikUnikaliosReiksmes);

