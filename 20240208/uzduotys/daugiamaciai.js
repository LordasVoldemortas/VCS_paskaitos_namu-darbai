function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 uzd. Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

array = [];

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

// let suma = 0;
for(let i = 0; i < 10; i++) {
    array[i] = [];
    for(let x = 0; x < 5; x++) {
        // if (x === 0){
        suma[x] += array[i][x]
        
    // }
    }


}

console.log ('suma', suma)


// 2d uzd. Visus antro lygio masyvus “pailginkite” iki 7 elementų;
 
// for (let i = 0; i < 10; i++) {
//     for(let x = 0; x < 2; x++) {
// //    array[x][i] = (1, 2);
//     array[x].push(1, 2);
//     }
// } 
// console.log (array)

// 2e uzd. Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai ;
// 3 uzd. Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).
// 4 uzd. Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.