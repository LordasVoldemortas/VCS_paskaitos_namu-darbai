function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write(`<h2>========== 1 uzduotis ==========</h2>`);
// Naršyklėje atspausdinkite visus nelyginius skaičius nuo 7 iki 31.

let r = 0

for (r = 7; r <= 31; r = r + 1) {
    if (r > 7) {

        r++
    }
    document.write(`${r} `);
    console.log(`${r} `)

}

document.write(`<h2>========== 2 uzduotis ==========</h2>`);
// Aprašykite ciklą kuris naršyklėje atspausdintų skaičių didėjimo modelį iki dešimties. 

let totalRows = 10
let result = '';

for (let i = 1; i <= totalRows; i++) {
    for (let newRow = 1; newRow <= i; newRow++) {
        result += newRow + '   ';
    }
    document.write(`<p style="line-height: 5px; letter-spacing: 3px;">${result}</p>`)
    console.log(result);
    result = '';

}

document.write(`<h2>========== 3 uzduotis ==========</h2>`);
// Jums duotas stringas: “Žalgiris, Anadolu Efes, Barcelona BC”. Pasinaudodami ciklų pagalba iš stringo ištraukite vieną atsitiktinį komandos pavadinimą. 
// Žalgiris = 0-7; 10-22 24-36
let newstring = 'Žalgiris, Anadolu Efes, Barcelona BC'
console.log(newstring.length)

let zalgiris = newstring.substring(0, 8);
// document.write(zalgiris);

let anadolu = newstring.substring(10, 22);
// document.write(anadolu);

let barcelona = newstring.substring(24, 36);
// document.write(barcelona);
let komanda = ''
while (true) {
    komanda = rand(0, 2);
    console.log(komanda);
    if (komanda === 0) {
        document.write(`<p>${newstring.substring(0, 8)}</p>`)
    } else if (komanda === 1) {
        document.write(`<p>${newstring.substring(10, 22)}</p>`)
    } else {
        document.write(`<p>${newstring.substring(24, 36)}</p>`)
    }
    break;
}

document.write(`<h2>========== 4 uzduotis ==========</h2>`);
// Jums duotas stringas: “54 77 2 59 17 19 108”. Paimkite jame esančius skaičius ir patikrinkite juos ar jie yra pirminiai. T.y. ar natūralusis skaičius yra didesnis nei 1 ir be liekanos dalinasi tik iš savęs ir iš vieneto

let stringas = '54 77 2 59 17 19 108';
let skaicius = '';
let isPrime = true 
for(let i = 0; i < stringas.length; i++) {
    // console.log(stringas[i])
	if(stringas[i] === ' ') {
       for (let i = 2; i < skaicius; i++) {
    
            if (skaicius % i == 0) {
                isPrime = false;
                console.log(`next ${skaicius}`)
                break;
            } // console.log(skaicius)
       }
       skaicius = '';
    } else {
        skaicius += stringas[i];
    }

 }

// looping through 2 to number-1

    // else {
    //     skaicius += stringas[i]
    //     console.log(`next ${skaicius}`)
    //     break;
    // } 
    

/* Pirminių skaičių tikrinimas nuo 1 iki 101 */

// for(let number = 1; number <= 101; number++) {
// 	for(let x = 2; x < number; x++) {
//   	if(number % x === 0) {
//     	console.log(`Skaičius ${number} nėra pirminis`);
//     	break;
//     }
//   }
// }
    // if (skaicius <= 1) {
    //     isPrime = false;
    // }
    // for (let i = 2; i <= 2; i++) {
    //     if (skaicius % i === 0) {
    //         console.log(skaicius)
    //         isPrime = false;
            
    //     }
    // }
    // // isPrime = true;
 

// while(true) {


//     break;
// }