import express from 'express';
import session from 'express-session';
import User from './model/user.js';
import users from './controller/user.js';
import posts from './controller/post.js';
import comments from './controller/comment.js';
import mongoose from 'mongoose';

const app = express();

await mongoose.connect('mongodb://localhost:27017/instagram');

app.set('trust proxy', true);

// sesijos sukurimas
app.use(session({
    // slapto frazes nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true,
}));

// prirasom sitas eilutes kad gautume formos duomenis x-www-from-urlencoded formatu
app.use(express.urlencoded({
    extended: true
}))

// nustatymas gauti duomenis JSON formatu
app.use(express.json())

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

// kontroleriu registracija
app.use('/users', users)
app.use('/posts', posts)
app.use('/comments', comments)


app.listen(3000);