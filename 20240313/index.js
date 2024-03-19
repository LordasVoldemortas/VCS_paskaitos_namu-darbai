import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import post from './controller/post.js';
import multer from 'multer';
import { access, mkdir } from 'node:fs/promises' //mkdir - make a directory

const app = express();
// multer modulio iniciavimas

// multer diskstorage iniciavimas
const storage = multer.diskStorage({
    // nurodymas kur failai bus saugomi
    destination: async (req, failas, next) => {
        const fileDir = './uploads'
        try {
            // tikriname ar ivyks klaida
            // console.log() nebutinas
            await access(fileDir)
            console.log('klaida neivyko')
        } catch(error) {
            console.log(error);
            // vykdome veiksmus ivykus klaidai
            // console.log() nebutinas
            // error gali nebuti
            // console.log('ivyko klaida', error)
            // direktorijos sukurimas, jei si neegzistuoja
            
            await mkdir(fileDir)
        }
        

        // nurodomas direktorijos pav kur bus saugomi failai
        next(null, fileDir)
    },
    filename: (req, file, next) => {
         //console.log(file) - jei vienas failas, 
        //  console.log(req.files) - jei du ir daugiau
        const fileSplit = file.originalname.split('.')
        const format = fileSplit[fileSplit.length -1]
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
       
        next(null, uniqueSuffix + '.' + format)
    } 
})

const upload = multer({
    // direktorijos nustatymas kur bus talpinami failai
    storage: storage,
    fileFilter: (req, file, next) => {
        
    }
})

app.use(express.urlencoded( {
    extended: true
}));

app.use('/users/', user);
app.use('/posts/', post);

// middleware (tarpininku) priskyrimas
// key'jus nuotrauka, del to rasom 'nuotrauka'
// upload.single() - naudojamas vienam failui ikelti
// upload.array() - naudojamas keliems failams ikelti
// upload.fields() - naudojamas keliems failams skirtingomis name reiksmemis ikelti
// nurodomilaukeliu pavadinimai (name) ir pasirinktinai maximalus kiekis
// upload.fields([{ name: 'nuotrauka' }, { name: 'failas', maxCount: 2 }]),
app.post('/files', upload.fields([{ name: 'nuotrauka' }, { name: 'failas' }]), (req, res) => {
    res.send('failas sekmingai ikeltas')
})

// Prisijungimas prie mongodb duomenų bazės pavadinimu: pirma_duombaze
await mongoose.connect('mongodb://localhost:27017/pirma_duombaze');

// MVC:
// Model - Atsakingas už informacijos paėmimą iš duomenų bazės
// View  - Atsakingas už iš controlerio gautos informacijos atvaizdavimą
// Controller - Atsakingas už modelio informacijos apdorojimą

app.listen(3000);



// // middleware (tarpininku) priskyrimas
// app.post('/files', (req, res, next) => {
//     // info patikrinimas
//     next(null) //next nurodo sekancios f-jos issaukima
// },
// (req, res) => {
//     res.send('failas sekmingai ikeltas')
// })
