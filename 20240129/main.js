function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write(`<h2>Pirmoji uzduotis</h2>`);
let firstName = 'Tom' 
let lastName = 'Hardy';

console.log(firstName.lenght);
console.log(lastName.length);

if(firstName.length < lastName.length) {
    document.write(`<p>Tom</p>`)
} else {
    document.write(`<p>Hardy</p>`)
}

firstName = 'Cillian' 
lastName = 'Murphy';

console.log(firstName.lenght);
console.log(lastName.length);

if(firstName.length < lastName.length) {
    document.write(`<p>Cillian</p>`)
} else {
    document.write(`<p>Murphy</p>`)
}

document.write(`<h2>Antroji uzduotis</h2>`);

firstName = `Chris`
lastName = `Hemsworth`

document.write(`<p> ${(firstName.toUpperCase())}</p>`);
document.write(`<p> ${(lastName.toLowerCase())}</p>`);


document.write(`<h2>Trecioji uzduotis</h2>`);

firstName = 'Paul'
lastName = 'Anderson'
let nameInitials = firstName[0] + lastName[0];

document.write(`<p>${nameInitials}</p>`)

document.write(`<h2>Ketvirtoji uzduotis</h2>`);

firstName = 'Jordan';
lastName = 'Bolger';

console.log(firstName.slice(-3));
console.log(lastName.slice(-3));

let lastThree = firstName.slice(2) + lastName.slice(3);
document.write(`<p>${(lastThree.toUpperCase())}</p>`);


document.write(`<h2>Penktoji uzduotis</h2>`);

let paragraph = 'An American in Paris';
// paragraph = paragraph.replaceAll('A', '*');
// paragraph = paragraph.replaceAll('a', '*');
// document.write(paragraph);

paragraph = paragraph.replaceAll(/[a]/gi, '*')
//  - = ßrange nuo iki
// g = global
// [] = nurodo ne specifine situaacija
// i = case insensitive, ignoruojamas skirtumas tarp didziuju ir mazuju raidziu

document.write(`<h2>Sestoji uzduotis</h2>`);


newparagraph = paragraph.replaceAll(`*`, ``);
console.log(newparagraph.length);
console.log(paragraph.length);
document.write(`${paragraph.length - newparagraph.length}`);
// document.write(paragraph.length - newparagraph.length);


document.write(`<h2>Septintoji uzduotis</h2>`);

paragraph = 'An American in Paris';
paragraph = paragraph.replaceAll('A', '');
paragraph = paragraph.replaceAll('a', '');
paragraph = paragraph.replaceAll('e', '');
paragraph = paragraph.replaceAll('i', '');
document.write(paragraph);

document.write(`<h2>Astuntoji uzduotis</h2>`);

let newstring = `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`;

console.log(newstring, newstring[19], newstring[21], newstring.length)
document.write(`<p>${newstring}</p><p>${newstring[19]} ${newstring[21]} ${newstring.length}</p>`)

document.write(`<h2>Devintoji uzduotis</h2>`);

let stringas = 'abcdefghijklmnopqrstuvwxyz'
console.log(stringas.length)
// stringas = rand(0, 26)
console.log(stringas[rand(0,26)], stringas[rand(0,26)], stringas[rand(0,26)]);
document.write(`<p>${stringas[rand(0,26)]} ${stringas[rand(0,26)]} ${stringas[rand(0,26)]}</p>`)


