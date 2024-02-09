function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 uzd. Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

const array = [];

for(let i = 0; i < 10; i++) {
    array[i] = [];

    for(let x = 0; x < 5; x++) {
        array[i][x] = rand(5, 25)
    }
}

console.log(array);

// 2a uzd. Suskaičiuokite kiek masyve yra elementų didesnių už 10;

let sum = 0;

for(let i = 0; i < 10; i++) {
    for(let x = 0; x < 5; x++) {
        if (array[i][x] > 10)
        sum++
    }
}


console.log(sum)

// 2b uzd. Raskite didžiausio elemento reikšmę;

let max = 0;

for(let i = 0; i < 10; i++) {
    for(let x = 0; x < 5; x++) {
        if(array [x][i] > max)
        max = array[x][i]
    }
}
console.log (max)

// 2c uzd. Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.);

let suma = 0;
let sumos = [0, 0, 0, 0, 0];

for(let i = 0; i < array.length; i++) {
    
    for(let x = 0; x < array[i].length; x++) {
       
        sumos[x] += array[i][x]
        
    }

}

console.log ('suma', sumos)


// 2d uzd. Visus antro lygio masyvus “pailginkite” iki 7 elementų;
 

for (let i = 0; i < array.length; i++){ 
    for(let x = 0; x < 2; x++) {
  numbers = rand(0, 1)
    array[i].push(numbers);
    
    }
}
console.log ( array)

// 2e uzd. Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai ;
let sums = 0;
let sumz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const miau = []

for(let i = 0; i < array.length; i++) {
    
    for(let x = 0; x < array[i].length; x++) {
       
        sumz[i] += array[i][x]
        miau.push(sumz)
        
    }

}

console.log ('suma', sumz)
console.log(miau)


// 3 uzd. Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).

// const masyvs = [];

// for(let x = 0; x < 10; x++) {
//     masyvs[x] = [];
//     let randomnr = rand(2, 20)
//     for (let y = 0; y < randomnr; y++) {
//         let randindex = Math.floor(Math.random() * 26);
//         let randlettrs = String.fromCharCode(65 + randindex)
//         masyvs[x].push(randlettrs)
//         masyvs[x].sort

//     }
// }
// console.log(masyvs)
let ar3 = [];
for (let p = 0; p < 10; p++) {
  const arrLength = rand(2, 20);
  const arr = new Array(arrLength);
  for (let a = 0; a < arr.length; a++) {
    arr[a] = String.fromCharCode(rand(65, 90));
  }
  ar3.push(arr.sort());
}

console.log(ar3);

ar3.sort((a, b) => {
  // Sort by length first
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  // If lengths are equal, sort by presence of 'K'
  if (a.includes('K') && !b.includes('K')) {
    return -1;
  } else if (!a.includes('K') && b.includes('K')) {
    return 1;
  }
  // If lengths and presence of 'K' are equal, maintain order
  return 0;
});

console.log(ar3);

// 4 uzd. Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.