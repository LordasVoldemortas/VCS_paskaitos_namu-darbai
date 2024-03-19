function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const box = document.querySelector(`.box`);

let posTop = 0;
let posLeft = 0;
let time = 0;
// let kiekis = 0;
let playerscore = 0;
let round = 0;
let limit = 10; //turi buti 30
let gameWinner = '';

document.querySelector(".box").addEventListener("click", (event) => {
    console.log('Paspausta')
    // kiekis++;
    playerscore++;

});

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
  }


let intervaloId = setInterval(() => {
    if (time === limit) {
        let computerscore = limit - playerscore;
        time = 0;
        console.log('Roundas baigesi')
        round++ // pridėta
        // const roundResult = playerscore; // Išsaugojame kiekį, paspaudimų skaičių šiame raunde
        // kiekis = 0; // Nustatome paspaudimų kiekį naujam raundui
        console.log(playerscore)

        // sutvarkyt apatini
        if (playerscore > computerscore) {
            document.querySelector(".result").innerHTML += `<p>žaidėjas laimėjo, surinkęs ${playerscore} taškų(us)</p>`
            } else if (playerscore < computerscore) {
            document.querySelector('.result').innerHTML += `<p>kompiuteris laimėjo, surinkęs ${computerscore} taškų(us)</p>`
            } else {
            document.querySelector('.result').innerHTML += `<p>lygiosios</p>`
            }
        
      playerscore = 0;
        
        if (round === 2) { //cia 10 turi buti
                clearInterval(intervaloId);

       
                if (computerscore > playerscore) {
                    gameWinner = 'Kompiuteris';
                } else if (computerscore < playerscore) {
                    gameWinner = 'Žaidėjas';
                } else {
                    document.querySelector('.bendras').innerHTML =
                        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
                            <h1>Žaidimas baigėsi lygiosiomis</h1>
                            <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
                        </div>`;
                }
                document.querySelector('.bendras').innerHTML =
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
                        <h1>Žaidimą laimėjo ${gameWinner}, laimėjęs ${intervaloId} roundus</h1>
                        <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
                    </div>`;
        };
    }
    

    posTop = rand(50, 550);
    posLeft = rand(50, 550);
    box.style.left = `${posLeft}px`;
    box.style.top = `${posTop}px`;
    box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)},${getRandom(0, 255)})`;


    time++;
    // console.log(time);
    document.querySelector(".time").innerHTML = `${time}`;
}, 1000);


