import { Router } from "express";
import User from '../model/user.js';
import upload from '../middleware/multer.js'
import bcrypt from 'bcrypt';

const router = Router()
// konkretaus suradimas su psw
router.get('/users', async (req, res) => {
    res.send(await User.find({ password: "awdawdawd", email: "wilave6994@meogl.com" }).exec());
    // res.send(await User.find({ email: "wilave6994@meogl.com" }).exec());
})

router.post('/login', async (req, res) =>  {
    //prisijungimui tikimes: emeilo ir passwordo 
    // console.log(req.body) //patikriname ar gaunam duomenis
    try {
        // findOne metodas rgazina tik vieno iraso info
        const data = await User.findOne({ email: req.body.email })
       
        // jei vartotojas nerastas nutraukiame funkcija ir grazinam zinute
        if(!data) 
            return res.status(401).json('neteisingas el. pasto adresas')

         // jei vartotojo slaptazodis nesutampa su ivestu - grazinam klaidos koda ir zinute
        if(!await bcrypt.compare(req.body.password, data.password)) 
            return res.status(401).json('neteisingas slaptazodis')
        
        // priskiriame vartotojo info prie sesijos
        req.session.user = {
            _id: data._id,
            user_name: data.user_name,
            photo: data.photo,
            bio: data.bio,
            email: data.email
        }

        // issiunciame vartotojo duomenis
        res.json(req.session.user);
        
    } catch {
        res.status(500).json('ivyko klaida prisijungiant')
    }
    })

router.post('/register', upload.single('photo'), async (req, res) => {
    try {
        if(req.file) 
            req.body.photo = req.file.filename; //priskiriame failo pavadinima prie i mongodb irasomu duomenu

        // slaptazodzio sifravimas
        // hash - sifruotas slaptazodis/stringas
        req.body.password = await bcrypt.hash(req.body.password, 10)

        // sukuriame vartotoja
        await User.create(req.body)
        // graziname zinute
        res.json('Vartotojas sekmingai sukurtas')
    } catch {
        // ivykus klaidai graziname klaidos koda ir zinute
        res.status(500).json('registruojant vartotoja ivyko klaida')
    }
})

    export default router