function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// pirma uzduotis

let vardas = 'Ieva';
let pavarde = 'Petrauskiene';
let x = 1993;
let y = 2024;

let age = y - x;

let rezultatas = `As esu ${vardas} ${pavarde}. Man yra ${age} metai.`
document.write(`As esu ${vardas} ${pavarde}. Man yra ${age} metai.`)
console.log(rezultatas);

// antra uzduotis
// Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naršyklėje. 

let a = rand(0, 4);
let b = rand(0, 4);
console.log(a, b);

if (a > b) {
    document.write(a / b);
} else if (b > a) {
    document.write(b / a);
} else {
    document.write(`<p>A ir B yra lygus</p>`);
}

//antras variantas uzduoties

let pirmas = rand(0, 4);
let antras = rand(0, 4);
document.write(`<p>gautos reiksmes: ${pirmas} ${antras} </p>`)

if(pirmas > antras) {
    if(antras === 0) {
        document.write(`<p>Dalyba is nulio negalima</p>`)
    } else {
        document.write(`<p>rez: ${(pirmas / antras).toFixed(2)}</p>`)
    }
} else if(pirmas === antras) {
    document.write(`<p>rez: skaiciai yra lygus</p>`)
} else {
    if(pirmas === 0) {
        document.write(`<p> rez: 0</p>`)
    }
    document.write(`<p>rez: ${(antras / pirmas).toFixed(2)}</p>`)
}



// trecia uzd. Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.

let i = rand(0, 25);
let o = rand(0, 25);
let p = rand(0, 25);
console.log(i, o, p);

if (i <= o) {
    if (o <= p) {
        console.log('O yra vidurinis skaicius');
    } else {
        console.log('o nera vidurinis skaicius')
    }
} else {
    console.log('o nera vidurinis skaicius')
}

//  antras variantas
// let pirmasSkaicius = rand(0, 25);
// let antrasSkaicius = rand(0, 25);
// let treciasSkaicius = rand(0, 25);
// console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

let pirmasSkaicius = 5;
let antrasSkaicius = 10;
let treciasSkaicius = 15;


if(pirmasSkaicius <= antrasSkaicius) {
    // antras skaicius didesnis nei pirmas
    if(antrasSkaicius <= treciasSkaicius) {
        console.log(`antras skaicius yra vidurinis`)
    } else {
        // antras skaicius yra didesnis nei trecias
        if(pirmasSkaicius <= treciasSkaicius) {
            console.log('trecias skaicius yra vidurinis')
        } else {
            console.log('pirmas skaicius yra vidurinis')
        }
    }
} else {
// pirmas skaicius didesnis nei antras
    if(pirmasSkaicius <= treciasSkaicius) {
        console.log('pirmas skaicius yra vidurinis');
    } else {
        console.log('antras skaicius yra vidurinis');
    }
}


// ketv uzd. Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).

let random_no1 = rand(0, 2);
let random_no2 = rand(0, 2);
let random_no3 = rand(0, 2);
let random_no4 = rand(0, 2);
console.log(random_no1, random_no2, random_no3, random_no4);

let zeroes = 0;
let ones = 0;
let twos = 0;

if (random_no1 === 0) {
    zeroes++;
}
else if (random_no1 === 1) {
    ones++;
}
else {
    twos++;
}

if (random_no2 === 0) {
    zeroes++;
} else if (random_no2 === 1) {
    ones++;
} else {
    twos++;
}

if (random_no3 === 0) {
    zeroes++;
} else if (random_no3 === 1) {
    ones++;
} else {
    twos++;
}

if (random_no4 === 0) {
    zeroes++;
} else if (random_no4 === 1) {
    ones++;
} else {
    twos++;
}

console.log(`nuliu yra ${zeroes}, vienetu yra ${ones}, dvejetu yra ${twos}`);


//penkta uzd. Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3> Rezultatą atvaizduoti naršyklės lange.
let skaicius = rand(1, 6)
document.write(`<h${skaicius}>${skaicius}</h${skaicius}>`)


// sesta uzduotis.

pirmas = rand(-10, 10);
antras = rand(-10, 10);
trecias = rand(-10, 10);
let digit;
let color;

// if(pirmas < 0) {
//     document.write(`<span style="color: green;">${pirmas}</span> `);
// } else if(pirmas === 0) {
//     document.write(`<span style="color: red;">${pirmas}</span> `);
// } else {
//     document.write(`<span style="color: blue;">${pirmas}</span> `);
// }

// if(antras < 0) {
//     document.write(`<span style="color: green;">${antras}</span> `);
// } else if(antras === 0) {
//     document.write(`<span style="color: red;">${antras}</span> `);
// } else {
//     document.write(`<span style="color: blue;">${antras}</span> `);
// }

// if(trecias < 0) {
//     document.write(`<span style="color: green;">${trecias}</span> `);
// } else if(trecias === 0) {
//     document.write(`<span style="color: red;">${trecias}</span> `);
// } else {
//     document.write(`<span style="color: blue;">${trecias}</span> `);
// }

if(pirmas < 0) {
    digit = pirmas
    color = 'green'
} else if(pirmas === 0) {
    digit = pirmas
    color = 'red'
} else {
    digit = pirmas
    color = 'blue'
}
document.write(`<span style="color: ${color};">${digit}</span> `);

if(antras < 0) {
    digit = antras
    color = 'green'
} else if(antras === 0) {
    digit = antras
    color = 'red'
} else {
    digit = antras
    color = 'blue'
}
document.write(`<span style="color: ${color};">${digit}</span> `);

if(trecias < 0) {
    digit = trecias
    color = 'green'
} else if(trecias === 0) {
    digit = trecias
    color = 'red'
} else {
    digit = trecias
    color = 'blue'
}
document.write(`<span style="color: ${color};">${digit}</span> `);

// septinta uzd.
let kiekis = rand(5, 3000);
let suma = kiekis;
document.write(`perkamas kiekis: <strong>${kiekis}</strong>`)

if(kiekis > 1000) {
    suma = kiekis - kiekis * 0.03
} else if (kiekis > 2000) {
    suma = kiekis - kiekis * 0.04
}
document.write(`<p>galutine suma: ${suma.toFixed(2)}</p>`)

// if(kiekis > 1000) {
//     suma = kiekis - kiekis * 0.03
// }
// if(kiekis > 2000) {
//     suma = kiekis - kiekis * 0.04
// }
// document.write(`<p>galutine suma: ${suma.toFixed(2)}</p>`)



// astunta. et pirmas = rand(0, 100)
// let antras = rand(0, 100)
// let trecias = rand(0, 100)
// let suma = 0;
// let skaiciai = 0;
// if(...)
//   suma += pirmas
//   skaiciai++
// if(...)
//   suma += pirmas
//   skaiciai++
// if(...)
//   suma += pirmas
//   skaiciai++
// suma / skaiciai

// 6 uzd.
