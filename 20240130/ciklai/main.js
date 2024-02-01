function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// loop - ciklas = veiksmu kartojimas iki gausime norima rezultata

//ciklu rusys: inkrimentiniai ir rekursiniai 

// inkrimentiniai

console.log(('------------WHILE CIKLO APRASYMMAS ------------'))
// while ( kondicija ) { 

// }
//  i = increment (inkrementas)

let i = 1

while (i <= 100) {
    // iteration - iteracija = vieno ciklo rotacija
    console.log(i + 'iteracija');

    // inkremento pavadinimas
    i++;

}
// pirmas pvz. Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. (sprendimui masyvo nenaudoti).

i = 0;
let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

while (i < 4) {
    let skaicius = rand(0, 2);

    if (skaicius === 0)
        nuliai++;

    if (skaicius === 1)
        vienetai++;

    if (skaicius === 2)
        dvejetai++;

    i++;
}

console.log(`nuliai: ${nuliai} vienetai: ${vienetai} dvejetai: ${dvejetai}`);

// ruletes krupje suka rata 100 kartu. kiekvieno sukimo metu atvaizduokit iskritusi skaiciu nsupalvinta atitinkamomis spalvomis: 0 - zalias, nelyginis sk - juodas, lyginis - raudonas.

i = 0

while (i < 100) {
    let skaicius = rand(0, 36);

    if (skaicius === 0) {
        document.write((`<div style="color: green">${skaicius}</div>`))
    }
    //lyginio skaiciaus tikrinimas
    if (skaicius % 2 === 0) {
        if (skaicius === 0) {
            document.write((`<div style="color: green">${skaicius}</div>`))
        } else {
            document.write(`<div style="color: red">${skaicius}</div>`);
        }
    } else {
        document.write(`<div style="color: black">${skaicius}</div>`);
    }

    i++
}

//  ciklo aprasymas nezinant iteraciju kiekio
//  cikla stabdome kai iskrenta skaicius 55. kiekvienos iteracijos eigoje generuojame atsitiktini skaiciu nuo 0 iki 100 ir ji tikriname.

// 1 pvz - ciklas nestabdomas
// i = 0;

// while(i < 100000) {
//     let skaicius = rand(0, 100);

//     if(skaicius === 55) {
//         console.log('rezultatas pasiektas')
//     }
    
//     i++
// }

// 2 pvz. - ciklas stabdomas kintamuoju

let veikia = true
let kiekis = 0;

while(veikia) {
    let skaicius = rand(0, 100);

    if(skaicius === 55) {
        console.log('rezultatas pasiektas')
        veikia = false;
    }

    kiekis++;
}

console.log(`rezultatui pasiekti prireike: ${kiekis} iteraciju`);

// 3 pvz. ciklas stabdomas break komanda

kiekis = 0;

while(true) {
    let skaicius = rand(0, 100);

    if(skaicius === 55) {
        console.log('rezultatas pasiektas')
        break;
        // break komanda sustabdo cikla
    }

   
    kiekis++;
}

console.log(`rezultatui pasiekti prireike: ${kiekis} iteraciju`);

// 4pvz. ciklo iteracijos praleidimas

i = 1;

while(i <= 10) {
    i++;

    if(i % 2 === 1) {
       continue;
    }
    
    console.log(`gautas skaicius: ${i}`);
}

console.log(('------------FOR CIKLO APRASYMMAS ------------'))

// perduodamos trys reiksmes atskirtos kabliataskiais.
// pirmoji reiksme - inkremento deklaravimas; 
// antroji - kondicija kuomet ciklas turi baigtis; 
// trecioji - kas nutinka su inkrementu

for(let i = 0; i < 100; i++) {
    console.log('For ciklas sukasi, dabartine iteracija: ' + i);
}

//  -- dekrementas, mazejancia tvarka
for(let i = 100; i < 0; i--) {
    console.log('For ciklas sukasi, dekramento principu, dabartine iteracija: ' + i);
}
