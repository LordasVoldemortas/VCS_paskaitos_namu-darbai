import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import user from './controller/user.js'
import post from './controller/post.js'
import status from './controller/status.js'
import cors from 'cors'

const app = express()
await mongoose.connect('mongodb://localhost:27017/seimo_nariu_darbotvarkes_registras');
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(session({
    // slapto frazes nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true,
}));
// app.options('*', cors());

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.get('/', (req, res) => {
    res.send('sveikinu prisijungus')
})
// app.get('/', (req, res) => {
//   if(req.session.loggedIn) {
//     res.json('Sveiki prisijunge')
//   } else {
//     res.status(401).json('turinys prieinamas tik registruotiems vartotojams')
//   }
// })
app.use(session({
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true
}));
app.options('/users/register', cors());
app.use('/users', user)
app.use('/posts', post)
app.use('status', status)


app.use('/uploads', express.static('./uploads'));

app.listen(3000)