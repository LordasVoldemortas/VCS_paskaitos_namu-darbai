console.log('------------INCLUDES METODAAS------------')
let string = 'Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25.'

// includes metodas grazina true arba false atsakyma ar ieskomas zodis egzistuoja nurodyme
if(string.includes('rand()')) {
    console.log('stringe radome pamineta funkcija rand()')
}

// 'Labas Pasauli'.includes()

console.log('------------AT METODAAS------------')

string = 'Naudokite funkcija rand().'

// at() metodas grazina simboli pagal pateikta pozicija
console.log(string.at(-4));

console.log('------------ENDSWISH METODAAS------------')

if(string.endsWith('ramd().')) {
    console.log('stringas baigiasi funkcijos pavadinimu')
}

// string[5], skaicius 5 yra pozicija (index) arba indexas
console.log('-----------INDEXOF METODAS----------');

string = 'Naudokite funkcija rand().';

console.log(`
    Funkcijos pavadinimas prasideda ties: 
    ${string.indexOf('rand()')}
    pozicija
`);

console.log('-----------REPLACE METODAS----------');
// Pakeičia pirma surastą reikšmę norima

string = 'Naudokite funkcija rand(). Funkcija rand() yra labai gera.';

let naujasStringas = string.replace('rand()', 'random()');

console.log(naujasStringas);

console.log('-----------REPLACEALL METODAS----------');
// Pakeičia visas surastas reikšmes norimomis

string = 'Naudokite funkcija rand(). Funkcija rand() yra labai gera.';

naujasStringas = string.replaceAll('rand()', 'random()');

console.log(naujasStringas);

console.log('-----------SKAIČIŲ APVALINIMAS----------');
// Math yra globalus objektas
// Jeigu turim skaičių po kablelio jį žymime tašku
let skaicius = 3.514151151;
let rezultatas = Math.round(skaicius);
// Suapvalinimas iki sveikojo skaičiaus
console.log(`Suapvalintas skaičius iki sveikojo pagal matematinę taisyklę ${rezultatas}`);

// Suapvalinimas iki žemesnio sveikojo skaičiaus
skaicius = 3.99999999;
rezultatas = Math.floor(skaicius);

console.log(`Suapvalintas skaičius floor metodu: ${rezultatas}`);

// Suapvalinimas iki aukštesnio sveikojo skaičiaus
skaicius = 3.00000001;
rezultatas = Math.ceil(skaicius);

console.log(`Suapvalintas skaičius ceil metodu: ${rezultatas}`);

// Suranda mažiausią skaičių
let maziausias = Math.min(55, 15, 88, 105, 12, 65); //Skaičių kiekis neribotas
// Suranda didžiausią skaičių
let didziausias = Math.max(55, 15, 88, 105, 12, 65); 

console.log(`Mažiausias skaičius yra: ${maziausias}`);
console.log(`Didžiausias skaičius yra: ${didziausias}`);