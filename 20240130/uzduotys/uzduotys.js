function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write(`<h2>========== 1 uzduotis ==========</h2>`);

// dvieju ciklu sprendimas
// for(let i = 0; i < 8; i++) {
//     for(let x = 0; x < 50; x++) {
//     document.write('*');
//     }
//     document.write('<br />');
// }

// vieno ciklo sprendimas
let rezultatas = '';

for (let i = 1; i < 400; i++) {
    rezultatas += '*';

    if (i % 50 === 0) {
        rezultatas += '<br />'
    }
}

document.write(rezultatas);

document.write(`<h2>========== 2 uzduotis ==========</h2>`);
let i = 0;
let didesnisskaicius = 0;
while (i < 300) {
    let skaicius = rand(0, 300)

    if (skaicius > 150) {
        didesnisskaicius++;
    }
    if (skaicius > 275) {
        document.write(`<span style="color: red">${skaicius} </span>`)
    } else {
        document.write(`<span> ${skaicius} </span>`)
    }

    i++
}
document.write(`<p>virs 150: ${didesnisskaicius}</p>`)



document.write(`<h2>========== 3 uzduotis ==========</h2>`);
i = 0;

let kablelis = `,`
let tarpas = ''

while (i < 3000) {
    if (i % 77 === 0) {
        document.write(`<span> ${i}</span>`);
        if (i != 2926) {
            document.write(`${kablelis}`)
        }
    }


    i++
}


document.write(`<h2>========== 4 uzduotis ==========</h2>`);

let result = '';
for (let i = 1; i <= 25 * 25; i++) {

    result += '*'
    if (i % 25 === 0) {
        result += '</br>'
    }
}

document.write(`<div style="line-height: 7px;">${result}</div>`);

document.write(`<h2>========== 5 uzduotis ==========</h2>`);

let size = 25;
let rez = '<div style="line-height: 7px;">';

for (let y = 0; y < size; y++) {
    console.log('eilute');
    for (let x = 0; x < size; x++) {
        if (x === y || x === size - y - 1) {
            rez += '<span style="color: red;">*</span>'
        } else {
            rez += '*';
        }
    }

    rez += '<br>';
}
rez += '</div>';

document.write(rez);

document.write(`<h2>========== 6 uzduotis ==========</h2>`);
document.write(`<h4>a</h4>`)

let herbas = 0;
let skaicius = 0;

while (true) {
    let moneta = rand(0, 1);
    console.log(moneta);
    if (moneta === 0) {
        document.write('H')
        break;
    } else {
        document.write('S')
    }

}

document.write(`<h4>b</h4>`)

while (true) {
    let moneta = rand(0, 1);

    console.log(moneta);

    if (moneta === 0) {
        document.write('H')
        herbas++;
    } else {
        document.write('S')
    }
    if (herbas >= 3) {
        break;
    }
}

document.write(`<h4>c</h4>`)

let kiekKartu = 0;

while (kiekKartu < 3) {
    let moneta = rand(0, 1);

    if (moneta === 0) {
        document.write('H')
        kiekKartu++;
    } else {
        document.write('S')
        kiekKartu = 0;
    }
    // if (herbas >= 3) {
    //     break;
    // }
}

document.write(`<h2>========== 7 uzduotis ==========</h2>`);

let Petrorezultatas = 0;
let Kaziorezultatas = 0;

while (true) {
    let Petras = rand(10, 20);
    let Kazys = rand(5, 25);

    Petrorezultatas += Petras;
    Kaziorezultatas += Kazys;

    console.log(`Partijos taskai: ${Petras} ${Kazys}`);

    if (Petras > Kazys) {
        document.write(`<p>partija laimejo Petras</p>`);
    } else if (Petras === Kazys) {
        document.write(`<p>lygiosios</p>`);
    } else {
        document.write(`<p>partija laimejo Kazys</p>`);
    }

    if (Petrorezultatas >= 222 || Kaziorezultatas >= 222)
        break;

}
document.write(`<p>Petro taskai: ${Petrorezultatas} Kazio taskai: ${Kaziorezultatas}</p>`)

if (Petrorezultatas > Kaziorezultatas) {
    document.write(`<h6>zaidima laimejo Petras</h6>`);
} else if (Petrorezultatas === Kaziorezultatas) {
    document.write(`<h6>lygiosios</h6>`);
} else {
    document.write(`<h6>zaidima laimejo Kazys</h6>`);
}

document.write(`<h2>========== 8 uzduotis ==========</h2>`);
document.write(`<h4>a</h4>`)

let vinis = 85;

let smugiai = 0;

for (let i = 0; i < 5; i++) {
    let bendrasGylis = 0;
    while (bendrasGylis <= vinis) {
        let ikalimoGylis = rand(5, 20);

        bendrasGylis += ikalimoGylis;

        smugiai++;
    }
}

document.write(`Viniai ikalti prireike: ${smugiai} smugiu`)

document.write(`<h4>b</h4>`)

vinis = 85 * 5;
let bendrasGylis = 0;
smugiai = 0;


while(bendrasGylis <= vinis) {
    smugiai++;
    
    if(rand(0,1) === 0) {
        console.log(`nepataikem i vini`)
        continue; 
        // pereinam  i sekancia iteracija
    } 
        let ikalimoGylis = rand(20, 30);

        bendrasGylis += ikalimoGylis;
    }
    
    document.write(`Viniai ikalti prireike: ${smugiai} smugiu`);