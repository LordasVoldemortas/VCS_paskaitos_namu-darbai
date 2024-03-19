import express from 'express';
import session from 'express-session';
import User from './model/user.js';
import mongoose from 'mongoose';

const app = express();
app.set('trust proxy', true);

await mongoose.connect('mongodb://localhost:27017/pirma_duombaze');

app.use(session({
    // slapto frazes nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true,
}));

// prirasom sitas eilutes kad gautume formos duomenis
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    // req.session.labas = 'Labas Pasauli'
    // tikriname ar vartotojas yra prisijunges, jeigu ne, grazinsime statusa 401 ir zinute: "turinys prieinamas tik registruotiems vartotojams"
    // jei taip: tuomet grazinsim statysa 200 ur pasisveikinimo zinute "labas pasauli"
    if(req.session.loggedIn) {
        res.json("Labas Pasauli")
    } else {
        res.status(401).json("turinys prieinamas tik registruotiems vartotojams")
    }
});

// konkretaus suradimas su psw
app.get('/users', async (req, res) => {
    res.send(await User.find({ password: "awdawdawd", email: "wilave6994@meogl.com" }).exec());
    // res.send(await User.find({ email: "wilave6994@meogl.com" }).exec());
})

app.post('/login-user', async (req, res) =>  {
        // Gauti vartotojo įvestis iš užklausos, istraukiami vartotojo duomenys (pastas, slaptazodis)
        const { email, password } = req.body;

        // Surasti vartotoją duomenų bazėje, ieško vartotojo duomenų bazėje pagal el. pašto adresą (email). Gautas vartotojo objektas bus saugomas kintamajame user.
        const user = await User.findOne({ email });

        // Patikrinti ar vartotojas rastas ir ar slaptažodis teisingas
        if (user && user.password === password) {
            req.session.loggedIn = true;
            res.json("Sveikiname prisijungus");
        } else {
            res.status(401).json('Neteisingi prisijungimo duomenys');
        }
    
});

// app.post('/login', (req, res) => {
//     // tikrinam ar duomenys prisijungimo yra teisingi
//     // jei taip: grazinam statusa 200, zinute "sveikiname prisijungus" ir prie sesijos duomenu skiriame raktazodi logedin ir true
//     // jei ne: grazinam statusa 401, zinute "neteisingi prisijungimo duomenys"
//     // teisingi duomenys "admin@vcs.lt"
//     // psw '1234'
//     // await MyModel.find({ name: /john/i }, 'name friends').exec();
//     if(req.body.email === 'admin@vcs.lt' && req.body.password === '1234'){
//         req.session.loggedIn = true;
//         res.json("sveikiname prisijungus")
//     } else {
//         res.status(401).json('neteisingi prisijungimo duomenys')
//     }
// })

app.listen(3000);