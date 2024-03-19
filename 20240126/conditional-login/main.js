console.log('veikia')
// LOGINIAI OPERATORIAI palyginimai
console.log('-------LOGINIAI OPERATORIAI-------')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// issaukiant funkcija gali buti perduodami argumentai (arguments)
let pirmasSkaicius = rand(0, 50);
let antrasSkaicius = rand(0, 50);

console.log(pirmasSkaicius, antrasSkaicius)

if (pirmasSkaicius == antrasSkaicius) {
    console.log('Skaiciai yra lygus netikrinant duomens tipo');
}

if (pirmasSkaicius === antrasSkaicius) {
    console.log('Skaiciai yra lygus tikrinant duomens tipa');
}

if (pirmasSkaicius != antrasSkaicius) {
    console.log('Pirmas skaicius nelygus antram netikrinant duomens tipo');
}

if (pirmasSkaicius !== antrasSkaicius) {
    console.log('Pirmas skaicius nelygus antram tikrinant duomens tipa');
}

if (pirmasSkaicius < antrasSkaicius) {
    console.log('Pirmas skaicius yra mazesnis uz antraji');
}

if (pirmasSkaicius <= antrasSkaicius) {
    console.log('Pirmas skaicius yra mazesnis arba lygus antrajam');
}

if (pirmasSkaicius > antrasSkaicius) {
    console.log('Pirmas skaicius yra didesnis uz antraji');
}

if (pirmasSkaicius >= antrasSkaicius) {
    console.log('Pirmas skaicius yra didesnis arba lygus antrajam');
}

// stringu palyginimai
console.log('-------STRINGU PALYGINIMAI-------')

let pirmojiRaide = 'Alpes';
let antrojiRaide = 'Banglentes';

if (antrojiRaide > pirmojiRaide) {
    console.log('B yra auksciau nei B');
}

// kondiciju palyginimai
console.log('-------KONDICIJU PALYGINIMAI-------')


// patikrinkite ar pirmas skaicius yra didesnis nei 25 ir mazesnis nei 40.
console.log(`gauta reiksme: ${pirmasSkaicius}`)
if (pirmasSkaicius > 25) {
    if (pirmasSkaicius < 40) {
        console.log('Pirmas skaicius yra didesnis nei 25 ir mazesnis nei 40')
    }
}
console.log('------AND OPERATORIUS------')

// && - and (ir) --  sujungimo operatorius skirtas sujungti dviem kondicijoms, rezultatai gauti turi buti teisingos (true)

if (pirmasSkaicius > 25 && pirmasSkaicius < 40) {
    console.log('Pirmas skaicius yra didesnis nei 25 ir mazesnis nei 40')
}

//  patikrinkite ar pirmas skaicius yra didesnis nei 10, mazesnis nei 35, nelygus 16 ir 18.

if(pirmasSkaicius > 10 && 
    pirmasSkaicius < 35 && 
    pirmasSkaicius !== 16 && 
    pirmasSkaicius !== 18
) {
        console.log('visos keturios salygos yra teisingos')
}

//  || - OR/arba operatorius kuriuo tikrinama ar BENT VIENA KONDICIJA YRA TEISINGA
// patikrinkite ar pirmasSkaicius yra didesnis nei 25 arba antrasSkaicius yra mazesnis nei 10

console.log('------OR OPERATORIUS------')

if(pirmasSkaicius > 25 || antrasSkaicius < 10) {
    console.log('pirmas skaicius yra didesnis nei 25 arba antras skaicius yra mazesnis nei 10')
}

console.log('------APIMTIS (scopes)------')
//  Global scope (globali apimti)
let rezultatas = '';

if(pirmasSkaicius > 10) {
    // block scope (bloko apimtis)
    rezultatas = 'kondiciju pabaiga';
}

// dar kruva kodo
//  ...
//  ...
//  ...

//  norime atvaizduoti kintamaji
console.log(rezultatas);

console.log('------TERNARY OPERATORIUS------')

let ternaryOperatorius = pirmasSkaicius > 10 ? 'pirmas skaicius didesnis nei 10' : false;

console.log(ternaryOperatorius);


console.log('------VIENOS EILUTES VEIKSMO KONDICIJA------')

if(antrasSkaicius > 25) 
    console.log('antras skaicius didesnis nei 25');
