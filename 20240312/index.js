import express from 'express';
// express karkaso iniciavimas
const app = express();

// NORINT PRIIMTI DUOMENIS URLENCODED FORMATU REGISTRUOJAMA EILUTE
app.use(express.urlencoded({
    extended: true
}));

// kelio registravimas (route)
// CRUD:
// Create - POST;
// Read - GET;
// Update - UP;
// Delete - DELETE

// galimi metodai:
// .get() - GET HTTP metodas (GET metodu pateikiant uzklausa body duomenys nera persiunciami)
// .post() - POST HTTP metodas
// .put() - PUT  HTTP metodas
// .delete() - DELETE  HTTP metodas

// pirmasis parametras: kelias(route), endpoint;
// antrasis parametras: funkcija, kuri bus issaukiama vartotojui atejus nurodytu keliu

app.get('/', (req, res) => {
    // req - request (uzklausa)
    // res - response (atsakymas)

    console.log('funkcija aktyvuota')

    // informacijos sugrazinimas/ teksto 'Hello World' grazinimas vartotojui (client) 
  res.send('<h1>Titulinis puslapis pakeistas</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Apie mus</h1>')
});

// query parametru upriemimas
app.get('/query', (req, res) => {
    // req.query - query parametrai nugula req objekte su query raktazodziu
    // console.log(req.query)
    res.send(`
        <li>Daina: ${req.query.song}</li>
    `)
})

// POST http metodu perduodamu duomenu priemimas
app.post('/post', (req, res) => {
    // req.body grazina body lygmenyje persiustus duomenis
    console.log(req.body)

    if(req.body.song === 'Live forever') {
        console.log('Kondicija teigiama')
    }

    res.send(`
    <li>Filmas: ${req.body.movie ? req.body.movie : 'Nerasta'}</li>
    <li>Filmas: ${req.body.song}</li>
`)
});

// PERDUOTU DUOMENU TIKRINIMAS
app.post('/check', (req, res) => {
    if(req.body.name === 'Lukas') {
        return res.send('Administratorius'); //return jei else nerasom
    } else{
        res.send('Vartotojas');
    }
});
// serverio paleidimas port'e 3000.
app.listen(3000);