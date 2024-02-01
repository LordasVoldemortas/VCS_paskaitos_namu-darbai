console.log("Labas 'saunusis' Pasauli");

let vardas = 'Jonas';

console.log(vardas + ' Pavardenis');

let miestas = 'Vilnius';
let adresas = 'Saltoniskiu g. 19';
let telefonas = '+3705685856';

// console.log('Gauti duomenys: ' + miestas + ' ' + adresas + ' ' + telefonas);

//template literals  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let rezultatas = `gauti duomenys: 
                ${miestas} 
                ${adresas} 
                ${telefonas}
            `;

console.log(rezultatas);

console.log(miestas, adresas, telefonas);

let x = 18;
let y = 25;

rezultatas = x + y;

console.log(rezultatas);

// norint patikrint duomens tipa
console.log(typeof rezultatas);

if(x > y) {
    console.log('X daugiau nei Y')
} 
else if (x === y) {
    console.log('X yra lygu Y')
}
else {
    console.log('Y yra daugiau nei X')
}

//  vienas lygybes zenklas nurodo reiksmes priskyrima, ne tikrinima
if(x = y) {
    console.log(x)
}

x = false;  //Boolean tipo

if(x) {
    console.log('X reiksme yra teigiama');
} else {
    console.log('X reiksme yra neigiama')
}

// ! not operatorius
if(!x) {
    console.log('X reiksme yra neigiama');
} else {
    console.log('X reiksme yra teigiama');
}

x = 16;

// vienas lygybes zenklas pries sauktuka netikrina duomens tipo
// du lygybes zenklai nurodo duomens tipo tikrinima 
if(x != 0) {
    console.log('X nelygu nuliui');
}

// norint isvesti turini i narsykles langa
document.write('<h1>Labas Pasauli</h1>');

// stringu palyginimas
let gamintojas = 'Samsung';
let produktas = 'televizorius';
              // 01234567891011

let ilgis = produktas.length - 1;
console.log(produktas[ilgis])

console.log(produktas.length);
console.log(produktas[0], produktas[1], produktas[2]);
// console.log(produktas[11]);

// Atsitiktinio skaičiaus generavimo funkcija
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Atsitiktinio skaičiaus nuo 0 iki 100 sukūrimas ir priskyrimas prie kintamojo
let a = rand(0, 10); 
let b = rand(0, 10);
if(a > b) {
    document.write('<h3>A yra daugiau negu B</h3>');
} else if(a === b) {
    document.write('<h3>A yra lygu B</h3>')
} else {
    document.write('<h3>B yra daugiau negu A</h3>');
}

