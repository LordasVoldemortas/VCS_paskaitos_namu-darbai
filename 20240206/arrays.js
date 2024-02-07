function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 uzd. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array = [];

for (let i = 0; i < 30; i++) {
    let number = rand(5, 25);
    array.push(number);

}
console.log(array);

// 2a uzd.  Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 10)
        sum++
}

// console.log(sum)

// 2b uzd. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let maxreiksme = 0;
let maxindex = 0;

for (let i = 0; i < array.length; i++) {
    // Iteracija
    if (array[i] > maxreiksme) {
        maxreiksme = array[i]
        maxindex = i
    }

}
console.log(`index ${maxindex}`)
console.log(`reiksme ${maxreiksme}`)

// console.log(Math.max(...array));

const newarray = []; 

for(let i = 0; i < array.length; i++) {
    // Reiksmes paemimas (taking value)
    // aray[i]

    // Indekso paėmimas (taking index)
    // i

    if (maxreiksme === array[i]) {
        newarray.push(i)
    }
}
console.log(`new array ${newarray}`);


// 2c uzd. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
sum = 0;

for(let i = 0; i < array.length; i++) {
    if( i % 2 === 0) {
       sum += array[i]
    }
} 
console.log(`lyginiu suma ${sum}`);

// 2d uzd. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const Newarray = [];

for (i = 0; i < array.length; i++) {
    Newarray.push(array[i] - i)
}
console.log(Newarray)

// 2e uzd. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (let i = 0; i < 10; i++) {
    let number = rand(5, 25);
    array.push(number);

} 
console.log (array)

// 2f uzd. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

// const nelyginiai = [18, 5, 6, 23]
// const lyginiai = [17, 12, 11, 13]

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

// 2g uzd. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;


for(let i = 0; i < lyginis.length; i++) {
    if(lyginis[i] > 15) {
        lyginis.splice(i, 1, 0)
        // lyginis[i] = 0;
    }
}
console.log(`pakitimai ${lyginis}`)

// 2h uzd. Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;
// indeksas = i
// reiksme = array[i]

let firstindex = 0; 
for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
         firstindex = i
        break;
    }
}
console.log(firstindex)

// 2i uzd. Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;
const news = [];

for(let i = 0; i < array.length; i++) {
    if(i % 2 !== 0) {
        news.push(array[i])
    }
}
console.log('nauja', news)
console.log ('naujas', array)

// 3 uzd.Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

const first_array = [];

for(let i = 0; first_array.length < 100; i++) {
    //1. first_array = [];
    //2. first_array = [150];
    //3. first_array = [150, 180];
    //4. first_array = [150, 180];

    let numb = rand(100, 999) //180
   
   if (!first_array.includes(numb)) 
    first_array.push(numb)
    // console.log(first_array.includes(numb))

    // for(let x = 0; x < first_array.length; x++) {
    //     console.log(first_array[x])
    // }
}

console.log(`first array ${first_array}`);

const second_array = [];

for(let i = 0; second_array.length < 100; i ++) {
    let numb = rand(100, 999)

    if(!second_array.includes(numb))
    second_array.push(numb)
}
console.log(`second array ${second_array}`);

// 4 uzd. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

const third_array = [];

for(let i = 0; i < first_array.length; i++) {
    if(!second_array.includes(first_array[i]))
    third_array.push(first_array[i])
}
console.log(`third array ${third_array}`)

// 5 uzd. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 3 uždavinio masyvuose.

const four_array = [];

for (let i = 0; i < first_array.length; i++) {
    if(second_array.includes(first_array[i]))
    four_array.push(first_array[i])
}

console.log(`four array ${four_array}`)

// 6 uzd. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

const NewArr = [];
let no1 = rand(5, 25);
let no2 = rand(5, 25);

NewArr.push(no1, no2);
console.log(NewArr)

for( i = 2; i < 10; i++) {
    // console.log(i)
    if (NewNew = NewArr[i - 1] + NewArr[i - 2])
    NewArr.push(NewNew) 
}

console.log(NewArr)

// atras variantas 6uzd.
const unoArray = [rand(5, 25), rand(5, 25)];

for(let i = 2; i < 10; i++) {
    unoArray[i] = unoArray[i - 1] + unoArray[i - 2];
}
console.log(unoArray);

// 7uzd. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

let randABC = [];
const letters = ['A', 'B', 'C', 'D']

let kiekisA = 0;
let kiekisB = 0;
let kiekisC = 0;
let kiekisD = 0;

for (let i = 0; i < 200; i++) {
    randABC.push(letters[rand(0, letters.length - 1)])
    if (randABC[i] === 'A') {
        kiekisA++;
    }
    if (randABC[i] === 'B') {
        kiekisB++;
    }
    if (randABC[i] === 'C') {
        kiekisC++;
    }
    if (randABC[i] === 'D') {
        kiekisD++;
    }
}

console.log(`A: ${kiekisA}, B: ${kiekisB}, C: ${kiekisC}, D: ${kiekisD}`)

// 8uzd. Išrūšiuokite 7 uždavinio masyvą pagal abecėlę.

const filtre = randABC.sort();
console.log(filtre);

// 9uzd. Sugeneruokite 3 masyvus pagal 7 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// Pvz.[‘AAA’, ‘BBB’, ‘CCC’, ‘ACC’] = Viena unikali reikšmė “ACC”
// [‘ACA’, ‘ABA’, ‘ACA’, ‘ADA’] = Dvi unikalios kombinacijos “ABA” ir “ADA”
// [‘A’, ‘D’, ‘B’]
// [‘B’, ‘A’, ‘D’]
// [‘A’, ‘C’, ‘B’]

const arrayFirst = ["A", "B", "C", "D"];
  
const newArrayOne = [];
const newArrayTwo = [];
const newArrayThree = [];

for(let i = 0; i < 200; i++){
   
    newArrayOne.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
    newArrayTwo.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
    newArrayThree.push(arrayFirst[rand(0, arrayFirst.length - 1)]);
} 

const raidziuMasyvas = [];
for(let i = 0; i < 200; i++) {
    raidziuMasyvas.push(newArrayOne[i] + newArrayTwo[i] +  newArrayThree[i]);
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


