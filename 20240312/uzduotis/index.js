import express from 'express';
const app = express()

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    if(req.body.email === 'admin@vcs.lt' && req.body.password === 'Github12') {
        res.send('Sveikiname sėkmingai prisijungus');
    } else if (!req.body.email || !req.body.password ) {
        res.send('Negavome jokių duomenų, bandykite dar kartą')
    } else {
        res.send('Neteisingi prisijungimo duomenys');
    }  
})

// Sukurkite express GET route'ą /news kuris grąžintų HTML stringą su trimis naujienų pavadinimais.
// Taipogi funkcijoje priimkite query parametrą "adsource" su galimomis reikšmėmis: "google" ir "amazon".
// Jeigu query parametras yra "google" virš naujienų įrašykite tekstą: "Google reklamos blokas".
// Jeigu parametras yra "amazon": "Amazon reklamos blokas".
// Jeigu parametras neperduodamas arba jo reikšmė yra kitokia prie naujienų nepridėkite jokio teksto.

app.get('/news', function (req, res) {
const stringas = `<li>"Muštynių kvapas Eurolygoje: įsikišo ir Šaras",</li>
<li>"Apie K.Lukošiūną ir lemiamą mūšį kalbėjęs A.Trinchieri: „Čia kaip bokse“</li>
<li>„Žalgirio“ latvio pastangų nepakako: puikus Šmito pasirodymas Kaune"</li>
`
    console.log(req.query.adsource)
    if(req.query.adsource === 'google') {
        res.send(`<h1>Google reklamos blokas</h1> ${stringas}`)
    } else if(req.query.adsource === 'amazon') {
        res.send(`<h1>Amazon reklamos blokas</h1> ${stringas}`)
    } else {
        res.send(`<h1></h1> ${stringas}`)
    }
})

// Sukurkite express POST route'ą /register kurio tikslas priimti registracijos duomenis
// Patikrinkite perduotas reikšmes. Jeigu trūksta bent vienos iš jų grąžinama žinutė: "Negauti registracijos duomenys".
// Atlikite reikšmių validaciją: 
// Vardas ir pavardė negali būti trumpesni nei 3 ir ilgesi nei 200 simbolių.
// El. pašto adresas negali būti trumpesnis nei 5 ir ilgesnis nei 50 simbolių. Taip pat privalo atitikti el. pašto formatą.
// Slaptažodis privalo turėti bent vieną skaičių ir turi būti ne trumpesnis nei 8 ir ne ilgesnis nei 16 simbolių.

// Neatitikus kažkuriam iš išvardintų kriterijų grąžinkite žinutę su klaidos kriterijumi. pvz. (Vardas privalo būti nuo 3 iki 200 simbolių ilgio).

// Jeigu validacija sėkminga grąžinama žinutė: “Sveikiname sėkmingai prisiregistravus platformoje”.

const validateEmail = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
};

const passwordValid = (password) => {
    return /[0-9]/.test(password);
}

app.post('/register', (req, res) => {
console.log(req.body)

if(!req.body.name || !req.body.last_name || !req.body.email || !req.body.password) {
    return res.send('Negauti registracijos duomenys');
}

if(req.body.name.length <= 3 || req.body.name.length >=200) {
    return res.send('Neteisingai įvestas vardas');
}

if(req.body.last_name.length <= 3 || req.body.last_name.length >=200) {
    return res.send('Neteisingai įvesta pavardė');
}

if(req.body.email.length <= 5 || req.body.email.length >= 50) {
    return res.send('Neteisingai įvestas el.pašto adresas')
} else if (!validateEmail(req.body.email))
    return res.send('Neteisingai įvestas el.pašto adresas')

if(req.body.password.length <= 8 || req.body.password.length >= 16) {
    return res.send('Neteisingai įvestas slaptažidis')
} else if (!passwordValid(req.body.password)){
    return res.send('Neteisingai įvestas slaptažidis')
}

res.send('Sveikiname sėkmingai prisiregistravus platformoje')

})

app.listen(3002)