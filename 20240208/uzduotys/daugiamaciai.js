function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1 uzd. Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

const array = [];

for (let i = 0; i < 10; i++) {
    array[i] = [];

    for (let x = 0; x < 5; x++) {
        array[i][x] = rand(5, 25)
    }
}

console.log(array);

// 2a uzd. Suskaičiuokite kiek masyve yra elementų didesnių už 10;

let sum = 0;

for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 5; x++) {
        if (array[i][x] > 10)
            sum++
    }
}


console.log(sum)

// 2b uzd. Raskite didžiausio elemento reikšmę;

let max = 0;

for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 5; x++) {
        if (array[x][i] > max)
            max = array[x][i]
    }
}
console.log(max)

// 2c uzd. Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.);

let suma = 0;
let sumos = [0, 0, 0, 0, 0];

for (let i = 0; i < array.length; i++) {

    for (let x = 0; x < array[i].length; x++) {

        sumos[x] += array[i][x]

    }

}

console.log('suma', sumos)


// 2d uzd. Visus antro lygio masyvus “pailginkite” iki 7 elementų;


for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < 2; x++) {
        numbers = rand(0, 1)
        array[i].push(numbers);

    }
}
console.log(array)

// 2e uzd. Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai ;

const rowsums = []
for (let i = 0; i < array.length; i++) {
    let sum = 0

    for (let x = 0; x < array[x].length; x++) {
        sum += array[i][x];

    }
    rowsums.push(sum)

}

console.log(rowsums)


// 3 uzd. Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).

const raidziumasyvas = [];
const letters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let y = 0; y < 10; y++) {
    raidziumasyvas[y] = []
    const ilgis = rand(2, 20)
    for (let x = 0; x < ilgis; x++) {
        raidziumasyvas[y][x] = letters[rand(0, letters.length-1)]
    }
}
console.log(...raidziumasyvas)

for (let y = 0; y < raidziumasyvas.length; y++) {
    raidziumasyvas[y].sort()
}

console.log(raidziumasyvas)

// 4 uzd. Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.

raidziumasyvas.sort((a, b) => a.length - b.length);
raidziumasyvas.sort((a, b) => {
    if(a.includes('K'))
        return -1;

    return 0;
})

console.log(raidziumasyvas)
    // console.log(a.length, b.length);
   
    // if(a.length > b.length) {
    //     return 1
    // }
    // if(a.length < b.length) {
    //     return -1
    // }
    // abu lygus
    // return 0;


//  

// const temparray = [15, 4, 8, 400, 1500];

// temparray.sort(function(pirma, antra) {
//     return 1; //teigiama reiksme
//     return 0; //nieko nekeicia, paliekam
//     return -1; //neigiama reiksme;

//     // console.log(pirma, antra)
// })

// 5 uzd. Sukurkite masyvą iš 10 elementų. Masyvo reikšmes užpildykite pagal taisyklę: generuokite skaičių nuo 0 iki 5. Ir sukurkite tokio ilgio masyvą. Jeigu reikšmė yra 0 masyvo nekurkite. Antro lygio masyvo reikšmes užpildykite atsitiktiniais skaičiais nuo 0 iki 10. Ten kur masyvo nekūrėte reikšmę nuo 0 iki 10 įrašykite tiesiogiai.
const arry = [];

for(let i = 0; i< 10; i++){
    let numbers = rand(0, 5)
    if (numbers === 0) {
        arry[i] = numbers
    } else {
        arry[i] = []
        for (let x = 0; x < numbers; x++) {
            numbers = rand(0, 10)
            arry[i].push(numbers)
        }
    }
}

console.log(arry)


// 6uzd. Paskaičiuokite 5 uždavinio masyvo visų reikšmių sumą ir išrūšiuokite masyvą taip, kad pirmiausiai eitų mažiausios masyvo reikšmės arba jeigu reikšmė yra masyvas, to masyvo reikšmių sumos.
const arrayone = [];


for (let i = 0; i < 10; i++) {
    let numbers = rand(0, 5);
    if (numbers === 0) {
        arrayone[i] = numbers;
    } else {
        arrayone[i] = [];
        let sum = 0;
        for (let x = 0; x < numbers; x++) {
            let randomNumber = rand(0, 10);
            arrayone[i].push(randomNumber);
            sum += randomNumber;
        }
        arrayone[i].sum = sum; // Sukuriame savybę sum, kuri saugos šio masyvo reikšmių sumą
    }
}
console.log(arrayone)

let totalSum = 0



// 7 uzd. issifruokite kas parasyta siame stringe "33!115!109!101!105!115!105!118!32!111!105!108!97!103!116!105!97!118!97!115!32!115!117!97!382!97!114!71!";

const encryptedMessage = "33!115!109!101!105!115!105!118!32!111!105!108!97!103!116!105!97!118!97!115!32!115!117!97!382!97!114!71!";
const decryptedMessage = encryptedMessage.split("!").map(char => String.fromCharCode(parseInt(char))).join("");
console.log(decryptedMessage);