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

// 2b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;